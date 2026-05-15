# Manifest with Dr. Manjula Kiran

Professional static website for **Manifest with Dr. Manjula Kiran**, a life coaching and manifestation brand focused on mindset transformation, subconscious reprogramming, abundance alignment, emotional healing, and conscious life design.

The first version of the site is built around the brand direction:

```text
Align. Activate. Attract.
```

## Project Overview

This repository contains the initial public website for Dr. Manjula Kiran's manifestation coaching presence. The website introduces the brand, explains the core coaching methods, highlights free resources, and gives visitors clear ways to connect through social channels or email.

The site is intentionally lightweight: it uses plain HTML, CSS, and JavaScript, with no framework, no package manager, and no build process required.

## Repository Contents

```text
.
|-- README.md
|-- .gitignore
`-- align-activate-attract/
    |-- README.md
    |-- index.html
    |-- styles.css
    |-- script.js
    `-- assets/
        |-- manifestation-studio.jpg
        |-- methods-garden-path.jpg
        `-- resources-lavender-light.jpg
```

This repository is kept clean on purpose. It only tracks the static website files and basic Git configuration. It does not include old template files, app framework code, build output, dependency folders, environment files, or backend secrets.

## Website Sections

The website currently includes:

- Hero section with the main manifestation coaching message
- Brand positioning around "Where mindset meets manifestation"
- Inner Shift chapter with visual rhythm card and transformation outcomes
- About section for Dr. Manjula Kiran
- Signature methods:
  - Mindset Reprogramming System
  - Manifestation Activation Techniques
  - Wealth and Abundance Alignment
  - Emotional Healing and Energy Reset
- Differentiator section explaining the practical and spiritual balance
- Free resources section for guided sessions, affirmations, videos, and mindset content
- Packages and payment section with Basic, Intermediate, and Advanced plans
- Community call-to-action
- Contact section with Instagram, Facebook, YouTube, and email links
- Enquiry form integrated with Web3Forms for email delivery
- Scrollytelling experience with chapter progress, section rail, sticky imagery, and animated headings
- Responsive layout for desktop and mobile screens

## Tech Stack

| Area | Details |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3 |
| Interactions | Vanilla JavaScript, scrollytelling progress, section states |
| Form backend | Web3Forms |
| Payment setup | Razorpay Checkout with optional Payment Links |
| Assets | Local hero image |
| Build step | None |
| Hosting ready | Yes, static hosting compatible |

## Track History

This README keeps a running record of each track so the project history stays clear as new branches and pull requests are created.

| Track | Branch | Focus | Status |
| --- | --- | --- | --- |
| Track 1 | `handling-query` | Implementing W3Forms for the enquiry section | Implemented on branch |
| Track 2 | `track-2-color-text-template` | Softer coaching page aesthetics, improved copy, and blended imagery | Implemented on branch |
| Track 3 | `track-3-payment-gateway` | Package plans and Razorpay payment gateway setup | Implemented on branch |
| Track 4 | `scorlly-telling` | Scrollytelling page experience | Implemented on branch |
| Track 5 | `improvement-and-gaps` | Visual gap fixes and section polish | Current branch |

## Track 1 - Implementing W3Forms

Track 1 wires the enquiry form for Web3Forms so visitor messages can be delivered through a form backend instead of only opening the visitor's email app.

This track lives on the `handling-query` branch. It includes:

- Web3Forms submission endpoint: `https://api.web3forms.com/submit`
## Track 1 - Implementing W3Forms

The enquiry form is wired for Web3Forms and submits to:

```text
https://api.web3forms.com/submit
```

Before publishing the form, create a Web3Forms access key and replace this placeholder in `align-activate-attract/index.html`:

```html
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" data-access-key />
```

Replace `YOUR_WEB3FORMS_ACCESS_KEY` with the real access key. The form includes:

- Required name field
- Required email field
- Optional phone or WhatsApp field
- Required message field
- Hidden subject line for inbox clarity
- Hidden botcheck field for spam protection
- JavaScript success and error messages without redirecting visitors away from the site
- README guidance for replacing the placeholder Web3Forms access key before publishing

Before publishing Track 1, create a Web3Forms access key and replace this placeholder in `align-activate-attract/index.html` on the `handling-query` branch:

```html
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" data-access-key />
```

## Track 2 - Color and Text Template

Track 2 refreshes the website with the **Soft Sage Sanctuary** direction.

The goal of this track is to make the page feel calmer, more pleasant, and more appropriate for a coaching and manifestation brand. It softens the previous bold visual style with:

- Warm ivory and soft sage color palette
- Gentle rose calls-to-action
- Split hero layout with a softer image treatment
- More spacious cards and section rhythm
- Warmer, coaching-oriented website copy
- Calmer language around mindset, emotional reset, abundance, and conscious creation
- Consistent image-card treatment for the hero, signature methods, and free resources sections
- Polished social contact cards with platform-specific icons
- Minimal footer social icons and 2026 rights notice
- Local image assets with source credits documented below

