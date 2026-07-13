"use client";

import { CloseIcon, HamburgerIcon, LogoIcon } from "@/components/icons";
import { navLinks, socialLinks } from "@/data";
import { cn } from "@/lib";
import { useEffect, useRef, useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  function close() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    document.body.style.overflow = "hidden";

    const focusables = panel?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled])",
    );
    focusables?.[0]?.focus();

    const desktop = window.matchMedia("(min-width: 48rem)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !focusables?.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", closeOnDesktop);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="text-very-dark-blue cursor-pointer"
      >
        <HamburgerIcon className="w-4.5" />
      </button>

      <div
        ref={panelRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        className={cn(
          "bg-very-dark-blue/95 fixed inset-0 z-50 flex flex-col overflow-y-auto px-6 pt-10 pb-12 text-white",
          "hidden opacity-0 transition-[opacity,display] transition-discrete duration-300 ease-out motion-reduce:transition-none",
          { "opacity-100 starting:opacity-0": open },
        )}
      >
        <div className="flex items-center justify-between">
          <LogoIcon variant="inverted" className="w-37" />
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="-m-2 cursor-pointer p-2 text-white"
          >
            <CloseIcon className="w-4" />
          </button>
        </div>

        <nav aria-label="Mobile" className="mt-10 border-t border-white/15">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-white/15">
                <a
                  href={link.href}
                  onClick={close}
                  className="hover:text-soft-red block py-5 text-center text-xl tracking-[0.15em] uppercase transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#login"
          onClick={close}
          className="hover:text-very-dark-blue mt-6 rounded-md border-2 border-white py-3 text-center text-xl tracking-[0.15em] uppercase transition-colors hover:bg-white"
        >
          Login
        </a>

        <ul className="mt-auto flex justify-center gap-10">
          {socialLinks.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                aria-label={social.label}
                className="hover:text-soft-red block transition-colors"
              >
                <social.icon className="w-6" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
