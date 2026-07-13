import { LogoIcon } from "@/components/icons";
import { navLinks } from "@/data";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="px-8 pt-10 md:px-10 md:pt-12">
      <div className="mx-auto flex max-w-276 items-center justify-between">
        <LogoIcon className="w-37.25" />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-11">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-very-dark-blue hover:text-soft-red text-[0.8125rem] tracking-[0.115em] uppercase transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#login"
                className="border-soft-red bg-soft-red shadow-cta hover:text-soft-red ms-1 rounded-md border-2 px-8 py-2.5 text-[0.8125rem] tracking-[0.115em] text-white uppercase transition-colors hover:bg-white"
              >
                Login
              </a>
            </li>
          </ul>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
