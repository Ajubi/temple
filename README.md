## Shree Temple — React + Tailwind (Frontend Only)

Premium, minimal, spiritual temple website built with:
- **React (latest stable)** + **TypeScript**
- **Vite** for fast builds
- **Tailwind CSS** with custom **saffron/orange gradients**
- **Framer Motion** for smooth, subtle animations
- **Lucide** icons
- **i18n (English / Hindi / Marathi)** with a top-right language switcher
- **Optional dark mode** (toggle in navbar)

### Quick start

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

### Folder structure

```
src/
  components/
    layout/        # Navbar, Footer, layout shell
    sections/      # Home page sections (Hero, Timings, Gallery, etc.)
    seo/           # SEO helpers (Helmet)
    ui/            # Reusable primitives (Button, Card, Container, Reveal)
    util/          # Small utilities (ScrollToTop)
  pages/           # Route-level pages (Home, About, Events)
  hooks/           # Reusable hooks (useInView, useTheme, useNow)
  assets/          # Add real images here (optional)
  styles/          # Tailwind base + global styles
  lib/             # Helpers (cn, placeholders)
```

### Theme & design tokens

- Tailwind theme lives in `tailwind.config.ts`
- **Primary gradient**: `bg-saffron-sunrise` (`#FF6A00 → #FFB347`)
- **Soft glow overlays**: `bg-saffron-glow`
- **Typography**:
  - Headings: `font-heading` (Cormorant Garamond)
  - Body: `font-sans` (Inter)

### Pages

- `/`: Home (Hero, About, Timings, Events, Gallery, Donations UI, Contact)
- `/about`: Expanded story and design rationale blocks
- `/events`: Timeline-style event list

### Notes

- **Frontend only**: no authentication, no payment gateway, no backend APIs.
- Add real images into `public/` (see `public/README.md`), including:
  - `public/harinath-temple.jpg` (hero background)
  - `public/aarti.jpg` + ritual + gallery images
- Sanskrit shlokas are **always rendered in Sanskrit** (never translated) using a
  Devanagari serif font.


