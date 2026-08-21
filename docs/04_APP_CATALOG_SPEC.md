# 04. DANH MỤC PHẦN MỀM & ỨNG DỤNG ĐI KÈM (APP CATALOG SPEC)

> **Dự án**: Kien Hung VPS  
> **Tài liệu**: Đặc tả chi tiết danh mục ứng dụng 1-Click & Gói triển khai phần mềm đóng gói sẵn trên hạ tầng Kien Hung VPS.

---

## 1. Phân Loại Ứng Dụng (Application Categories)

Danh mục ứng dụng được chia thành 5 nhóm chiến lược, phục vụ chính xác từng nhóm khách hàng mục tiêu:

```
App Catalog Categories:
├── 1. Automation & AI Workflows (Tự động hóa quy trình & Bot)
├── 2. Modern Web & Developer Stacks (Môi trường phát triển ứng dụng)
├── 3. CMS & E-Commerce (Website bán hàng & Nội dung)
├── 4. Cloud Infrastructure & Databases (Cơ sở dữ liệu & DevOps)
└── 5. Business Tools & Communication (Giải pháp doanh nghiệp & Tiện ích)
```

---

## 2. Bảng Danh Mục Ứng Dụng Chi Tiết (Application Specifications)

### 2.1. Nhóm 1: Automation & AI Workflows

| Tên Ứng Dụng | Phiên bản | Mô tả & Lợi ích | Thành phần cài sẵn (Stack) | Cấu hình tối thiểu đề xuất | Loại triển khai |
|:---|:---|:---|:---|:---|:---|
| **n8n Workflow Automation** | v1.74+ | Tự động hóa kết nối hơn 400+ ứng dụng, webhook, AI agents không giới hạn workflow | Docker Compose, Caddy Reverse Proxy, PostgreSQL, Auto SSL Let's Encrypt | 2 vCPU / 4 GB RAM / 40 GB NVMe | 1-Click Tự Động |
| **Telegram / Zalo Marketing Bot** | v2.0 | Nền tảng hosting và chạy bot gửi tin nhắn, chăm sóc khách hàng tự động 24/7 | Python 3.12, Node.js 22, PM2 Process Manager, Redis Cache | 1 vCPU / 2 GB RAM / 25 GB NVMe | 1-Click / Managed |
| **Ollama & Open-WebUI (AI Local)** | v0.5+ | Chạy các mô hình ngôn ngữ lớn (Llama 3, DeepSeek, Qwen) nội bộ bảo mật | Ollama Engine, Open-WebUI, Docker, Cuda/CPU Optimization | 4 vCPU / 16 GB RAM / 100 GB NVMe | Managed Pro |

---

### 2.2. Nhóm 2: Modern Web & Developer Stacks

| Tên Ứng Dụng | Phiên bản | Mô tả & Lợi ích | Thành phần cài sẵn (Stack) | Cấu hình tối thiểu đề xuất | Loại triển khai |
|:---|:---|:---|:---|:---|:---|
| **Next.js & Node.js Fullstack** | Node 22 LTS | Môi trường triển khai ứng dụng Next.js / NestJS / Express tốc độ cao | Node.js 22, PNPM, PM2, Nginx Reverse Proxy, Auto SSL, Git Deploy | 2 vCPU / 4 GB RAM / 40 GB NVMe | 1-Click Tự Động |
| **Python FastAPI / Django** | Python 3.12 | Môi trường chạy Backend Python, API microservices và Machine Learning pipelines | Python 3.12, Uvicorn, Gunicorn, Nginx, PostgreSQL, Redis | 2 vCPU / 4 GB RAM / 40 GB NVMe | 1-Click Tự Động |
| **Coolify PaaS (Self-hosted)** | v4.0+ | Biến VPS thành nền tảng PaaS tương tự Heroku/Vercel, hỗ trợ push-to-deploy từ GitHub | Docker Engine, Traefik Proxy, Postgres, Coolify Core Dashboard | 2 vCPU / 4 GB RAM / 50 GB NVMe | 1-Click Tự Động |
| **Docker & Docker Compose Clean** | Engine 27+ | Môi trường container hóa nguyên bản cho DevOps và kỹ sư hệ thống | Docker CE, Docker Compose v2, Portainer CE Web Management | 1 vCPU / 2 GB RAM / 30 GB NVMe | 1-Click Tự Động |

---

### 2.3. Nhóm 3: CMS, Blog & E-Commerce

