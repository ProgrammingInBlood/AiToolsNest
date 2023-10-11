import React from "react";
import PrimaryInput from "../../inputs/PrimaryInput";
import Heading from "../../texts/Heading";
import Paragraph from "../../texts/Paragraph";

function LandingPageHero() {
  return (
    <div className="min-h-[600px] max-w-7xl m-auto flex flex-col justify-center p-2 sm:p-5">
      <div className="flex flex-col items-center ">
        <Heading>Ignite, Innovate, Inspire</Heading>
        <Heading className="mt-2 sm:mt-5">AI Toolkit for Evolution</Heading>
        <Paragraph className="mt-2 sm:mt-5">
          All the tools you need, in one place
        </Paragraph>
        <div className="mt-2 sm:mt-5">
          <PrimaryInput />
        </div>
      </div>
    </div>
  );
}

export default LandingPageHero;
