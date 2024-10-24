import React from "react";
import Card from "@/components/card";

import Arrow from "../../public/images/arrow.svg";

import Discuess from "../../public/images/discussion.png";
import Group from "../../public/images/advice.png";
import Career from "../../public/images/career.png";
import Education from "../../public/images/counselor.png";
import Team from "../../public/images/training.png";
import Mental from "../../public/images/mental-health.png";



const Services = () => {
  return (
    <div className="flex flex-col items-center my-28 gap-20 ">
      <h1 className="text-5xl font-semibold text-background text-center">
        My Wellbeing Offerings
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%]  ">
        {/* Add 6 cards with different content */}
        <Card
          imageSrc={Discuess}
          heading="Individual Counseling"
          description="Personalized one-on-one sessions to help you navigate life’s 
        challenges and improve mental well-being in a safe, supportive environment."
        />
        <Card
          imageSrc={Group}
          heading="Group Counseling"
          description="Connect with others in a guided group setting to share experiences,
         gain support, and build coping skills for various mental health concerns."
        />
        <Card
          imageSrc={Career}
          heading="Career Guidance"
          description="Receive tailored advice and support to help you make informed career choices,
         plan your future, and reach your professional goals."
        />
        <Card
          imageSrc={Education}
          heading="Psycho-Education Program"
          description="Learn about mental health topics to better understand yourself and others,
        empowering you with knowledge for personal growth and well-being."
        />
        <Card
          imageSrc={Team}
          heading="Training Workshops"
          description="Interactive workshops designed to develop practical skills in mental health, 
        personal development, and coping strategies for everyday life."
        />
        <Card
          imageSrc={Mental}
          heading="Mental Health Consultation"
          description="Discuss your mental health concerns in a relaxed, confidential setting,
         and receive guidance on next steps for care and support."
        />
      </div>
      <div className="flex flex-row items-center gap-1 cursor-pointer w-fit px-4 py-2 bg-white text-background border-2 border-background rounded-md  hover:border-2 hover:border-white hover:bg-background hover:text-white">
              <span className="text-md font-semibold">Learn more</span>
              <Arrow style={{ width: 24, height: 24 }} />
            </div>
    </div>
  );
};

export default Services;
