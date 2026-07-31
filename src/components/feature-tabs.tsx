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
        className="border-rule md:max-w-tabs mx-auto flex flex-col border-t md:flex-row md:justify-center md:border-t-0 md:border-b"
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
              aria-controls="feature-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              className={cn(
                "border-rule flex w-full cursor-pointer justify-center border-b md:w-auto md:flex-1 md:border-b-0",
                selected
                  ? "text-very-dark-blue"
                  : "text-very-dark-blue/75 hover:text-soft-red",
              )}
            >
              <span className="inline-flex flex-col items-center pt-5 md:w-full md:py-0">
                <span className="text-tab tracking-tab">{feature.tab}</span>
                <span
                  className={cn(
                    "mt-4 h-1 w-full rounded-full md:mt-6.75",
                    selected ? "bg-soft-red" : "bg-transparent",
                  )}
                />
              </span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id="feature-panel"
        aria-labelledby={`feature-tab-${active}`}
        className="mt-13 md:mt-9.25"
      >
        <FeaturePanel key={active} feature={features[active]} />
      </div>
    </div>
  );
}

function FeaturePanel({ feature }: { feature: Feature }) {
  return (
    <div className="flex flex-col items-center gap-12 md:flex-row md:gap-31.25">
      <div className="v-reveal-from-left relative aspect-536/416 w-full md:w-[48.29%] md:shrink-0">
        <div
          aria-hidden="true"
          className="bg-soft-blue absolute top-[22.8%] right-[11.25%] bottom-[-7%] -z-10 w-screen rounded-r-full md:top-[28.4%] md:right-[12.1%] md:bottom-[-13%]"
        />
        <Image
          src={feature.image}
          alt={feature.imageAlt}
          fill
          sizes="(min-width: 768px) 48vw, 90vw"
          className="object-contain object-center"
        />
      </div>

      <div className="text-center md:flex-1 md:text-left">
        <h3 className="v-reveal-from-right text-very-dark-blue text-heading tracking-heading md:text-heading-lg font-medium [animation-delay:100ms]">
          {feature.title}
        </h3>
        <p className="v-reveal-from-right text-grayish-blue text-body md:text-body-lg [animation-delay:200ms] md:mt-4">
          {feature.description}
        </p>
        <a
          href="#"
          className="v-btn v-btn-primary v-reveal-from-right mt-4 [animation-delay:300ms] md:mt-8"
        >
          More Info
        </a>
      </div>
    </div>
  );
}
