import LandingFooter from "@/components/footers/LandingFooter";
import LandingPageHeader from "@/components/headers/LandingPageHeader";
import LandingPageDescription from "@/components/pages/landing-page/LandingPageDescription";
import LandingPageHero from "@/components/pages/landing-page/LandingPageHero";
import LandingPageProducts from "@/components/pages/landing-page/LandingPageProducts";
import Flare from "@/components/shared/Flare";
import SubscribeToNewsLetters from "@/components/shared/SubscribeToNewsLetters";

export default function Home() {
  return (
    <main className="bg-primaryDark relative">
      <LandingPageHeader />
      <div className="h-[600px] sm:h-[400px] md:h-[600px] relative  before:shadow-[inset_0px_1px_100px_100px_#03040e] before:z-10 before:w-full before:absolute before:h-full ">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute z-0 w-full h-full object-cover"
          src="/videos/2.mp4"
        />

        <div className="z-10 relative">
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
