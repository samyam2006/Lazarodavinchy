# Lazaro Davinchy Jewelry — Website

A luxury jewelry website for [@lazarodavinchy_jewelry](https://www.instagram.com/lazarodavinchy_jewelry/), inspired by the look and structure of high-end jeweler sites (announcement bar, hero, collections, featured pieces, custom-design process, testimonials, Instagram feed, contact).

Pure static HTML/CSS/JS — no build step, no dependencies. Works on GitHub Pages or any static host.

## Pages

```
index.html             # home: hero, categories, featured pieces, testimonials, Instagram
collections.html       # collections index (all four categories)
engagement-rings.html  # collection page
timepieces.html        # collection page
bracelets.html         # collection page
chains.html            # collection page
custom.html            # custom design process & services
about.html             # story + testimonials
contact.html           # consultation booking / inquiry form
css/style.css          # dark charcoal + champagne-gold theme
js/main.js             # mobile nav, dropdown, sticky header, reveal animations, form
images/                # product photos
```

## Photos

| File | Used for |
|---|---|
| `images/logo.png` | Brand logo (header badge + footer) |
| `images/lazarostore.png` | Storefront photo in the split hero |
| `images/ring.png` | Engagement rings / bridal set / about section |
| `images/bracelet.png` | Tennis bracelets |
| `images/rolex.png` | Luxury timepieces |
| `images/necklace.png` | Chains & pendants |

To swap a photo, upload a new image over the same filename. Portrait (4:5) photos look best — the layout crops with `object-fit: cover`, so any size works.

## Customize

- **Contact info** — the contact section currently points to Instagram DMs only. Add phone, email, or address in the `#contact` section of `index.html`.
- **Contact form** — currently copies the inquiry and opens Instagram. Point it at a real endpoint (Formspree, Netlify Forms, etc.) in `js/main.js`.
- **Prices** — product cards show "Price on request"; edit them in the `#featured` section.

## Run locally

Open `index.html` in a browser, or:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```
