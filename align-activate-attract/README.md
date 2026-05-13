# Align Activate Attract

A standalone one-page website for **Manifest with Dr. Manjula Kiran**.

## Open locally

Open `index.html` in a browser, or serve the folder with any static file server.

## Sections

- Manifestation coaching hero with a clean image card
- About Dr. Manjula Kiran
- Signature manifestation methods
- Differentiators and free resources
- Package plans with Razorpay Checkout integration
- Community call to action
- Contact form that opens a prefilled email to `drmanjulakiran1@gmail.com`

## Track history

| Track | Branch | Focus | Status |
| --- | --- | --- | --- |
| Track 1 | `handling-query` | Implementing W3Forms for the enquiry section | Implemented on branch |
| Track 2 | `track-2-color-text-template` | Softer coaching page aesthetics, improved copy, and blended imagery | Implemented on branch |
| Track 3 | `track-3-payment-gateway` | Package plans and Razorpay payment gateway setup | Current branch |

## Track 1 - Implementing W3Forms

Track 1 lives on the `handling-query` branch. It changes the enquiry section from a mail app flow to a Web3Forms-backed form submission flow with required name, email, and message fields, an optional phone or WhatsApp field, spam protection, and inline success/error messages.

Before publishing Track 1, replace the placeholder Web3Forms access key in `index.html` on the `handling-query` branch.

## Track 2 design direction

This version uses the Soft Sage Sanctuary direction: warm ivory, soft sage,
gentle rose accents, a calmer split hero, and warmer coaching-focused copy.
It also uses consistent local image cards across the hero, signature methods,
free resources sections, plus polished social contact cards and minimal footer
icons with a 2026 rights notice.

## Track 3 - Payment Gateway

Track 3 adds a `#plans` section after Free Resources and before Join the Community.
The section includes Basic, Intermediate, and Advanced package cards with Monthly,
6 Months, and 1 Year pricing.

The payment buttons open Razorpay Checkout after a real Razorpay Key ID is added
to `script.js`.

```js
const razorpayKeyId = "YOUR_RAZORPAY_KEY_ID";
```

The plan cards also support hosted Razorpay Payment Links through the empty
`data-link-monthly`, `data-link-six`, and `data-link-year` values in `index.html`.
If those values are filled with Razorpay URLs, the buttons open the hosted links.

## Image credits

- Methods background: [Kaylee Stoll on Unsplash](https://unsplash.com/photos/circular-wooden-gate-in-lush-garden-with-stone-path-aCXB0bajWEE)
- Resources background: [Sixteen Miles Out on Unsplash](https://unsplash.com/photos/sunlight-streams-through-a-lavender-bush-vZajO08oTiM)
- Enquiry form integrated with Web3Forms

## Web3Forms setup

The enquiry form posts to `https://api.web3forms.com/submit`.

Before going live, replace `YOUR_WEB3FORMS_ACCESS_KEY` in `index.html` with the real Web3Forms access key.
