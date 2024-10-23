import React from "react";
import Profile from "../../public/images/portrait-man-drinking-tea.jpg";
import Arrow from "../../public/images/arrow.svg";
import Instagram from "../../public/images/instagram.svg";
import Youtube from "../../public/images/youTube.svg";

import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col items-center my-28 ">
      <h1 className="text-5xl font-semibold mb-20 text-background">About Me</h1>
      <div className="w-[80%] md:w-[70%] flex flex-col md:flex-row items-center justify-center bg-background  md:h-[500px] rounded-md">
        <div className="w-full md:w-[30%] p-6 md:p-0">
          <Image
            src={Profile}
            alt="Profile"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-[60%] px-6 flex flex-col h-full justify-between gap-4">
          <div className="flex flex-col gap-6  mt-10">
            <div className="text-2xl md:text-4xl font-semibold ">
              Hi, Im Daniel.
            </div>
            <div className="text-sm tracking-wide md:pr-5">
              As a dedicated therapist, Im committed to supporting your mental
              well-being. With a focus on compassion and understanding, I offer
              personalized therapy to help you navigate lifes challenges and
              achieve personal growth. My goal is to create a safe,
              nonjudgmental space where you can feel heard and supported.
            </div>
            <div className="flex flex-row items-center gap-1 cursor-pointer w-fit px-4 py-2 bg-white text-background border-2 border-background rounded-md  hover:border-2 hover:border-white hover:bg-background hover:text-white">
              <span className="text-md font-semibold">Know more</span>
              <Arrow style={{ width: 24, height: 24 }} />
            </div>
          </div>
          <div className="border-t-2 border-white flex flex-row justify-between py-2 mb-4 ">
            <span>Follow me</span>
            <div className="flex flex-row gap-4">
              <a href="https://www.instagram.com/dan_is_blessed/">
                <Instagram className="cursor-pointer" />
              </a>
              <a href="https://www.youtube.com/@hesed_counselling">
                <Youtube className="cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
