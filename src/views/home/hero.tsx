import heroIllustration from "@/assets/images/illustration-hero.svg";
import { hero, heroButtons } from "@/data";
import { cn } from "@/lib";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="overflow-x-clip px-8 pt-18.75 md:px-10 md:pt-26"
    >
      <div className="mx-auto flex max-w-page flex-col gap-14 md:flex-row-reverse md:items-center md:gap-6">
        <div className="md:w-[59.19%] md:-mr-[10.18%] md:shrink-0">
          <div className="relative -mx-[7.2%] md:mx-0">
            <div
              aria-hidden="true"
              className="bg-soft-blue absolute top-[22.6%] bottom-[-3%] left-[16.9%] -z-10 w-screen rounded-l-full md:top-[30.7%] md:bottom-[-6.2%] md:left-[29.5%]"
            />
            <Image
              src={heroIllustration}
              alt=""
              priority
              sizes="(min-width: 768px) 60vw, 95vw"
              className="relative h-auto w-full"
            />
          </div>
        </div>

        <div className="text-center md:flex-1 md:text-left">
          <h1
            id="hero-heading"
            className="text-very-dark-blue text-display tracking-heading md:text-display-lg font-medium"
          >
            {hero.title}
          </h1>
          <p className="text-grayish-blue text-body md:text-body-lg mt-4 md:mt-6">
            {hero.description}
          </p>
          <div className="mt-8 flex justify-center gap-3.5 md:justify-start md:gap-4">
            {heroButtons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                className={cn("v-btn px-3.5 md:px-5.5", {
                  "v-btn-primary": button.variant === "primary",
                  "v-btn-secondary": button.variant === "secondary",
                })}
              >
                {button.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
