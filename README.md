<div align="center">

# Riad Dar Ten – Boutique Riad Website

An intimate, high-converting web experience for a boutique riad in Marrakech.

Built to showcase the atmosphere, rooms, and services of **Riad Dar Ten**, and to turn inspiration into bookings.

</div>

---

## ✨ Overview

Riad Dar Ten is a boutique guesthouse in the heart of Marrakech.  
This website is crafted to:

- Tell the **story and architecture** of the riad in a cinematic way
- Present **rooms & suites** with a focus on mood and comfort
- Highlight the **courtyard, rooftop, and dining** experiences
- Make it easy for visitors to **contact and book directly**

The project combines strong visual storytelling, subtle motion, and a clear booking funnel to support both **brand perception** and **real-world conversions**.

---

## 🎥 Demo Video

Watch a short walkthrough of the website experience:

[▶ Watch the demo video on Cloudinary](https://player.cloudinary.com/embed/?cloud_name=dpmtluao5&public_id=Riad-Dar-Dounia-Website_xveuth)

---

## 🎯 Key Value & Potential

- **Brand Storytelling**

  - Dedicated _Riad_ page with sections for history, architecture, courtyard, rooftop, and amenities.
  - Carefully curated copy that matches the atmosphere of a high-end yet intimate riad.

- **Booking-Oriented UX**

  - Clear **Book** page with a focused booking form and FAQ.
  - Multiple CTAs across home, rooms, gallery, and footer guiding users towards contact or booking.

- **Rich Visual Experience**

  - Hero sections and image grids for rooms, courtyard, rooftop, and gallery.
  - Motion-on-scroll animations for a refined, modern feel without overwhelming the user.

- **SEO-Ready Foundation**

  - Per-page metadata and clean URL structure (`/riad`, `/rooms`, `/gallery`, `/contact`, `/book`).
  - `robots.txt` and a dynamic `sitemap.xml` implemented for crawlability.
  - Content structure suitable for organic search around _riad in Marrakech_, _romantic stays_, etc.

- **Scalable Brand System**
  - Documented **brand identity** under `/brand-identity`:
    - Color system (Terracotta Warmth, Tadelakt Green, Saffron Gold, etc.)
    - Typography system (Cormorant Garamond, Montserrat, Playfair Display)
  - This makes the project a solid base for **future expansions** (blog, offers, experiences).

---

## 🗺️ Site Map

Main routes:

- `/` – Home (hero, highlights, rooms carousel, guest experience, location, final CTA)
- `/riad` – The Riad (story, architecture, courtyard pool, rooftop, dining, amenities, neighborhood)
- `/rooms` – Rooms & Suites (overview, detailed listings, what’s included, ideal guests, CTA)
- `/gallery` – Visual gallery with lightbox, categories, and booking CTA
- `/book` – Booking page with request form and FAQ
- `/contact` – Contact hero, contact details, and contact form
- `/privacy` – Privacy policy
- `/terms` – Terms of service
- `/brand-identity` – Brand identity guide (colors, typography, tagline)

---

## 🧱 Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org)
- **Language:** TypeScript + React
- **Styling:** Tailwind CSS (with custom, riad-specific design tokens)
- **Icons & UI:**
  - [lucide-react](https://lucide.dev/) for icons
  - Custom UI components (buttons, cards, carousel) inspired by shadcn/ui
- **Animations:** [motion](https://motion.dev/) (successor to Framer Motion) for scroll-based animations

---

## 🧭 UX & Design Highlights

- **Motion-on-scroll**  
  Key sections (heroes, content blocks, CTAs) animate gently into view to create a premium feel.

- **Story-first layout**  
  Pages are structured to read like a narrative:

  - From arrival (home hero) → discovering the riad → exploring rooms → viewing the gallery → booking/contact.

- **Mobile-first design**  
  Layouts, text sizes, and images are designed to feel natural on mobile, where a large share of travel research happens.

---

## ⚙️ Getting Started (Local Development)

Clone the repository:

```bash
git clone https://github.com/yassinejoundi/riad-dar-ten.git
cd riad-dar-ten
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Scripts

Useful npm scripts:

- `npm run dev` – Start the development server
- `npm run build` – Build the production bundle
- `npm run start` – Run the production build
- `npm run lint` – Run ESLint on the project

---

## 🚀 Deployment

This project is optimized for platforms that support Next.js (such as [Vercel](https://vercel.com)):

1. Build the project locally or via CI (`npm run build`).
2. Deploy the `.next` build output to your hosting provider.
3. Configure the domain (for example `riaddarten.com`) and ensure static assets and metadata routes (`/sitemap.xml`, `robots.txt`) are accessible.

---

## 💡 Future Enhancements

Some natural next steps that this codebase is ready for:

- Dynamic booking integration (channel manager / booking engine)
- Multi-language support (EN / FR / ES, etc.)
- Blog or journal for city guides and experiences
- Special offers and seasonal packages

---

## 📬 Contact & Author

This project is designed and built by **Yassine Joundi**.

If you’re interested in using or extending this project for another boutique stay, hotel, or property:

- Adapt the brand identity page and theme tokens
- Update content, images, and routes to match your property

**Creator Contact**

- Twitter/X: [@mee_yassine](https://x.com/mee_yassine)
- LinkedIn: [Yassine Joundi](https://www.linkedin.com/in/yassine-joundi)
- Email: [joundiyassine@outlook.com](mailto:joundiyassine@outlook.com)

If you find this project helpful or inspiring, please ⭐ **star this repo** on GitHub – it really helps.