## Track 3 - Payment Gateway

Track 3 introduces a paid package section between Free Resources and Join the Community. This placement lets visitors first understand the coaching method, explore free content, and then choose a paid path before reaching the final community and contact sections.

The current implementation opens **Razorpay Checkout** from the plan buttons. Add the real Razorpay Key ID in `align-activate-attract/script.js`:

```js
const razorpayKeyId = "YOUR_RAZORPAY_KEY_ID";
```

Replace `YOUR_RAZORPAY_KEY_ID` with the live or test key from the Razorpay dashboard.

The implementation also supports **Razorpay Payment Links** as an optional static-site fallback. Each package card has duration-aware payment link placeholders in `align-activate-attract/index.html`:

```html
data-link-monthly=""
data-link-six=""
data-link-year=""
```

If those values contain real Razorpay URLs, the buttons open the hosted payment links instead of Checkout. Until the key or links are configured, the section shows a setup message.

For production-grade payment verification, add a backend later to create Razorpay Orders and verify payment signatures after checkout.

Package pricing:

| Plan | Monthly | 6 Months | 1 Year |
| --- | ---: | ---: | ---: |
| Basic | Rs. 1,000 | Rs. 5,000 | Rs. 8,000 |
| Intermediate | Rs. 2,000 | Rs. 7,000 | Rs. 10,000 |
| Advanced | Rs. 2,500 | Rs. 8,000 | Rs. 12,000 |

Implementation details:

- New `Plans` navigation link
- New `#plans` website section
- Three plan cards: Basic, Intermediate, Advanced
- Billing duration selector for Monthly, 6 Months, and 1 Year
- Dynamic price, billing label, savings note, and payment button behavior
- Hover and focus highlight animation for package cards
- Razorpay Checkout script integration
- Razorpay Key ID placeholder in JavaScript
- Optional Razorpay Payment Link placeholder data attributes
- README guidance for replacing placeholders with real Razorpay details

## Track 4 - Scrollytelling

Track 4 keeps all existing website features and turns the one-page site into a scrollytelling experience inspired by the referenced UCL Portico magazine article structure.

This track adds:

- Scroll progress bar below the sticky header
- Desktop chapter rail generated from website sections
- Section active states for chapter-style reading
- Word-by-word heading reveal animation
- Sticky image treatment for the hero, methods, and resources visuals
- Full-screen section rhythm where appropriate
- Mobile-safe layout that keeps the story readable without crowding the screen

The scrollytelling layer is visual and navigational only. It does not remove or replace the Web3Forms enquiry flow, Razorpay plan buttons, billing selector, social links, footer, or existing local image assets.

## Track 5 - Improvements and Gaps

Track 5 starts with the blank-space issue in chapter 02, the Inner Shift section.

This track updates that section with:

- Stronger chapter heading and supporting copy
- Soft looping video panel using a local MP4 asset
- Three existing transformation outcome cards preserved below the visual story layer
- Responsive layout refinements for tablet and mobile screens

## Image Credits

- Hero studio image: local generated/working project asset
- Methods background image: [Kaylee Stoll on Unsplash](https://unsplash.com/photos/circular-wooden-gate-in-lush-garden-with-stone-path-aCXB0bajWEE)
- Resources background image: [Sixteen Miles Out on Unsplash](https://unsplash.com/photos/sunlight-streams-through-a-lavender-bush-vZajO08oTiM)

## Local Preview

You can open the website directly in a browser:

```text
index.html
```

For a local server preview, run this from the repository root:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080/
```

## Deployment Notes

This is a static website and can be deployed on:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Any standard static hosting provider

If deploying with GitHub Pages from this repository structure, the page will be available under the `align-activate-attract/` folder path unless the site files are moved to the repository root.

Example GitHub Pages path:

```text
https://<username>.github.io/<repository-name>/align-activate-attract/
```

## Contact Links Used in the Site

- Instagram: <https://www.instagram.com/drmanjulakiran>
- Facebook: <https://www.facebook.com/drmanjulakirankumar>
- YouTube: <https://www.youtube.com/channel/UC81FrGiepPYoNcmdYstMb5A/join>
- Email: <drmanjulakiran1@gmail.com>

## Current Version

This is the initial website release. It is ready for review, sharing, and deployment as a first public version.

## Recommended Next Updates

Future improvements can include:

- Custom professional photos of Dr. Manjula Kiran
- Testimonials and client transformation stories
- Detailed program or workshop pages
- Booking or consultation form integration
- Payment links for courses or sessions
- Blog or free resource library
- Search engine metadata and social sharing images
- Custom domain setup

## Maintenance Notes

- Keep all public website files inside `align-activate-attract/`.
- Do not commit `.env`, secret keys, backend credentials, or private configuration files.
- Keep images optimized before adding them to the repository.
- Test the site on both desktop and mobile before publishing changes.
