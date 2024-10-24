import Contact from "@/components/contact";
import React from "react";

const getInTouch = () => {
  return (
    <div className="bg-background mx-[10%] flex flex-col gap-10 md:gap-0 md:flex-row p-10 items-center my-28 rounded-md">
      <div className="flex flex-col md:w-[60%] md:pr-20  gap-10">
        <span className="text-3xl">Get in touch with Me</span>
        <span className="pb-4">
          Book a free consultation now <br/>
          <br/>
          You can also call, email or arrange a
          call back by completing the form below. <br/>
          <br/> Feel free to call me for a
          chat to see how I might help you and to find out more about how my
          approach works. I'd be happy to answer any questions you may have.
          <br/>
          <br/>
          Please leave a message if the phone goes to voicemail, and I will
          return your call as soon as possible. Alternatively, complete the
          contact form below with a convenient time to call you back.
        </span>
      </div>
      <div className="grow">
      <Contact />
      </div>
    </div>
  );
};

export default getInTouch;
