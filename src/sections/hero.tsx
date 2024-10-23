import React from "react";
import HeroBanner from "../../public/images/Psychologist.svg";
import Arrow from "../../public/images/arrow.svg";

const Hero = () => {
  return (
    <div className="bg-background flex flex-col md:flex-row p-10 md:px-20 w-full items-center gap-10 md:gap-20">
      <div className="flex flex-col gap-10 md:w-[50%] p-2 md:p-4">
        <div className="flex flex-col gap-4 ">
          <h1 className=" text-3xl md:text-4xl font-semibold">
            Supporting Your Mental Health Journey
          </h1>
          <p className="text-lg">
            Take the first step towards better mental health. Explore helpful
            resources and compassionate therapy in a safe, nonjudgmental space.
            Were here to listen and guide you to a healthier, happier you.
          </p>
        </div>
        <div className="flex flex-row items-center px-6 py-4 gap-2 text-background border-4 border-background bg-white w-fit rounded-lg hover:border-4 hover:border-white hover:bg-background hover:text-white cursor-pointer">
          <div>
            <span className="md:font-semibold hidden md:block md:text-2xl">
              Book A Free Consultation
            </span>
            <span className="font-semibold text-xl md:hidden">
              Free Consultation
            </span>
          </div>

          <Arrow className="h-9 w-9" />
        </div>
      </div>
      <div className="w-full md:w-[50%] p-10">
        <HeroBanner />
      </div>
    </div>
  );
};

export default Hero;
