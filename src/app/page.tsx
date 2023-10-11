import BigCards from "@/components/cards/BigCards";
import LandingFooter from "@/components/footers/LandingFooter";
import LandingPageHeader from "@/components/headers/LandingPageHeader";
import PrimaryInput from "@/components/inputs/PrimaryInput";
import LandingPageHero from "@/components/sections/LandingPageHero";
import Section from "@/components/sections/Section";
import Flare from "@/components/shared/Flare";
import Logo from "@/components/shared/Logo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-primaryDark relative">
      <div className="h-[800px] relative  before:shadow-[inset_0px_1px_100px_100px_black] before:z-10 before:w-full before:absolute before:h-full ">
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

      <Section className="flex gap-5 justify-between max-w-screen-2xl m-auto py-5">
        <BigCards
          title="Trained for 1000+ sessions"
          image="/images/icons/fire.png"
          color="bg-red-500"
        />

        <BigCards
          title="Free of Charge"
          image="/images/icons/currency.png"
          color="bg-orange-500"
        />

        <BigCards
          title="Optimized for speed and performance"
          image="/images/icons/rocket.png"
          color="bg-gray-200"
        />
      </Section>

      <div className="relative">
        <Flare />
        <Section className="mt-10">
          <h1 className="text-white text-6xl font-medium mb-5">
            Instantly Get Solutions to Your Problems
          </h1>
          <div className="flex gap-5">
            <div>
              <p className="text-white text-2xl mt-5 font-thin">
                "Uncover the magic behind the scenes. From advanced algorithms
                to real-time data processing, dive into the intricacies of how
                our AI seamlessly analyzes, interprets, and delivers instant
                solutions. See the future of problem-solving unfold before your
                eyes."
              </p>
            </div>
            <div className="flex gap-5 justify-between">
              <BigCards
                title="Robust"
                image="/images/icons/fire.png"
                color="bg-red-500"
                type="square"
              />

              <BigCards
                title="Accurate"
                image="/images/icons/currency.png"
                color="bg-orange-500"
                type="square"
              />

              <BigCards
                title="Fast"
                image="/images/icons/rocket.png"
                color="bg-gray-200"
                type="square"
              />
            </div>
          </div>
        </Section>
      </div>

      <Flare className=" w-72 h-72  bottom-32 right-96 opacity-30" />
      <Section className="mt-10">
        <div className="flex gap-5 justify-between border border-slate-800 backdrop-blur-sm px-10 py-16 rounded-[60px]">
          <div className="">
            <p className="text-white text-7xl mt-5 font-thin">
              Subscribe to our newsletter to get the latest updates and offers.
            </p>
          </div>
          <div className="w-full  flex  items-center">
            <PrimaryInput />
          </div>
        </div>
      </Section>

      <LandingFooter />
    </main>
  );
}
