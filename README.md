# Bookmark landing page

My solution to the [Bookmark landing page](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://bookmark-landing-page.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/bookmark-landing-page

## Built with

- Next.js 16, App Router
- React 19 and TypeScript
- Tailwind CSS v4

## Notes

**Contrast.** Three pairings in the supplied palette are under 4.5:1, so I darkened each
by the smallest amount that clears it. Hue and saturation stay put.

|                                 | design            | built             | contrast   |
| ------------------------------- | ----------------- | ----------------- | ---------- |
| Grayish Blue body copy          | `hsl(229 8% 60%)` | `hsl(229 8% 48%)` | 3.0 to 4.6 |
| White label on Soft Red buttons | `hsl(0 94% 66%)`  | `hsl(0 94% 47%)`  | 3.2 to 4.7 |
| Email placeholder               | `#242a45` at 25%  | `#242a45` at 65%  | 1.6 to 4.6 |

The brighter Soft Red is still used where it's decorative rather than a surface behind
text, like the active tab underline and the FAQ chevrons. Non-text UI only needs 3:1.
Hover states keep it too.

**Feature illustrations share one box.** Figma draws the three at different sizes, so
switching tabs would resize the column and shift the page. They all sit in one
`aspect-536/416` frame instead. Slides 1 and 2 land at their designed size and slide 3
renders about 9.5% large. A stable layout was worth more than the 9.5%.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
