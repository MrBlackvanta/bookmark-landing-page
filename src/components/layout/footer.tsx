import { LogoIcon } from "@/components/icons";
import { navLinks, socialLinks } from "@/data";

export default function Footer() {
  return (
    <footer className="bg-very-dark-blue text-white">
      <div className="mx-auto flex max-w-page flex-col items-center px-8 pt-10 pb-10.75 md:h-22 md:flex-row md:px-10 md:py-0">
        <LogoIcon variant="inverted" className="w-37" />

        <nav aria-label="Footer" className="mt-9.75 md:mt-0 md:ms-16">
          <ul className="flex flex-col items-center gap-8 md:flex-row md:gap-11">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-nav-footer md:text-nav tracking-nav hover:text-soft-red uppercase transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="mt-12 flex gap-10 md:mt-0 md:ms-auto">
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

      <div className="px-6 pb-0.5 text-center text-sm">
        Coded by{" "}
        <a
          href="https://www.linkedin.com/in/abdelrhman-vanta/"
          target="_blank"
          rel="noopener noreferrer"
          className="v-footer-link"
        >
          Abdelrhman Abdelaal
        </a>
        .
      </div>
    </footer>
  );
}
