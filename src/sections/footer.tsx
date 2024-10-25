import React from "react";
import Whatsapp from "../../public/images/whatsapp.svg";
import Instagram from "../../public/images/instagram.svg";
import Youtube from "../../public/images/youTube.svg";
import Phone from "../../public/images/phone.svg";
import Mail from "../../public/images/mail.svg";

const footer = () => {
  return (
    <div className="bg-background p-14 flex flex-col gap-10 md:flex-row justify-between">
      <div className="flex flex-col md:w-[30%]">
        <div>
          <span className="text-2xl font-semibold">Hesed Counselling</span>
          <div className="h-[2px] mt-1 bg-white"></div>
        </div>
        <div className="py-4">
          Hesed Counselling offers you affordable, confidentialand solution
          oriented online counselling & online therapy.
        </div>
        <div className="flex flex-row py-2 justify-between">
          <span>Follow me </span>
          <div className="flex flex-row gap-3">
            <a href="https://www.instagram.com/dan_is_blessed/">
              <Instagram className="cursor-pointer" />
            </a>
            <a href="https://www.youtube.com/@hesed_counselling">
              <Youtube className="cursor-pointer" />
            </a>
            <a href="https://wa.me/9943844897" className="cursor-pointer">
              <Whatsapp />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-end gap-10">
        <div className="flex flex-col gap-4 ">
          <div>
            <span className="text-2xl font-semibold">Quick Links</span>
            <div className="h-[2px] mt-1 bg-white"></div>
          </div>
          <div className="flex flex-col gap-1">
            <span>Home</span>
            <span>About</span>
            <span>Service</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="md:w-[40%] flex flex-col gap-4">
          <div>
            <span className="text-2xl font-semibold">Reach me</span>
            <div className="h-[2px] mt-1 bg-white"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <Phone />
              <span>+91 99999 99999</span>
            </div>
            <div className="flex flex-row gap-2">
              <Mail />
              <p className="underline">
              <a
                href="mailto:sarukhanmuthuraman@gmail.com"
                >
                Send email
              </a>
              </p>
            </div>
            <span className="mt-2 text-xs">
              Dont hesitate to reach us, we are always happy to help.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
