import { FacebookIcon, TwitterIcon } from "@/components/icons";
import type { NavLink, SocialLink } from "./data.types";

export const navLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "Bookmark on Facebook", href: "#", icon: FacebookIcon },
  { label: "Bookmark on Twitter", href: "#", icon: TwitterIcon },
];
