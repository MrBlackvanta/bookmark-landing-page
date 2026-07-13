import { FacebookIcon, TwitterIcon } from "@/components/icons";
import type { CtaButton, HeroContent, NavLink, SocialLink } from "./data.types";

export const navLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "Bookmark on Facebook", href: "#", icon: FacebookIcon },
  { label: "Bookmark on Twitter", href: "#", icon: TwitterIcon },
];

export const hero: HeroContent = {
  title: "A Simple Bookmark Manager",
  description:
    "A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.",
};

export const heroButtons: CtaButton[] = [
  { label: "Get it on Chrome", href: "#", variant: "primary" },
  { label: "Get it on Firefox", href: "#", variant: "secondary" },
];
