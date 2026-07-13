import heroIllustration from "@/assets/images/illustration-hero.svg";
import { hero, heroButtons } from "@/data";
import { cn } from "@/lib";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="overflow-x-clip px-8 pt-20 md:pt-27"
    >
      <div className="mx-auto flex max-w-276 flex-col gap-22 md:flex-row-reverse md:items-center md:gap-8">
        <div className="relative md:-mr-8 md:w-[63%] md:shrink-0 xl:-mr-20">
          <div
            aria-hidden="true"
            className="bg-soft-blue absolute top-[42%] bottom-[-4%] left-[16%] -z-10 w-screen rounded-l-full md:top-[38%] md:bottom-[-3%] md:left-[24%]"
          />
          <Image
            src={heroIllustration}
            alt=""
            priority
            sizes="(min-width: 768px) 56vw, 90vw"
            className="relative mx-auto h-auto w-full max-w-140 md:max-w-none"
          />
        </div>

        <div className="text-center md:flex-1 md:text-left">
          <h1
            id="hero-heading"
            className="text-very-dark-blue text-3xl leading-tight font-medium md:text-5xl"
          >
            {hero.title}
          </h1>
          <p className="text-grayish-blue mx-auto mt-4 max-w-lg text-[0.9375rem] md:mx-0 md:mt-6">
            {hero.description}
          </p>
          <div className="mt-8 flex justify-center gap-3.5 md:justify-start">
            {heroButtons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                className={cn(
                  "v-btn",
                  button.variant === "primary"
                    ? "v-btn-primary"
                    : "v-btn-secondary",
                )}
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
