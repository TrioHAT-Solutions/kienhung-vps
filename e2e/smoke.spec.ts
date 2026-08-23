import { test, expect, type Page } from "@playwright/test";

test.describe("Smoke - public pages", () => {
  test("homepage renders hero and CTAs", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toContainText("Developer");
    await expect(page.getByText("Tạo VPS Ngay")).toBeVisible();
    await expect(page.getByText("99.9%").first()).toBeVisible();
  });

  test("pricing page renders 4 plans", async ({ page }) => {
    await page.goto("/pricing");
    for (const plan of ["Starter", "Basic", "Professional", "Enterprise"]) {
      await expect(page.getByRole("heading", { name: plan, exact: true })).toBeVisible();
    }
    await expect(page.getByText("Phổ biến nhất")).toBeVisible();
  });

  test("configure page renders all selector sections", async ({ page }) => {
    await page.goto("/configure");
    for (const section of ["CPU", "Bộ nhớ RAM", "Lưu trữ", "Hệ điều hành", "Vị trí Datacenter", "Bandwidth", "Add-ons", "Thời hạn thuê"]) {
      await expect(page.getByRole("heading", { name: section, exact: true })).toBeVisible();
    }
    await expect(page.getByText("Chi tiết giá")).toBeVisible();
  });
});

test.describe("E2E - configure to checkout flow", () => {
  test("full journey: configure → info form → VietQR payment", async ({ page }) => {
    await page.goto("/configure");

    await page.getByText("2 Cores").click();
    await page.getByText("4 GB", { exact: true }).click();
    await page.getByText("100 GB SSD").click();
    await page.getByText("Ubuntu", { exact: true }).click();

    const summary = page.locator("div.sticky.top-24");
    await expect(summary).toContainText("Chi tiết giá");

    await summary.getByRole("button", { name: /Tiến Hành Đặt Hàng/i }).click();
    await page.waitForURL("**/checkout");

    await expect(page.getByRole("heading", { name: "Thông tin khách hàng" })).toBeVisible();
    await expect(page.getByRole("heading", { name: /Đơn hàng của bạn/ })).toBeVisible();
    await expect(page.getByText("2 vCPU Core")).toBeVisible();
    await expect(page.getByText("4GB DDR4")).toBeVisible();
    await expect(page.getByText("100GB NVMe SSD")).toBeVisible();

    await page.getByPlaceholder("Nguyễn Văn A").fill("Nguyen Van Test");
    await page.getByPlaceholder("email@example.com").fill("test@triohat.vn");
    await page.getByPlaceholder("0976830911").fill("0976830911");

    await page.getByRole("button", { name: /Tiếp tục/i }).click();

    await expect(page.getByText("Thanh toán VietQR")).toBeVisible();
    await expect(page.locator('img[alt="VietQR Code"]')).toBeVisible();
    await expect(page.getByText(/KHVPS-\d{8}-\d{4}/)).toBeVisible();
    await expect(page.getByText("Ngân hàng")).toBeVisible();
    await expect(page.getByText("Vietcombank")).toBeVisible();
  });

  test("checkout blocks empty required fields", async ({ page }) => {
    await page.goto("/configure");
    await page.getByText("2 Cores").click();
    await page.getByText("4 GB", { exact: true }).click();
    await page.getByText("100 GB SSD").click();

    const summary = page.locator("div.sticky.top-24");
    await summary.getByRole("button", { name: /Tiến Hành Đặt Hàng/i }).click();
    await page.waitForURL("**/checkout");

    await page.getByPlaceholder("Nguyễn Văn A").fill("A");
    await page.getByRole("button", { name: /Tiếp tục/i }).click();

    await expect(page.getByText(/Họ tên phải có ít nhất 2 ký tự/)).toBeVisible();
    await expect(page.getByText("Email không hợp lệ")).toBeVisible();
    await expect(page.getByText(/Số điện thoại không hợp lệ/)).toBeVisible();
  });

  test("configure blocks checkout without CPU/RAM/storage", async ({ page }) => {
    await page.goto("/configure");

    const payButton = page.locator("div.sticky.top-24").getByRole("button", { name: /Tiến Hành Đặt Hàng/i });
    await payButton.scrollIntoViewIfNeeded();
    await payButton.click();

    await expect(page.getByText(/Vui lòng chọn CPU, RAM và Lưu trữ/)).toBeVisible();
    await expect(page).toHaveURL(/\/configure/);
  });
});

