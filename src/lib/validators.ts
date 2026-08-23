import { z } from "zod";

export const customerSchema = z.object({
  name: z
    .string()
    .min(2, "Họ tên phải có ít nhất 2 ký tự")
    .max(100, "Họ tên quá dài"),
  email: z.string().email("Email không hợp lệ"),
  phone: z
    .string()
    .regex(/^(0|\+84)[0-9]{9,10}$/, "Số điện thoại không hợp lệ (VD: 0357554576)"),
  company: z.string().optional(),
});

export type CustomerFormData = z.infer<typeof customerSchema>;
