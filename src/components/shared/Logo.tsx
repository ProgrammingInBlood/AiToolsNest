import React from "react";
import LogoIcon from "../icons/LogoIcon";

function Logo() {
  return (
    <div className=" flex items-center gap-2">
      <LogoIcon className="text-primary w-8 h-8" />
      <p className="select-none text-white font-medium  text-xl mt-1">
        AiToolsNest
      </p>
    </div>
  );
}

export default Logo;
