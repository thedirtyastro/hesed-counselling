import React from "react";
import MiniCard from "@/components/miniCard";
import Image from "next/image";
import TeamWork from "../../public/images/Team-work.png";

const why = () => {
  return (
    <div className=" bg-background ">
       <div className=" md:rounded-br-[999px] py-10 lg:px-20 flex bg-white text-background text-center text-5xl font-semibold ">
          Why Hezed Counselling
        </div>
        <div className=" flex flex-col-reverse  md:flex-row justify-center items-center">
      <div className="md:w-[60%]">
       
        <div className="p-10 md:p-20 flex flex-col gap-10">
          <div >
            Hezed Counselling follows an innovative, tailored approach, so your
            mind receives undivided attention and care. What is more? Our
            offerings are affordable and accessible to all!
          </div>
          <div className="grid grid-cols-2 gap-6 md:gap-8 ">
            <MiniCard
              title="Holistic"
              description="We focus on your mental, emotional, and physical well-being to provide comprehensive support."
            />
            <MiniCard
              title="Accessible"
              description="Flexible counseling options that fit your schedule and budget, making mental health care available to everyone."
            />
            <MiniCard
              title="Proven"
              description="Backed by evidence-based practices, we offer age-appropriate, culturally sensitive mental health care."
            />
            <MiniCard
              title="Responsive"
              description="Quick, reliable support when you need it most, with a focus on providing timely guidance."
            />
          </div>
        </div>
      </div>

      <div className="md:w-[40%] p-10">
        <Image src={TeamWork} alt="Team work"></Image>
      </div>
      </div>
    </div>
  );
};

export default why;
