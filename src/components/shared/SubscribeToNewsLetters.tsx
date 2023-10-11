import React from "react";
import Section from "../sections/Section";
import PrimaryInput from "../inputs/PrimaryInput";

function SubscribeToNewsLetters() {
  return (
    <Section className="mt-10">
      <div className="flex flex-col lg:flex-row gap-5 justify-between border border-slate-800 backdrop-blur-sm px-10 py-16 rounded-[60px]">
        <div className="">
          <p className="text-white  text-4xl md:text-5x xl:text-6x 2xl:text-7xl mt-5 font-thin">
            Subscribe to our newsletter to get the latest updates and offers.
          </p>
        </div>
        <div className="w-full  flex  items-center">
          <PrimaryInput />
        </div>
      </div>
    </Section>
  );
}

export default SubscribeToNewsLetters;
