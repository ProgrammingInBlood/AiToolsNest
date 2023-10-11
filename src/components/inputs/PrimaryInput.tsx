import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

function PrimaryInput() {
  return (
    <div className="border border-primary w-max rounded-full backdrop-blur-sm  ">
      <input
        type="text"
        className="bg-transparent p-4 px-10 outline-none text-white sm:min-w-[400px] font-light placeholder:text-white"
        placeholder="Enter your email"
      />

      <PrimaryButton text="Get Started" />
    </div>
  );
}

export default PrimaryInput;
