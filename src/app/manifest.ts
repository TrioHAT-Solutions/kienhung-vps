import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TrioHAT-VPS — VPS NVMe & Ứng dụng 1-Click",
    short_name: "TrioHAT-VPS",
    description:
      "Triển khai VPS trong 60 giây với kho ứng dụng 1-Click và thanh toán VietQR tức thì.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#06b6d4",
    lang: "vi",
  };
}
