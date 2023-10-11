"use client";

import { useState } from "react";
import Logo from "../shared/Logo";
import useWindowSize from "@/hooks/useWindowSize";
import PrimaryButton from "../buttons/PrimaryButton";

function LandingPageHeader() {
  const { width } = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="flex justify-between items-center py-8 px-8">
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
    </header>
  );
}

export default LandingPageHeader;
