import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Logo from "../shared/Logo";

function LandingFooter() {
  return (
    <footer className=" border-t  border-[rgba(131,131,131,0.5)] mt-10 py-2 sm:py-8  px-2 sm:px-8">
      <div className="flex justify-between items-center ">
        <div className="flex items-center">
          <Logo />
        </div>

        <nav className="hidden sm:flex sm:items-center text-white font-light text-xl">
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
      </div>

      <nav className="sm:hidden sm:items-center text-white font-light sm:text-xl">
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
    </footer>
  );
}

export default LandingFooter;
