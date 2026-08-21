# Task 08: Checkout Flow

## Status: NOT STARTED
## Priority: P1
## Estimated: 90 min

## Objective
Build the checkout flow with order summary and VietQR mock payment integration.

## progresss
1. Create checkout page layout
2. Build order summary sidebar
3. Create customer info form (React Hook Form)
4. Implement form validation (Zod schema)
5. Add VietQR QuickLink mock payment
6. Create payment confirmation display
7. Build order ID generator
8. Add progress indicator (Config → Payment → Confirmation)
9. Implement form persistence in Zustand
10. Add loading states

## Customer Info Fields
- Full name (required)
- Email (required, email format)
- Phone (required, Vietnamese phone format)
- Company name (optional)

## Payment Flow
1. User fills customer info
2. Click "Proceed to Payment"
3. Show VietQR QR code (img.vietqr.io)
4. Display bank info: Techcombank 9999
5. Order ID as transfer content
6. "I've Paid" button (mock confirmation)
7. Show success message

## Design Integration
- Multi-progress form: Progress bar
- Order summary: Sticky sidebar
- QR Code: Centered, large, clear
- Success: Green checkmark animation
- Form inputs: Glassmorphism style

## Dependencies
- Task 05 (Configurator state)
- Task 07 (Pricing data)

## Output
- Checkout page
- Order summary component
- Customer form
- VietQR payment display
- Success confirmation

## Verification
- [ ] Form validates correctly
- [ ] QR code displays
- [ ] Order ID generated
- [ ] State persists in Zustand
- [ ] progress indicator updates
- [ ] Responsive layout

## Files to Create
- `app/checkout/page.tsx`
- `components/checkout/CheckoutForm.tsx`
- `components/checkout/OrderSummary.tsx`
- `components/checkout/PaymentQR.tsx`
- `components/checkout/SuccessConfirmation.tsx`
- `components/checkout/progressIndicator.tsx`
- `lib/validators.ts` (Zod schemas)
- `lib/vietqr.ts` (QR generation)

## Notes
- VietQR URL: `https://img.vietqr.io/image/vietqr-9999 TEMPLATEONLY?amount={price}&addInfo={orderId}`
- No real payment processing
- Store order in Zustand + localStorage
