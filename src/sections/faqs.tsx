"use client";
import React, { useState } from "react";
import Faqs from "@/components/faqsC";

const faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // State to track the open FAQ

  // List of FAQs
  const faqData = [
    {
      question: "What can I expect in my first session?",
      answer:
        "During your first session, we'll discuss your concerns, goals, and background to understand your unique situation and create a tailored plan for therapy.",
    },
    {
      question: "How long does a typical session last?",
      answer: "A typical session lasts about 50 minutes.",
    },
    {
      question: "Do you offer online therapy?",
      answer: "Yes, I offer both in-person and online therapy sessions.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel or reschedule a session with at least 24 hours notice.",
    },
    {
      question: "Is therapy confidential?",
      answer:
        "Yes, therapy is confidential with some exceptions regarding safety concerns.",
    },
    {
      question: "How many sessions will I need?",
      answer:
        "The number of sessions varies depending on individual needs and goals.",
    },
  ];

  const toggleFaq = (index: number) => {
    // If the same index is clicked, close the FAQ, otherwise open the clicked one
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="  flex flex-col items-center my-28 w-[80%] ml-[10%]">
      <div className="text-5xl font-semibold text-background text-center mb-20">
        <span className="hidden md:block">Frequently Asked Questions</span>
        <span className="md:hidden">FAQS</span>
      </div>

      <div className=" flex flex-col gap-2  md:w-[70%]">
        {faqData.map((faq, index) => (
          <Faqs
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index} // Open only the selected FAQ
            toggleFaq={() => toggleFaq(index)} // Function to toggle the FAQ
          />
        ))}
      </div>
    </div>
  );
};

export default faqs;
