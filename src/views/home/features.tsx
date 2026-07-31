import FeatureTabs from "@/components/feature-tabs";
import { featuresIntro } from "@/data";

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="overflow-x-clip px-8 pt-24 md:pt-32"
    >
      <div className="mx-auto max-w-276">
        <div className="mx-auto max-w-110 text-center">
          <h2
            id="features-heading"
            className="text-very-dark-blue text-2xl font-medium md:text-[2rem]"
          >
            {featuresIntro.title}
          </h2>
          <p className="text-grayish-blue mt-4 text-[0.9375rem] md:mt-6">
            {featuresIntro.description}
          </p>
        </div>

        <FeatureTabs />
      </div>
    </section>
  );
}
