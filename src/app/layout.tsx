import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Be_Vietnam_Pro, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-space-grotesk",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-dm-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-fira-code",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080c14",
  width: "device-width",
  initialScale: 1,
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://triohat.vn";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TrioHAT-VPS — VPS NVMe & Kho Ứng Dụng 1-Click",
    template: "%s | TrioHAT-VPS",
  },
  description:
    "VPS SSD NVMe thế hệ mới, kích hoạt trong 60 giây, kèm kho ứng dụng 1-Click (WordPress, Docker, n8n...) và thanh toán VietQR tức thì. Uptime SLA 99.9%, hỗ trợ 24/7.",
  keywords: [
    "vps",
    "vps giá rẻ",
    "hosting việt nam",
    "cloud server",
    "nvme ssd",
    "wordpress hosting",
    "docker vps",
    "vps 1-click",
  ],
  authors: [{ name: "Kiến Hưng" }],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: SITE_URL,
    siteName: "TrioHAT-VPS",
    title: "TrioHAT-VPS — Hạ Tầng Sẵn Sàng, Ứng Dụng Trong Tích Tắc",
    description:
      "Triển khai VPS trong 60 giây với kho ứng dụng 1-Click và thanh toán VietQR tức thì.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrioHAT-VPS",
    description:
      "VPS NVMe + Kho ứng dụng 1-Click + Thanh toán VietQR tức thì.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CÔNG TY TNHH THƯƠNG MẠI VÀ PHÂN PHỐI KIẾN HƯNG",
  alternateName: "TrioHAT-VPS",
  taxID: "3703344754",
  telephone: "+84357554576",
  email: "kienhung.do1105@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "168 Hoàng Cầm (Quốc lộ 1K cũ), Linh Xuân",
    addressLocality: "TP. Hồ Chí Minh",
    addressCountry: "VN",
  },
  url: SITE_URL,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${plusJakartaSans.variable} ${beVietnamPro.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#080c14] text-[#f8fafc]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
