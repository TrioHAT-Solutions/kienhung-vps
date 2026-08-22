const BANKS = [
  { code: "VTE", name: "Viettel Money", bin: "970415" },
  { code: "VCB", name: "Vietcombank", bin: "970436" },
  { code: "BIDV", name: "BIDV", bin: "970418" },
  { code: "ICB", name: "VietinBank", bin: "970416" },
  { code: "ACB", name: "ACB", bin: "970422" },
];

const COMPANY = {
  name: "CONG TY TNHH THUONG MAI VA PHAN PHOI KIEN HUNG",
  accountNumber: "1234567890",
};

export interface VietQRData {
  bankCode: string;
  bankName: string;
  accountNumber: string;
  accountName: string;
  amount: number;
  orderId: string;
  description: string;
  qrUrl: string;
}

export function generateVietQR(
  amount: number,
  orderId: string
): VietQRData {
  const bank = BANKS[1]; // Vietcombank default
  const description = `Thanh toan don hang ${orderId}`;

  const qrUrl = `https://img.vietqr.io/image/${bank.code}-${COMPANY.accountNumber}-qr.png?amount=${amount}&addInfo=${encodeURIComponent(description)}&accountName=${encodeURIComponent(COMPANY.name)}`;

  return {
    bankCode: bank.code,
    bankName: bank.name,
    accountNumber: COMPANY.accountNumber,
    accountName: COMPANY.name,
    amount,
    orderId,
    description,
    qrUrl,
  };
}

export function formatVND(amount: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function generateTransferContent(orderId: string): string {
  return `KHVPS ${orderId}`;
}
