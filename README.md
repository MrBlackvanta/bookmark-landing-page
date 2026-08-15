# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

![](./screenshot.webp)

### Links

- Solution URL: [GitHub](https://github.com/MrBlackvanta/bookmark-landing-page)
- Live Site URL: [Cloudflare](https://bookmark-landing-page.abdelrhman-ahmed8881.workers.dev)
- Mirror: [Netlify](https://vanta-bookmark-landing-page.netlify.app)

## My process

### Built with

- [Next.js 16](https://nextjs.org/) (App Router, React Compiler, Turbopack)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/) (strict)
- [Tailwind CSS v4](https://tailwindcss.com/)
### Design deviations

**Contrast, to reach 100 on Lighthouse accessibility.** Three pairings in the supplied palette sit below the WCAG AA threshold of 4.5:1 for body text, so each was darkened by the smallest amount that clears it. Hue and saturation are untouched; only lightness and opacity moved.

| | design | shipped | contrast |
| --- | --- | --- | --- |
| Grayish Blue body copy | `hsl(229 8% 60%)` | `hsl(229 8% 48%)` | 3.0:1 → 4.6:1 |
| White label on the Soft Red buttons | `hsl(0 94% 66%)` | `hsl(0 94% 47%)` | 3.2:1 → 4.7:1 |
| Email input placeholder | `#242a45` at 25% | `#242a45` at 65% | 1.6:1 → 4.6:1 |

The design's brighter Soft Red is still used wherever it is decorative rather than a surface behind text — the active tab underline and the FAQ chevrons — because non-text UI only needs 3:1 and it passes at 3.2:1. Hover states also keep it: as text on white they are below AA, but Lighthouse does not audit hover. Everything else already cleared AA: headings and FAQ questions (~14:1), FAQ answers (~6.2:1), white on Soft Blue (~4.8:1), white on the Very Dark Blue footer (~13.9:1).

**Feature illustrations.** Figma draws the three at different sizes (536×346, 468×393, 440×380), so switching tabs would resize the column and shift the page. All three share one `aspect-536/416` box instead, which renders slides 1 and 2 at their exact designed size and slide 3 about 9.5% large. Stable layout was the better trade.

## Author

- UpWork - [Abdelrhman Abdelaal](https://upwork.com/freelancers/~01f0a9479696b61f49)
- Frontend Mentor - [@MrBlackvanta](https://www.frontendmentor.io/profile/MrBlackvanta)
- LinkedIn - [Abdelrhman Abdelaal](https://www.linkedin.com/in/abdelrhman-vanta/)
