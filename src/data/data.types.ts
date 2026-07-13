import type { FC, SVGProps } from "react";

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: FC<SVGProps<SVGSVGElement>>;
};

export type CtaButton = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type HeroContent = {
  title: string;
  description: string;
};
