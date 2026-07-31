import NewsletterForm from "@/components/newsletter-form";
import { newsletter } from "@/data";

export default function Newsletter() {
  return (
    <section
      id="contact"
      aria-labelledby="newsletter-heading"
      className="bg-soft-blue mt-30.75 px-8 py-15 md:mt-37.5 md:px-10 md:pt-14.5 md:pb-18.5"
    >
      <div className="mx-auto max-w-110.5 text-center">
        <p className="md:text-nav text-xs leading-10 font-medium tracking-[0.3846em] text-white uppercase">
          {newsletter.eyebrow}
        </p>
        <h2
          id="newsletter-heading"
          className="text-heading tracking-heading md:text-heading-lg leading-7 font-medium text-white md:leading-10"
        >
          {newsletter.title}
        </h2>

        <NewsletterForm />
      </div>
    </section>
  );
}