| Tên Ứng Dụng | Phiên bản | Mô tả & Lợi ích | Thành phần cài sẵn (Stack) | Cấu hình tối thiểu đề xuất | Loại triển khai |
|:---|:---|:---|:---|:---|:---|
| **WordPress High-Performance** | 6.7+ | Website WordPress siêu tốc được tối ưu bộ nhớ đệm Redis & Opcache | Nginx/LiteSpeed, MariaDB 11, PHP 8.3, Redis Object Cache, WP-CLI | 2 vCPU / 4 GB RAM / 50 GB NVMe | 1-Click Tự Động |
| **Ghost Publishing Platform** | v5.9+ | Nền tảng viết blog và bản tin tin tức (Newsletter) chuyên nghiệp, chuẩn SEO | Ghost Core, MySQL 8, Nginx, Node.js, Auto SSL | 1 vCPU / 2 GB RAM / 30 GB NVMe | 1-Click Tự Động |
| **WooCommerce E-Commerce Pro** | 9.0+ | Gian hàng trực tuyến tối ưu hóa cho doanh nghiệp Việt Nam, tích hợp sẵn VNPay/VietQR | Nginx, MariaDB, PHP 8.3, Redis, Memcached, Tối ưu DB indexing | 4 vCPU / 8 GB RAM / 80 GB NVMe | Managed Pro |

---

### 2.4. Nhóm 4: Cloud Infrastructure, Panels & Databases

| Tên Ứng Dụng | Phiên bản | Mô tả & Lợi ích | Thành phần cài sẵn (Stack) | Cấu hình tối thiểu đề xuất | Loại triển khai |
|:---|:---|:---|:---|:---|:---|
| **CyberPanel OpenLiteSpeed** | v2.3+ | Bảng điều khiển quản trị web hosting miễn phí với công nghệ máy chủ OpenLiteSpeed | OpenLiteSpeed, MariaDB, Multi-PHP, FTP, Mail Server, DNS | 2 vCPU / 4 GB RAM / 40 GB NVMe | 1-Click Tự Động |
| **PostgreSQL & pgAdmin Stack** | PG 16+ | Cụm cơ sở dữ liệu quan hệ mạnh mẽ, bảo mật cao kèm giao diện quản trị Web UI | PostgreSQL 16, pgAdmin 4, Docker, Automated Daily Backup Cron | 2 vCPU / 4 GB RAM / 40 GB NVMe | 1-Click Tự Động |
| **Redis In-Memory Database** | v7.4+ | Máy chủ lưu trữ cache và message broker tốc độ cao, hỗ trợ xác thực TLS | Redis 7, Redis Commander UI, Systemd Auto-restart | 1 vCPU / 2 GB RAM / 20 GB NVMe | 1-Click Tự Động |

---

### 2.5. Nhóm 5: Security, VPN & Enterprise Tools

| Tên Ứng Dụng | Phiên bản | Mô tả & Lợi ích | Thành phần cài sẵn (Stack) | Cấu hình tối thiểu đề xuất | Loại triển khai |
|:---|:---|:---|:---|:---|:---|
| **WireGuard Private VPN** | Latest | Thiết lập đường truyền mạng riêng tư, bảo mật đường truyền internet cá nhân/doanh nghiệp | WireGuard Kernel Module, WG-Easy Web Dashboard, QR Code Config | 1 vCPU / 1 GB RAM / 20 GB NVMe | 1-Click Tự Động |
| **Uptime Kuma Monitoring** | v1.23+ | Hệ thống theo dõi trạng thái uptime của các website, API và máy chủ kèm thông báo Zalo/Telegram | Node.js, SQLite, Uptime Kuma Core, Web UI | 1 vCPU / 2 GB RAM / 20 GB NVMe | 1-Click Tự Động |

---

## 3. Quy Trình Tự Động Hóa Triển Khai (Deployment Script Blueprint)

Mỗi ứng dụng 1-Click sẽ được liên kết với một file cấu hình hạ tầng dạng `cloud-init` hoặc Docker Compose Script chuẩn hóa:

```yaml
# Ví dụ cấu trúc đóng gói tự động cho n8n Stack
version: '3.8'

services:
  caddy:
    image: caddy:2-alpine
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
      - caddy_data:/data
      - caddy_config:/config

  postgres:
    image: postgres:16-alpine
    restart: always
    environment:
      POSTGRES_USER: ${DB_USER:-n8n}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_DB: ${DB_NAME:-n8n}
    volumes:
      - postgres_data:/var/lib/postgresql/data

  n8n:
    image: docker.n8n.io/n8nio/n8n:latest
    restart: always
    environment:
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=postgres
      - DB_POSTGRESDB_USER=${DB_USER:-n8n}
      - DB_POSTGRESDB_PASSWORD=${DB_PASSWORD}
      - DB_POSTGRESDB_DATABASE=${DB_NAME:-n8n}
      - N8N_HOST=${SUBDOMAIN}.${MAIN_DOMAIN}
      - WEBHOOK_URL=https://${SUBDOMAIN}.${MAIN_DOMAIN}/
    volumes:
      - n8n_data:/home/node/.n8n
    depends_on:
      - postgres

volumes:
  caddy_data:
  caddy_config:
  postgres_data:
  n8n_data:
```

Mô hình đóng gói này đảm bảo máy chủ sau khi thanh toán được dựng tự động trong vòng 60 giây mà không có bất kỳ lỗi xung đột môi trường nào.
