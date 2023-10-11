import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Logo from "../shared/Logo";

function LandingFooter() {
  return (
    <footer className="flex justify-between items-center py-8 px-8 border-t  border-[rgba(131,131,131,0.5)] mt-10">
      <div className="flex items-center">
        <Logo />
      </div>

      <nav className="sm:flex sm:items-center text-white font-light text-xl">
        <a href="#" className="block mt-4 sm:inline-block sm:mt-0 mr-8">
          Home
        </a>
        <a href="#" className="block mt-4 sm:inline-block sm:mt-0 mr-8">
          Features
        </a>
        <a href="#" className="block mt-4 sm:inline-block sm:mt-0 mr-8">
          Products
        </a>
        <a href="#" className="block mt-4 sm:inline-block sm:mt-0">
          About Us
        </a>
      </nav>

      <div>
        <PrimaryButton text="Join Now" />
      </div>
    </footer>
  );
}

export default LandingFooter;
