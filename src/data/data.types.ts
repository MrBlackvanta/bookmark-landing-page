import type { StaticImageData } from "next/image";
import type { FC, SVGProps } from "react";

export type Link = {
  label: string;
  href: string;
};

export type NavLink = Link;

export type SocialLink = Link & {
  icon: FC<SVGProps<SVGSVGElement>>;
};

export type CtaButton = Link & {
  variant: "primary" | "secondary";
};

export type SectionIntro = {
  title: string;
  description: string;
};

export type HeroContent = SectionIntro;

export type Feature = SectionIntro & {
  tab: string;
  image: StaticImageData;
  imageAlt: string;
};

export type ExtensionCard = {
  browser: string;
  logo: StaticImageData;
  minVersion: string;
};
