"use client";

import { ErrorIcon } from "@/components/icons";
import { newsletter } from "@/data";
import { cn } from "@/lib";
import { useState } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterForm() {
  const [invalid, setInvalid] = useState(false);

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email");
    setInvalid(!emailPattern.test(String(email)));
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="mt-8 flex flex-col gap-4 md:mt-9 md:flex-row md:items-start"
    >
      <div className="md:flex-1">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <div className={cn("rounded-cta", { "bg-soft-red-deep": invalid })}>
          <div className="relative">
            <input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={newsletter.placeholder}
              aria-invalid={invalid}
              aria-describedby={invalid ? "newsletter-error" : undefined}
              onChange={() => setInvalid(false)}
              className={cn(
                "rounded-cta text-cta text-very-dark-blue placeholder:text-very-dark-blue/65 h-12 w-full bg-white px-5",
                { "border-soft-red-deep border-2 pe-12": invalid },
              )}
            />
            {invalid && (
              <ErrorIcon className="text-soft-red-deep pointer-events-none absolute end-4 top-3.5 size-5" />
            )}
          </div>
          {invalid && (
            <p
              id="newsletter-error"
              role="alert"
              className="tracking-cta px-3 pt-1 pb-1.5 text-left text-[0.625rem] font-medium text-white italic"
            >
              {newsletter.invalidMessage}
            </p>
          )}
        </div>
      </div>

      <button type="submit" className="v-btn v-btn-accent w-full md:w-auto">
        {newsletter.submitLabel}
      </button>
    </form>
  );
}