test.describe("E2E - dashboard mock", () => {
  async function waitHydrated(page: Page) {
    await page.waitForFunction(
      () => !document.body.innerText.includes("103.124.92.18"),
      null,
      { timeout: 20_000 }
    );
  }

  test("dashboard renders banner, status, meters and activity", async ({ page }) => {
    await page.goto("/dashboard");

    await expect(page.getByText("Chế độ mô phỏng")).toBeVisible();
    await expect(page.getByText("Đang chạy", { exact: true })).toBeVisible();
    await expect(page.getByText("CPU Load")).toBeVisible();
    await expect(page.getByText("RAM Usage")).toBeVisible();
    await expect(page.getByText("Network Traffic")).toBeVisible();

    const chartCount = await page.locator("[data-chart] svg").count();
    expect(chartCount).toBeGreaterThanOrEqual(2);

    const feed = page.getByTestId("activity-feed");
    await expect(feed).toContainText("Backup tự động hàng đêm");
    await expect(page.getByText(/103\.\d+\.\d+\.\d+/).first()).toBeVisible();
  });

  test("snapshot and restart actions append activity entries", async ({ page }) => {
    await page.goto("/dashboard");
    await waitHydrated(page);
    const feed = page.getByTestId("activity-feed");

    await page.getByRole("button", { name: /Tạo Snapshot/i }).click();
    await expect(feed).toContainText(/Snapshot 'manual-/);

    await page.getByRole("button", { name: /Khởi động lại/i }).click();
    await expect(page.getByText("Đang khởi động lại...")).toBeVisible();
    await expect(page.getByText("Đang chạy", { exact: true })).toBeVisible({ timeout: 6000 });
    await expect(feed).toContainText("đã khởi động thành công");
  });

  test("power off stops the server and zeroes metrics", async ({ page }) => {
    await page.goto("/dashboard");
    await waitHydrated(page);

    await page.getByRole("button", { name: /Tắt nguồn/i }).click();
    await expect(page.getByText("Đã dừng")).toBeVisible();
    await expect(page.getByText("0 MB/s").first()).toBeVisible();

    await page.getByRole("button", { name: /Bật nguồn/i }).click();
    await expect(page.getByText("Đang chạy", { exact: true })).toBeVisible({ timeout: 6000 });
  });

  test("ssh info panel shows command", async ({ page }) => {
    await page.goto("/dashboard");
    await waitHydrated(page);

    await expect(page.getByText(/ssh root@103\.\d+\.\d+\.\d+ -p 22/)).toBeVisible();
  });
});

test.describe("Smoke - apps, about & SEO", () => {
  test("apps catalog renders with search and category filter", async ({ page }) => {
    await page.goto("/apps");

    await expect(page.getByRole("heading", { name: "Kho Ứng Dụng 1-Click" })).toBeVisible();

    const grid = page.locator(".grid.grid-cols-1.md\\:grid-cols-2").first();
    await expect(grid).toBeVisible();

    await page.getByPlaceholder(/Tìm kiếm ứng dụng/).fill("docker");
    await expect(page.getByText("Hiển thị")).toContainText("2");

    await page.getByPlaceholder(/Tìm kiếm ứng dụng/).fill("");
    await page.getByRole("button", { name: /Monitoring/i }).click();
    await expect(page.getByText("Grafana")).toBeVisible();
    await expect(page.getByText("Uptime Kuma")).toBeVisible();

    await page.getByRole("button", { name: "CMS" }).click();
    await page.getByText("WordPress", { exact: true }).first().click();
    await expect(page.getByText("Đã chọn 1 ứng dụng")).toBeVisible();
  });

  test("about page shows company info", async ({ page }) => {
    await page.goto("/about");
    await expect(page.getByText("CÔNG TY TNHH THƯƠNG MẠI VÀ PHÂN PHỐI KIẾN HƯNG").first()).toBeVisible();
    await expect(page.getByText("3703344754").first()).toBeVisible();
    await expect(page.getByText("0976 830 911")).toBeVisible();
  });

  test("404 page renders for unknown routes", async ({ page }) => {
    const res = await page.goto("/khong-ton-tai-123");
    expect(res?.status()).toBe(404);
    await expect(page.getByText("Không tìm thấy trang")).toBeVisible();
    await page.getByRole("link", { name: /Về trang chủ/i }).click();
    await expect(page).toHaveURL("/");
  });

  test("robots.txt and sitemap.xml respond correctly", async ({ request }) => {
    const robots = await request.get("/robots.txt");
    expect(robots.status()).toBe(200);
    expect(await robots.text()).toContain("Sitemap:");

    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.status()).toBe(200);
    expect(await sitemap.text()).toContain("/configure");
  });
});
