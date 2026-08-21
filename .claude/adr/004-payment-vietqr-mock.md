# ADR 004: VietQR Payment Integration (Mock for MVP)

**Status**: Accepted
**Date**: 2026-08-21
**Deciders**: Do Kien Hung (Owner), AI Assistant

---

## Context

TrioHAT-VPS targets Vietnamese market where VietQR (NAPAS 247) is the dominant instant payment method. For MVP Frontend, we need a realistic checkout flow without actual payment processing.

Requirements:
- Generate VietQR codes dynamically (standard format)
- Display bank info, account number, amount, order code
- Simulate payment confirmation flow
- Prepare architecture for real webhook integration (Phase 2)

## Decision

**Mock VietQR integration for MVP** using:
- VietQR QuickLink image format: `img.vietqr.io/image/<BANK_ID>-<ACCOUNT_NO>-compact2.png?amount=<AMOUNT>&addInfo=<ORDER_CODE>&accountName=<NAME>`
- Static bank info from `src/config/site.ts`
- Simulated 3-second provisioning animation after "payment"
- Architecture ready for SePay/Casso/PayOS webhook integration (Phase 2)

## Consequences

### Positive
- Realistic checkout experience for demo/investor presentations
- Zero cost for MVP (no payment gateway fees)
- Architecture prepared for real integration (just swap mock service)
- VietQR is Vietnam's standard (NAPAS 247 network)

### Negative
- No actual payment processing (MVP only)
- Need to document mock flow clearly for team
- Bank info is static (not dynamic per order)

## What Claude Should Do

- Use `img.vietqr.io` URL format for QR code generation
- Keep bank info in `src/config/site.ts` (single source of truth)
- Create `src/lib/vietqr.ts` for QR URL generation utility
- Design checkout flow to be swappable with real payment service
- Never hardcode bank details in components (always use config)
