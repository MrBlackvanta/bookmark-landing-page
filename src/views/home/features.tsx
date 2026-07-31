import FeatureTabs from "@/components/feature-tabs";
import { featuresIntro } from "@/data";

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="overflow-x-clip px-8 pt-35 md:px-10 md:pt-27.5"
    >
      <div className="mx-auto max-w-page">
        <div className="mx-auto max-w-copy text-center">
          <h2
            id="features-heading"
            className="text-very-dark-blue text-heading tracking-heading md:text-heading-lg font-medium"
          >
            {featuresIntro.title}
          </h2>
          <p className="text-grayish-blue text-body md:text-body-lg md:mt-4">
            {featuresIntro.description}
          </p>
        </div>

        <FeatureTabs />
      </div>
    </section>
  );
}
