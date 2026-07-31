import FaqAccordion from "@/components/faq-accordion";
import { faqIntro } from "@/data";

export default function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="px-8 pt-35 md:px-10 md:pt-37.25"
    >
      <div className="mx-auto max-w-copy text-center">
        <h2
          id="faq-heading"
          className="text-very-dark-blue text-heading tracking-heading md:text-heading-lg leading-7.5 font-medium md:leading-13"
        >
          {faqIntro.title}
        </h2>
        <p className="text-grayish-blue text-body md:text-body-lg mt-4">
          {faqIntro.description}
        </p>
      </div>

      <div className="mt-11 md:mt-14">
        <FaqAccordion />
      </div>

      <div className="mt-12 text-center md:mt-13.75">
        <a href="#contact" className="v-btn v-btn-primary">
          More Info
        </a>
      </div>
    </section>
  );
}
