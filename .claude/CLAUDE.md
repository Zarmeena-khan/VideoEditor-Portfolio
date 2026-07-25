# Video Editor Portfolio - Project Guide

## Project Overview

This is a Next.js-based portfolio website for a video editor, showcasing creative work through an elegant, cinematic interface with a distinctive crimson and velvet color scheme.

**Live Demo**: Portfolio for showcasing video editing work, motion graphics, and creative projects.

## Tech Stack

- **Framework**: Next.js 16.2.4 (App Router)
- **UI Library**: React 19.2.4
- **Styling**: Tailwind CSS 4 with custom design system
- **Animations**: Framer Motion 12.38.0
- **Icons**: Lucide React 1.14.0
- **Fonts**: Custom fonts (Bebas, Barlow, Cormorant)

## Project Structure

```
D:\ProjectFiles\Video-editor-portfolio\
├── app/
│   ├── layout.js          # Root layout with font definitions
│   └── page.js            # Main page composition
├── components/
│   ├── About.jsx          # About section
│   ├── Contact.jsx        # Contact form
│   ├── CustomCursor.jsx   # Custom cursor animation
│   ├── Education.jsx      # Education section
│   ├── Footer.jsx         # Footer component
│   ├── Hero.jsx           # Hero/landing section
│   ├── Hobbies.jsx        # Hobbies section
│   ├── Navbar.jsx         # Navigation bar
│   ├── Portfolio.jsx      # Video portfolio showcase
│   └── Skills.jsx         # Skills display
├── public/
│   ├── videos/            # Portfolio video files
│   ├── my-picture.jpeg    # Profile photo
│   ├── Zarmeena_Khan_CV_Done.pdf  # CV/Resume
│   └── *.png              # Project thumbnails
├── .claude/
│   ├── CLAUDE.md          # This file
│   ├── memory/            # Session memory files
│   └── workflows/         # Custom workflows
└── skills-lock.json       # Claude Code skills registry
```

## Design System

### Color Palette

The project uses a distinctive **cinematic crimson & velvet** theme:

```javascript
// Crimson shades (accent colors)
crimson-deep: '#2C0F12'
crimson-mid: '#6B1E23'
crimson-accent: '#C0392B'
crimson-glow: '#E05252'

// Velvet background shades (dark backgrounds)
velvet-bg: '#160A0B'
velvet-bg2: '#1E0C0E'
velvet-bg3: '#240F11'

// Neutral colors
cream: '#F2ECE4'    // Primary text
muted: '#9A837F'    // Secondary text
```

### Typography

- **Bebas Neue** (`font-bebas`): Display headings, large titles
- **Barlow** (`font-barlow`): Body text, UI elements, buttons
- **Cormorant** (`font-cormorant`): Italic subtitles, elegant accents

### Component Patterns

1. **'use client' directive**: All interactive components use client-side rendering
2. **Sections**: Each section has an `id` attribute for navigation anchoring
3. **Spacing**: Consistent `py-20 px-6 md:px-8` for section padding
4. **Max width**: Content constrained with `max-w-6xl mx-auto`
5. **Animations**: Framer Motion for transitions, CSS animations for scrolling effects

## Key Features

### 1. Portfolio/Work Section (`Portfolio.jsx`)
- Dual-row infinite horizontal scroll (one left, one right)
- Video cards with hover-to-play functionality
- Lazy loading videos on hover (not on initial render)
- Custom gradients per project
- 10 sample projects included

### 2. Hero Section (`Hero.jsx`)
- Three-line name display with stroke effect
- Radial gradient background with subtle grid pattern
- CTAs for "View Reel" and "Let's Work Together"
- Custom eyebrow text with decorative line

### 3. Custom Cursor (`CustomCursor.jsx`)
- Interactive cursor following mouse movement
- Responds to hover states on interactive elements

### 4. Navigation (`Navbar.jsx`)
- Smooth scroll navigation
- Links to: Home, About, Skills, Work, Contact
- Mobile-responsive menu

## Development Guidelines

### When Adding New Components

1. Always add `'use client'` directive for interactive components
2. Follow the existing color scheme (crimson/velvet/cream)
3. Match typography patterns (bebas for titles, barlow for body)
4. Use consistent spacing patterns
5. Maintain responsive design with Tailwind breakpoints

### Code Style

- **File naming**: PascalCase for components (e.g., `Hero.jsx`)
- **CSS**: Use Tailwind utility classes, avoid custom CSS
- **Imports**: Use `@/components` alias for component imports
- **Quotes**: Single quotes in JSX, prefer template literals for complex strings
- **Accessibility**: Include alt text, ARIA labels, semantic HTML

### Animation Patterns

```javascript
// Tailwind animations
animate-scroll-left   // Infinite left scroll
animate-scroll-right  // Infinite right scroll

// Framer Motion (when used)
// Use for page transitions, component mounting
```

### Video Handling

- Videos stored in `public/videos/`
- Lazy load video `src` on hover (performance optimization)
- Always include `muted` and `loop` attributes
- Use `object-cover` for consistent aspect ratios

## Common Tasks

### Update Portfolio Videos

1. Add video files to `public/videos/`
2. Update the `projects` array in `components/Portfolio.jsx`
3. Include: `id`, `cat`, `name`, `videoSrc`, `bgGradient`

### Update Personal Info

- **Name**: Edit `components/Hero.jsx` (lines 29-41)
- **Photo**: Replace `public/my-picture.jpeg`
- **CV/Resume**: Replace `public/Zarmeena_Khan_CV_Done.pdf`
- **Contact details**: Edit `components/Contact.jsx`

### Add New Sections

1. Create component in `components/`
2. Import in `app/page.js`
3. Add navigation link in `components/Navbar.jsx`
4. Follow section structure pattern (id, padding, max-width)

## Build & Deploy

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Run ESLint
```

### Deployment Checklist

- [ ] Update personal information (name, photo, CV)
- [ ] Replace placeholder videos with actual work
- [ ] Update contact form endpoint if using external service
- [ ] Test all video playback
- [ ] Verify responsive design on mobile/tablet
- [ ] Check accessibility (keyboard navigation, screen readers)
- [ ] Optimize video file sizes for web delivery

## Notes

- The project uses App Router (Next.js 13+), not Pages Router
- All components are functional components (no class components)
- Custom cursor may need testing across browsers
- Video autoplaying follows browser autoplay policies (muted required)

## Installed Claude Skills

- **ui-ux-pro-max**: UI/UX design and development assistance
  - Source: `nextlevelbuilder/ui-ux-pro-max-skill`
  - Path: `.claude/skills/ui-ux-pro-max/SKILL.md`
