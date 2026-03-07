# Leia Oliver — Portfolio

Personal portfolio built with **Next.js 16**, **React 19**, **TypeScript**, and **TailwindCSS 4**. Features a dark minimal design with scroll-reveal animations, interactive project cards, and WhatsApp integration.

## Tech Stack

- **Next.js 16.1** — App Router, static generation
- **React 19** — UI components
- **TypeScript** — Type safety
- **TailwindCSS 4** — Styling
- **Geist Font** — Typography

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
├── components/
│   ├── Navbar.tsx              # Fixed nav with active section detection
│   ├── Hero.tsx                # Landing with typewriter & cursor light
│   ├── About.tsx               # Bio, timeline, stats
│   ├── Skills.tsx              # Tabs, progress bars, marquee
│   ├── Projects.tsx            # Project cards with hover effects
│   ├── PromptEngineering.tsx   # Education & certifications
│   └── Contact.tsx             # Contact links & WhatsApp services
├── hooks/
│   └── useScrollReveal.ts      # Scroll-reveal animation hooks
├── globals.css
├── layout.tsx
└── page.tsx
```

## Deploy

```bash
npm run build
```

Deploy to [Vercel](https://vercel.com/new), Netlify, or any static hosting.

## License

MIT
