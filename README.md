# Frontend Mentor - Clipboard landing page solution

This is a solution to the [Clipboard landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Design deviations](#design-deviations)
- [Author](#author)

## Overview

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [GitHub](https://github.com/MrBlackvanta/clipboard-landing-page)
- Live Site URL: [Netlify](https://vanta-clipboard-landing-page.netlify.app)

## My process

### Built with

- [Next.js 16](https://nextjs.org/) (App Router, React Compiler, Turbopack)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/) (strict)
- [Tailwind CSS v4](https://tailwindcss.com/) configured entirely in CSS via `@theme` / `@utility` (no config file) — semantic color tokens and a font-size-relative `tracking-*` scale in `em`
- `next/font` for Bai Jamjuree (self-hosted, `display: swap`, weights 400/600)
- `next/image` with static imports — intrinsic sizing (no CLS), AVIF/WebP, responsive `srcset`
- Inline SVG icon components driven by `currentColor`
- Semantic HTML5 landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), a single `<h1>`, no skipped heading levels
- Mobile-first responsive layout with a single `lg:` breakpoint
- Animations gated behind `prefers-reduced-motion`

### Design deviations

The Frontend Mentor color palette is implemented as specified. A few brand pairings fall below the WCAG AA contrast threshold (4.5:1 for body text); they are documented here rather than altered, since meeting AA would mean changing the brand colors:

- Grayish Blue body copy on white — ~2.4:1
- White label on the Strong Cyan button — ~2.4:1
- White label on the Light Blue button — ~3.9:1

These are properties of the supplied palette, not the markup. Headings, footer links, and the attribution all use Dark Grayish Blue (~7.7:1) and pass comfortably.

## Author

- UpWork - [Abdelrhman Abdelaal](https://upwork.com/freelancers/~01f0a9479696b61f49)
- Frontend Mentor - [@MrBlackvanta](https://www.frontendmentor.io/profile/MrBlackvanta)
- LinkedIn - [Abdelrhman Abdelaal](https://www.linkedin.com/in/abdelrhman-vanta/)
