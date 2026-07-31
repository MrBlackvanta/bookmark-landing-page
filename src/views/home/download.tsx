import { extensions, extensionsIntro } from "@/data";
import { cn } from "@/lib";
import Image from "next/image";

const stagger = ["", "md:mt-10", "md:mt-20"];

export default function Download() {
  return (
    <section
      id="download"
      aria-labelledby="download-heading"
      className="px-8 pt-19.25 md:px-10 md:pt-50.75"
    >
      <div className="mx-auto max-w-page">
        <div className="mx-auto max-w-copy text-center">
          <h2
            id="download-heading"
            className="text-very-dark-blue text-heading tracking-heading md:text-heading-lg font-medium"
          >
            {extensionsIntro.title}
          </h2>
          <p className="text-grayish-blue text-body md:text-body-lg md:mt-4">
            {extensionsIntro.description}
          </p>
        </div>

        <ul className="mt-10 flex flex-col items-center gap-10 md:mt-12 md:flex-row md:items-start md:justify-center md:gap-9">
          {extensions.map((extension, index) => (
            <li
              key={extension.browser}
              className={cn("w-full max-w-70", stagger[index])}
            >
              <article className="shadow-card rounded-card flex flex-col bg-white">
                <div className="px-6 pt-12.25 text-center">
                  <Image
                    src={extension.logo}
                    alt=""
                    className="mx-auto h-25 w-auto"
                  />
                  <h3 className="text-very-dark-blue text-card-title tracking-cta mt-8 font-medium">
                    Add to {extension.browser}
                  </h3>
                  <p className="text-grayish-blue text-body mt-1.5 leading-7">
                    Minimum version {extension.minVersion}
                  </p>
                </div>

                <div
                  aria-hidden="true"
                  className="-mx-0.5 mt-8 h-1 bg-[url('/bg-dots.svg')] bg-size-[auto_4px] bg-center bg-repeat-x"
                />

                <div className="p-6">
                  <a href="#" className="v-btn v-btn-primary w-full">
                    Add &amp; Install Extension
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
