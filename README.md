# The Blue Door — frontend restructure

Updated 27 September 2026. Static HTML/CSS/JavaScript; no build step, runtime framework, secrets or server dependency.

## Preview

From this directory, run `python3 -m http.server 8000` and visit `http://localhost:8000`. Opening `index.html` directly also works for browsing; clipboard availability varies outside HTTPS/localhost.

## What changed

- New homepage prioritising residential management and second-home care, with substantial relocation and concierge services.
- Dedicated property management, long-term management, home-care, short-stay enquiry, cleaning/maintenance, relocation, concierge and contact pages.
- Relocation package names retained; public fees and opening-price promotions removed in favour of a written proposal.
- Shared navigation, footer, CSS and JavaScript. Existing logo extracted into one reusable asset. Original guide URLs and article content retained; malformed original header markup repaired.
- No exact visit cadence, response deadline, cancellation period, spending limit, margin target or provisional management fee is published.
- Nationwide enquiries, with delivery arrangements confirmed for each property. No claim of an established nationwide team or 24/7 attendance.
- Fictional owner-update illustration explicitly labelled; no fake client testimonials, portfolio statistics or live portal.
- About page uses William Ayers's business and asset-management background without claiming a mature Portuguese portfolio.

## Contact flow

The consultation URL and WhatsApp number are preserved from the supplied site:
- https://cal.com/thebluedoor/consultation
- https://wa.me/351910174828

`contact.html` prepares an enquiry entirely in the browser. Native validation precedes a review panel; the user chooses to open WhatsApp and send the message there. No message is sent to a backend, no form entry is stored and no successful submission is falsely reported. A direct WhatsApp link and consultation link remain available without JavaScript.

The service query parameter prefills the selector. Text is assigned through `.value` and URL-encoded, not injected as HTML. Editing the form hides the previous message so it cannot be sent accidentally with stale details.

## Future backend connection

Form ID: `enquiry-form`. Field names: `service`, `name`, `email`, `location`, `situation`, `timing`, `contact`, `message`.

The `assets/site.js` submit handler currently prepares the WhatsApp draft. Replace that handler when connecting your endpoint. Add server-side validation, rate limiting/spam protection and accessible pending/error/success states. Only report success after the endpoint confirms receipt. Update `legal.html` to describe the actual processing, controller identity, lawful basis, recipients, retention and rights; the current wording describes only the frontend contact process. No database or client portal has been added.

## Before live release

Review the rendered site on desktop and mobile. Confirm the existing WhatsApp and consultation destinations remain correct. Complete company identification and the privacy information for the actual business and chosen backend with your adviser. Confirm offered services against delivery capability and contracts. The preserved guide articles have not received a new legal/factual audit; verify current requirements before relying on them. Google Fonts is an external dependency; system font fallbacks are present.

This is an unpublished source revision. No GitHub push, production deployment or live-site change was made.

## Existing hosting

The supplied README identifies Cloudflare Pages connected to GitHub. Use the existing repository/hosting workflow. Framework: none; build command: blank; publish directory: the directory containing `index.html`. Keep `assets/` and `guides/` beside it. A push to the connected production branch may trigger automatic deployment, so review changes on a branch or preview first.

## Verification completed

- Parsed 23 HTML pages: all local links, anchors and referenced assets resolve; each page has one main heading and no duplicate IDs.
- Headless Chromium checked all 23 pages at 1440px desktop and 390px mobile widths: no horizontal overflow or uncaught page errors.
- Checked mobile menu opening and Escape closing, service selection from the URL, enquiry review, message encoding and invalidation of an old draft after edits.
- Visually reviewed homepage, management, guides and contact screenshots. Tested the main page, contact page and guides index again at 320px.
- JavaScript syntax check passes. External booking/WhatsApp destinations were retained, but no test message or booking was sent. Legacy guide facts were not independently reverified.

## Founder profile and standalone-service clarification

Founder profile updated against the Ayers Hospitality About page and the supplied background: Baruch College, New York residential real estate, Canadian commercial/industrial asset management, and a multi-location Canadian retail/service business. Blue Door is described as founder-led with independent professionals, without asserting unverified employee numbers or a nationwide staffed team. Standalone property management is explicit on the homepage and property-service pages.
