# 🚨 Insecure Payment Form Example

This repository shows an example of how **NOT** to implement credit card payments.

## Why this is dangerous
- Captures card data in frontend
- JavaScript can read sensitive fields
- Backend receives raw card numbers
- Fully non-compliant with PCI DSS

## Real-world risk
This architecture enables:
- Payment form skimming
- Magecart-style attacks
- Card data theft

## Correct approach
Always use hosted checkout solutions such as:
- MercadoPago Checkout
- Stripe Checkout
- Tokenized payment fields

⚠️ Do NOT use this code in production.
