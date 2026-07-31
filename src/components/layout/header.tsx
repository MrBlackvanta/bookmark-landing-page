import { LogoIcon } from "@/components/icons";
import { navLinks } from "@/data";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="px-8 pt-10 md:px-10 md:pt-12">
      <div className="mx-auto flex max-w-page items-center justify-between">
        <LogoIcon className="w-37.25" />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-11">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-very-dark-blue hover:text-soft-red text-nav tracking-nav uppercase transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#login"
                className="border-soft-red-deep bg-soft-red-deep shadow-cta rounded-cta text-nav tracking-nav hover:text-soft-red-deep ms-1 inline-flex h-10 items-center border-2 px-8 font-medium text-white uppercase transition-colors hover:bg-white"
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
