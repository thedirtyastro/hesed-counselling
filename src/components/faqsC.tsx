'use client';
import React from "react";
import Plus from "../../public/images/plus.svg";
import Minus from "../../public/images/minus.svg";

interface Props {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleFaq: () => void;
}

const FaqsC: React.FC<Props> = ({ question, answer, isOpen, toggleFaq }) => {
  return (
    <div className="flex flex-col bg-[#D6F3EF] rounded-md text-[#444444]">
      <div className="flex flex-row justify-between p-4">
        <span>{question}</span>
        <div onClick={toggleFaq} className="cursor-pointer">
          {isOpen ? <Minus /> : <Plus />}
        </div>
      </div>

      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        } px-5`}
      >
        <div className="h-[1px] bg-background"></div>
        <div className="py-3">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FaqsC;
