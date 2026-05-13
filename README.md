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
        `-- manifestation-studio.jpg
```

This repository is kept clean on purpose. It only tracks the static website files and basic Git configuration. It does not include old template files, app framework code, build output, dependency folders, environment files, or backend secrets.

## Website Sections

The website currently includes:

- Hero section with the main manifestation coaching message
- Brand positioning around "Where mindset meets manifestation"
- Transformation outcomes: mind, abundance, and life design
- About section for Dr. Manjula Kiran
- Signature methods:
  - Mindset Reprogramming System
  - Manifestation Activation Techniques
  - Wealth and Abundance Alignment
  - Emotional Healing and Energy Reset
- Differentiator section explaining the practical and spiritual balance
- Free resources section for guided sessions, affirmations, videos, and mindset content
- Community call-to-action
- Contact section with Instagram, Facebook, YouTube, and email links
- Contact form that opens a prefilled email inquiry
- Responsive layout for desktop and mobile screens

## Tech Stack

| Area | Details |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3 |
| Interactions | Vanilla JavaScript |
| Assets | Local hero image |
| Build step | None |
| Hosting ready | Yes, static hosting compatible |

## Track 2 - Color and Text Template

Track 2 refreshes the website with the **Soft Sage Sanctuary** direction.

The goal of this track is to make the page feel calmer, more pleasant, and more appropriate for a coaching and manifestation brand. It softens the previous bold visual style with:

- Warm ivory and soft sage color palette
- Gentle rose calls-to-action
- Split hero layout with a softer image treatment
- More spacious cards and section rhythm
- Warmer, coaching-oriented website copy
- Calmer language around mindset, emotional reset, abundance, and conscious creation

## Local Preview

You can open the website directly in a browser:

```text
align-activate-attract/index.html
```

For a local server preview, run this from the repository root:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080/align-activate-attract/
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
