# Loepfe Consulting Website

A modern, professional website for Loepfe Consulting - a premier blockchain consulting firm specializing in institutional clients, FMIs, and digital asset solutions across UAE, UK, and US markets.

## Features

- **Modern Design**: Sleek, professional design with smooth animations and transitions
- **Responsive**: Fully responsive across all devices
- **Performance**: Built with Next.js 14 for optimal performance
- **Animations**: Smooth animations using Framer Motion
- **SEO Optimized**: Proper meta tags and semantic HTML

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## Project Structure

```
loepfe-consulting/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Header navigation
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services section
│   ├── Expertise.tsx    # Expertise section
│   ├── About.tsx        # About section
│   ├── Contact.tsx      # Contact section
│   └── Footer.tsx       # Footer component
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.ts`. The current design uses:
- Primary: Blue gradient (blockchain/technology theme)
- Accent: Purple gradient
- Neutral: Dark grays for professional look

### Content

All content can be updated in the respective component files:
- Services: Edit `components/Services.tsx`
- Expertise areas: Edit `components/Expertise.tsx`
- Office locations: Edit `components/Contact.tsx`
- Company info: Edit `components/About.tsx`

### Animations

Animations are implemented using Framer Motion. Adjust animation parameters in each component's motion props.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

Build the project with `npm run build` and deploy the `.next` folder to any Node.js hosting platform.

## Contact Form Integration

The contact form is currently a static form. To make it functional, integrate with:
- [FormSpree](https://formspree.io/)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- Custom backend API
- Email service (SendGrid, AWS SES, etc.)

## License

All rights reserved - Loepfe Consulting 2024
