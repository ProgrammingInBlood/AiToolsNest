import BigCards from "@/components/cards/BigCards";
import Section from "@/components/sections/Section";
import React from "react";

function LandingPageDescription() {
  return (
    <Section className="flex gap-5 justify-center xl:justify-between max-w-screen-2xl m-auto py-5 flex-wrap ">
      <BigCards
        title="Trained for 1000+ sessions"
        image="/images/icons/fire.png"
        color="bg-red-500"
      />

      <BigCards
        title="Free of Charge"
        image="/images/icons/currency.png"
        color="bg-orange-500"
      />

      <BigCards
        title="Optimized for performance"
        image="/images/icons/rocket.png"
        color="bg-gray-200"
      />
    </Section>
  );
}

export default LandingPageDescription;
