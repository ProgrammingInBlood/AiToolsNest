import BigCards from "@/components/cards/BigCards";
import Section from "@/components/sections/Section";
import Flare from "@/components/shared/Flare";
import Paragraph from "@/components/texts/Paragraph";
import ParagraphMedium from "@/components/texts/ParagraphMedium";
import React from "react";

function LandingPageProducts() {
  return (
    <div className="relative">
      <Flare />
      <Section className="mt-10">
        <ParagraphMedium className="mb-0 md:mb-0">
          Instantly Get Solutions to Your Problems
        </ParagraphMedium>
        <div className="flex gap-5 flex-col xl:flex-row items-center">
          <div className="xl:w-1/3">
            <Paragraph className="mt-2 xl:mt-5 ">
              "Uncover the magic behind the scenes. From advanced algorithms to
              real-time data processing, dive into the intricacies of how our AI
              seamlessly analyzes, interprets, and delivers instant solutions.
              See the future of problem-solving unfold before your eyes."
            </Paragraph>
          </div>
          <div className="flex gap-5 xl:w-2/3 flex-wrap justify-center">
            <BigCards
              title="Robust"
              image="/images/icons/fire.png"
              color="bg-red-500"
              type="square"
            />

            <BigCards
              title="Accurate"
              image="/images/icons/currency.png"
              color="bg-orange-500"
              type="square"
            />

            <BigCards
              title="Fast"
              image="/images/icons/rocket.png"
              color="bg-gray-200"
              type="square"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default LandingPageProducts;
