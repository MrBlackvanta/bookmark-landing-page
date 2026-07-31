import tab1 from "@/assets/images/illustration-features-tab-1.svg";
import tab2 from "@/assets/images/illustration-features-tab-2.svg";
import tab3 from "@/assets/images/illustration-features-tab-3.svg";
import { FacebookIcon, TwitterIcon } from "@/components/icons";
import type {
  CtaButton,
  Feature,
  HeroContent,
  NavLink,
  SectionIntro,
  SocialLink,
} from "./data.types";

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

export const featuresIntro: SectionIntro = {
  title: "Features",
  description:
    "Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.",
};

export const features: Feature[] = [
  {
    tab: "Simple Bookmarking",
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: tab1,
    imageAlt: "",
  },
  {
    tab: "Speedy Searching",
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: tab2,
    imageAlt: "",
  },
  {
    tab: "Easy Sharing",
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: tab3,
    imageAlt: "",
  },
];
