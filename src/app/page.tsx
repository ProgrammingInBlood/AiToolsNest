import BigCards from "@/components/cards/BigCards";
import LandingFooter from "@/components/footers/LandingFooter";
import LandingPageHeader from "@/components/headers/LandingPageHeader";
import PrimaryInput from "@/components/inputs/PrimaryInput";
import LandingPageDescription from "@/components/pages/landing-page/LandingPageDescription";
import LandingPageHero from "@/components/pages/landing-page/LandingPageHero";
import LandingPageProducts from "@/components/pages/landing-page/LandingPageProducts";
import Section from "@/components/sections/Section";
import Flare from "@/components/shared/Flare";
import Logo from "@/components/shared/Logo";
import SubscribeToNewsLetters from "@/components/shared/SubscribeToNewsLetters";
import Paragraph from "@/components/texts/Paragraph";
import ParagraphMedium from "@/components/texts/ParagraphMedium";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-primaryDark relative">
      <div className=" h-[600px] md:h-[800px] relative  before:shadow-[inset_0px_1px_100px_100px_#03040e] before:z-10 before:w-full before:absolute before:h-full ">
        <Image
          src="/images/background/galaxy.jpg"
          className="z-0"
          layout="fill"
          objectFit=" cover"
          objectPosition="center"
          alt="landing-image"
        />

        <div className="z-10 relative">
          <LandingPageHeader />
          <LandingPageHero />
        </div>
      </div>

      <LandingPageDescription />
      <LandingPageProducts />
      <Flare className="w-72 h-72  bottom-32 right-96 opacity-30" />
      <SubscribeToNewsLetters />
      <LandingFooter />
    </main>
  );
}
