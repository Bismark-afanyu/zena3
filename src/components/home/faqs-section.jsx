"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FAQs_LINKS } from "../constants";
import { IoChatbubbleOutline } from "react-icons/io5";


// Example FAQs Data (replace this with your actual FAQ content)
const FAQs_DATA = [
  {
    question: "What is Zena?",
    answer:
      "To book a service, simply search for the service you need and follow the booking instructions on the service page.",
  },
  {
    question: "Where is Zena available?",
    answer:
      "We accept payments via credit card, debit card, and other secure payment gateways.",
  },
  {
    question: "Do I need to create an account to use Zena?",
    answer:
      "Yes, you can cancel or reschedule your booking by contacting our support team or using the manage booking option in your account.",
  },
];

const FaqsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index); // Toggle the current FAQ
  };

  return (
    <section className="service-category-section bg-white flex w-full p-4 flex-col items-center gap-6">
      <div className="container mx-auto max-w-3xl">
        {/* Header Section */}
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-Teal_blue-50 text-center text-2xl font-bold leading-tight pt-20">
              We’re Here to Help
            </h2>
            <h2 className="text-Teal_blue-50 text-center text-xl leading-tight pt-8">
              Get quick solutions to your questions.
            </h2>
            <div className="w-full flex justify-center">
              <ul className="hidden lg:flex items-center pt-8 gap-16 border-b-2 border-yellow-200 px-4 lg:px-28 max-w-screen-2xl">
                {FAQs_LINKS.map((link, index) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      onClick={() => setActiveIndex(index)}
                      className={`regular-16 text-Teal_blue-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold ${
                        activeIndex === index ? "font-bold" : ""
                      }`}
                    >
                      {link.lable}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* FAQs Section */}
        <div className="faq-section w-full mt-16 pb-16">
          {FAQs_DATA.map((faq, index) => (
            <div
              key={index}
              className="faq-item border-b border-gray-25 py-4 px-4"
            >
              <div
                className="faq-question flex items-center justify-between cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                {expandedIndex === index ? (
                  <IoIosArrowUp size={24} className="text-Teal_blue-50" />
                ) : (
                  <IoIosArrowDown size={24} className="text-Teal_blue-50" />
                )}
              </div>
              {expandedIndex === index && (
                <div className="faq-answer mt-2 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="live-chat-section border border-yellow-200 w-full rounded-lg flex flex-col lg:flex-row justify-between items-center pt-8 pb-8 px-4 sm:px-6 md:px-8 lg:px-0">
  <div className="text-center lg:text-left">
    <h3 className="text-2xl sm:text-3xl font-bold text-Teal_blue-50">
      Live Chat 
    </h3>
    <p className="text-gray-600 text-sm sm:text-base mt-2">
      Chat with Us Now for Instant Support
    </p>
  </div>
  <div className="mt-4 lg:mt-0">
    <button className="bg-Teal_blue-50 font-semibold text-white px-4 sm:px-6 py-2 rounded-full hover:bg-Teal_blue-70 transition duration-300 flex items-center">
      <IoChatbubbleOutline className="mr-2" />
      Chat Now
    </button>
  </div>
</div>

    </section>
  );
};

export default FaqsSection;
