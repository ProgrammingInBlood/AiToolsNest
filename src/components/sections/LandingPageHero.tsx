import React from "react";
import PrimaryInput from "../inputs/PrimaryInput";

function LandingPageHero() {
  return (
    <div className="min-h-[600px] max-w-7xl m-auto flex flex-col justify-center ">
      <h1 className="text-white  text-8xl font-bold">
        Ignite, Innovate, Inspire
      </h1>
      <div className="flex flex-col items-center ">
        <span>
          <h1 className="text-white text-8xl font-bold mt-5">
            AI Toolkit for Evolution
          </h1>
        </span>
        <p className="text-white text-3xl mt-5 font-light">
          All the tools you need, in one place
        </p>
        <div className="mt-5">
          <PrimaryInput />
        </div>
      </div>
    </div>
  );
}

export default LandingPageHero;
