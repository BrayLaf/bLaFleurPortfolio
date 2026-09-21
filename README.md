# Portfolio Website - Braydon Lafleur

A modern, responsive portfolio website built with Next.js 16 and React 19, showcasing my professional work, projects, and technical skills.

## 🌐 Overview

This portfolio website serves as a central hub to display my software development projects, technical skills, and professional background. It features a clean, modern design with dark/light mode support and interactive elements to enhance the user experience.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Dark/Light Mode Toggle**: User-friendly theme switching for optimal viewing experience
- **Work Experience**: Internship history on the home page, with each role's stack shown as icons
- **GitHub Activity Visualization**: Real-time GitHub contribution calendar using `react-github-calendar`
- **Project Showcase**: Detailed project pages highlighting key work including:
  - Vita Theme Creator (Cross-platform desktop app for PS Vita themes)
  - Kaika (Interactive knowledge-graph proof of concept)
  - SMPLE (Minimalist Android gym companion)
  - RespAI Hub (Lead-scoring CRM for fire department outreach)
  - CoursePilot (Full-stack course management application)
  - Nest Trading App (Stock trading application)
  - This Portfolio (Meta showcase)
- **Media Carousels**: Each project section pairs a demo video with screenshots
  through the shared `ProjectShowcase` component
- **Interactive UI**: Built with Iconify icons for visual technology stack representation
- **Performance Optimized**: Leveraging Next.js 16's latest optimizations and React Compiler
- **Modern Typography**: Using Geist font family for clean, professional aesthetics

## 🛠️ Tech Stack

### Frontend
- **Next.js 16.1.1** - React framework with App Router
- **React 19.2.3** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **@iconify/react** - Icon library for technology stack visualization
- **react-github-calendar** - GitHub contribution visualization

### Development Tools
- **ESLint 9** - Code linting
- **PostCSS** - CSS processing
- **Babel React Compiler** - Optimized React compilation

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── page.js          # Home page
│   │   ├── layout.js        # Root layout with Header/Footer
│   │   ├── globals.css      # Global styles
│   │   ├── projects/
│   │   │   └── page.js      # Projects page
│   │   ├── vita-theme-creator/
│   │   │   └── page.js      # Vita Theme Creator project page
│   │   ├── tools/           # Tools page
│   │   ├── contact/         # Contact page
│   │   ├── api/contact/     # Contact form handler (Resend)
│   │   └── resume/          # Resume page
│   └── components/
│       ├── Header.jsx       # Navigation header with theme toggle
│       ├── Footer.jsx       # Footer with social links
│       └── ProjectShowcase.jsx  # Video/screenshot carousel
├── public/
│   ├── demo/                # Project screenshots (webp)
│   ├── videos/              # Project demo videos (mp4)
│   └── ...                  # Other static assets
├── package.json            # Project dependencies
└── next.config.mjs         # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/BrayLaf/Portfolio.git
cd Portfolio/portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm run start
```

## 🎨 Features in Detail

### Home Page
- Professional introduction with profile section
- Technology stack visualization with Iconify icons
- Work experience, newest first, including incoming roles
- GitHub activity calendar integration
- Featured project previews
- Quick access to resume

### Projects Page
- Detailed project descriptions
- Technology stack for each project
- Direct links to GitHub repositories
- Visual placeholders for project screenshots

### Responsive Header
- Navigation between Home, Projects, and Resume pages
- Dark/light mode toggle
- Mobile-friendly hamburger menu

### Footer
- Social media links (LinkedIn, GitHub)
- Professional contact information

## 🔧 Configuration

### Theme Customization
The site uses Tailwind CSS with custom color schemes defined for both light and dark modes. Theme preferences are persisted using localStorage.

### Font Configuration
Using Next.js font optimization with Geist Sans and Geist Mono font families for a modern, professional look.

## 📱 Pages

- **/** - Home page with introduction and featured projects
- **/projects** - Comprehensive projects showcase
- **/vita-theme-creator** - Dedicated project page with Linux downloads
- **/tools** - Browser-based utilities
- **/contact** - Contact form
- **/resume** - Professional resume page

## 🌟 Featured Projects

### Vita Theme Creator
Cross-platform desktop app for building PlayStation Vita home-screen themes, built with Electron, React, and TypeScript. Renders a Vita-accurate live preview, exports installable theme packages, and ships Linux AppImage and `.deb` builds from GitHub Actions. Has its own page at `/vita-theme-creator`, with direct download links for the newest Linux release.

### Kaika
Single-page interactive knowledge-graph proof of concept built with React Flow, Zustand, and Dagre.

### SMPLE
Minimalist Android gym companion written in Kotlin and Jetpack Compose, with an offline-first Room cache and Supabase sync.

### RespAI Hub
Full-stack lead-scoring CRM for fire department outreach, combining public datasets with automated sync workflows and a React dashboard.

### CoursePilot
Full-stack web application for course discovery and registration, built with React, Node.js/Express, and Azure SQL.

### Nest Trading App
Stock trading application developed with C#/.NET and Supabase, featuring real-time market data and portfolio tracking.

### This Portfolio
Meta-showcase of the portfolio website itself, demonstrating Next.js and React capabilities.

## 📄 License

This project is private and proprietary.

## 👤 Author

**Braydon Lafleur**
- GitHub: [@BrayLaf](https://github.com/BrayLaf)
- Portfolio: [braydonlafleur.site](https://www.braydonlafleur.site/)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Icons by [Iconify](https://iconify.design/)
- GitHub calendar by [react-github-calendar](https://github.com/grubersjoe/react-github-calendar)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Note**: The main application code is located in the `/portfolio` subdirectory of this repository.
