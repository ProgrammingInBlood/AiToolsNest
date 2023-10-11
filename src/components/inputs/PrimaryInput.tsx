import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

function PrimaryInput() {
  return (
    <div className="border border-primary  rounded-full backdrop-blur-sm flex w-full">
      <input
        type="text"
        className="bg-transparent p-4 px-10 outline-none text-white w-full  flex-1 font-light placeholder:text-white"
        placeholder="Enter your email"
      />

      <PrimaryButton text="Get Started" />
    </div>
  );
}

export default PrimaryInput;
