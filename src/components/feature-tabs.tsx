"use client";

import { features } from "@/data";
import type { Feature } from "@/data/data.types";
import { cn } from "@/lib";
import Image from "next/image";
import { useRef, useState } from "react";

export default function FeatureTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const count = features.length;
    let next: number | null = null;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        next = (active + 1) % count;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        next = (active - 1 + count) % count;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = count - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className="mt-10 md:mt-18">
      <div
        role="tablist"
        aria-label="Features"
        onKeyDown={handleKeyDown}
        className="border-grayish-blue/20 mx-auto flex max-w-xs flex-col border-t md:max-w-3xl md:flex-row md:justify-center md:border-t-0 md:border-b"
      >
        {features.map((feature, index) => {
          const selected = index === active;
          return (
            <button
              key={feature.tab}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`feature-tab-${index}`}
              aria-selected={selected}
              aria-controls={`feature-panel-${index}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              className={cn(
                "border-grayish-blue/20 flex w-full cursor-pointer justify-center border-b md:w-auto md:flex-1 md:border-b-0",
                selected
                  ? "text-very-dark-blue"
                  : "text-grayish-blue hover:text-soft-red",
              )}
            >
              <span className="inline-flex flex-col items-center pt-5 md:w-full md:py-0">
                <span className="text-[0.9375rem] tracking-[0.02em]">
                  {feature.tab}
                </span>
                <span
                  className={cn(
                    "mt-5 -mb-px h-[3px] w-full rounded-full md:mt-8",
                    selected ? "bg-soft-red" : "bg-transparent",
                  )}
                />
              </span>
            </button>
          );
        })}
      </div>

      {features.map((feature, index) => (
        <div
          key={feature.tab}
          role="tabpanel"
          id={`feature-panel-${index}`}
          aria-labelledby={`feature-tab-${index}`}
          hidden={index !== active}
          className="mt-16 md:mt-24"
        >
          <FeaturePanel feature={feature} />
        </div>
      ))}
    </div>
  );
}

function FeaturePanel({ feature }: { feature: Feature }) {
  return (
    <div className="relative flex flex-col items-center gap-16 md:flex-row md:gap-12 lg:gap-28">
      <div className="relative w-full md:-ml-8 md:w-[47%] md:shrink-0 xl:-ml-20">
        <div
          aria-hidden="true"
          className="bg-soft-blue absolute top-[42%] right-[16%] bottom-[-4%] -z-10 w-screen rounded-r-full md:top-[38%] md:right-[24%] md:bottom-[-8%]"
        />
        <Image
          src={feature.image}
          alt={feature.imageAlt}
          sizes="(min-width: 768px) 47vw, 90vw"
          className="relative mx-auto h-auto w-full max-w-md md:mx-0 md:max-w-none"
        />
      </div>

      <div className="text-center md:flex-1 md:text-left">
        <h3 className="text-very-dark-blue text-2xl font-medium md:text-4xl">
          {feature.title}
        </h3>
        <p className="text-grayish-blue mx-auto mt-4 max-w-md text-[0.9375rem] md:mx-0 md:mt-6">
          {feature.description}
        </p>
        <a href="#" className="v-btn v-btn-primary mt-8 inline-flex">
          More Info
        </a>
      </div>
    </div>
  );
}
