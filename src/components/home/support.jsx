"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Support = () => {
  const [activeTab, setActiveTab] = useState("General Questions");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const tabs = ["General Questions", "Bookings", "Payments", "Services"];

  const FAQs = {
    "General Questions": [
      {
        summary: "What is Zena?",
        detail:
          "Zena is a platform that connects service providers with people who need their services.",
      },
      {
        summary: "How do I register as a service provider?",
        detail:
          'To register as a service provider, click on the "Register" button on the homepage and fill out the required information.',
      },
      {
        summary: "Is there a fee to use Zena?",
        detail:
          "Zena is free to use for both service providers and customers. However, service providers may choose to offer paid services.",
      },
      {
        summary: "How do I find a service provider?",
        detail:
          "You can find a service provider by using the search bar on the homepage and entering the type of service you need.",
      },
      {
        summary: "Can I trust the service providers on Zena?",
        detail:
          "All service providers on Zena are verified and reviewed by other users to ensure quality and trustworthiness.",
      },
      {
        summary: "How do I contact customer support?",
        detail:
          'You can contact customer support by clicking on the "Support" button on the homepage and filling out the contact form.',
      },
    ],
    Bookings: [
      {
        summary: "How do I book a service?",
        detail:
          'To book a service, find the service provider you want to hire and click on the "Book Now" button on their profile.',
      },
      {
        summary: "Can I cancel a booking?",
        detail:
          'Yes, you can cancel a booking by going to your bookings page and clicking on the "Cancel" button next to the booking you want to cancel.',
      },
      {
        summary: "How do I reschedule a booking?",
        detail:
          "To reschedule a booking, contact the service provider directly through the messaging system on Zena.",
      },
      {
        summary: "What happens if a service provider cancels my booking?",
        detail:
          "If a service provider cancels your booking, you will be notified and can choose to book another service provider or request a refund.",
      },
      {
        summary: "Can I book multiple services at once?",
        detail:
          "Yes, you can book multiple services at once by adding them to your cart and checking out all at once.",
      },
      {
        summary: "How do I view my booking history?",
        detail:
          'You can view your booking history by going to your profile and clicking on the "Booking History" tab.',
      },
      {
        summary: "Can I leave a review for a service provider?",
        detail:
          'Yes, you can leave a review for a service provider after your booking is complete by going to their profile and clicking on the "Leave a Review" button.',
      },
      {
        summary: "How do I know if my booking is confirmed?",
        detail:
          "You will receive a confirmation email once your booking is confirmed. You can also check the status of your booking on your profile.",
      },
      {
        summary: "Can I book a service for someone else?",
        detail:
          "Yes, you can book a service for someone else by entering their information during the booking process.",
      },
      {
        summary: "What should I do if a service provider is late?",
        detail:
          "If a service provider is late, you can contact them directly through the messaging system on Zena or contact customer support for assistance.",
      },
    ],
    Payments: [
      {
        summary: "How do I pay for a service?",
        detail:
          "You can pay for a service through the Zena platform using a credit card or other accepted payment methods.",
      },
      {
        summary: "Is my payment information secure?",
        detail:
          "Yes, your payment information is secure and encrypted. Zena uses industry-standard security measures to protect your data.",
      },
      {
        summary: "Can I get a refund?",
        detail:
          "Refunds are handled on a case-by-case basis. Please contact customer support if you need a refund.",
      },
      {
        summary: "Are there any additional fees?",
        detail:
          "There are no additional fees for using Zena. However, service providers may charge their own fees for their services.",
      },
      {
        summary: "How do I view my payment history?",
        detail:
          'You can view your payment history by going to your profile and clicking on the "Payment History" tab.',
      },
      {
        summary: "Can I tip a service provider?",
        detail:
          "Yes, you can tip a service provider through the Zena platform after your booking is complete.",
      },
    ],
    Services: [
      {
        summary: "What types of services are available on Zena?",
        detail:
          "Zena offers a wide range of services, including home cleaning, tutoring, pet sitting, and more.",
      },
      {
        summary: "How do I find a specific service?",
        detail:
          "You can find a specific service by using the search bar on the homepage and entering the type of service you need.",
      },
      {
        summary: "Can I offer my own services on Zena?",
        detail:
          "Yes, you can offer your own services on Zena by registering as a service provider and creating a profile.",
      },
      {
        summary: "How do I update my service offerings?",
        detail:
          'You can update your service offerings by going to your profile and clicking on the "Edit Services" button.',
      },
      {
        summary: "Can I offer multiple services?",
        detail:
          "Yes, you can offer multiple services by adding them to your profile and specifying the details for each service.",
      },
      {
        summary: "How do I set my service rates?",
        detail:
          'You can set your service rates by going to your profile and clicking on the "Edit Services" button. Enter the rates for each service you offer.',
      },
    ],
  };

  const issueTypes = ["Service Delivery", "Payment", "Feedback", "Others"];

  const [selectedType, setSelectedType] = useState("");

  const socialHandles = [
    {
      handle: "Instagram",
      icon: "/icons/instagram.svg",
      url: "#",
    },
    {
      handle: "LinkedIn",
      icon: "/icons/linkedin.svg",
      url: "#",
    },
    {
      handle: "Facebook",
      icon: "/icons/facebook.svg",
      url: "#",
    },
  ];

  return (
    <div className="w-full flex items-center flex-col pb-[100px]">
      <div className="w-[90%] md:w-[80%] flex flex-col gap-[25px] lg:gap-[50px] items-center">
        <div className="w-[95%] flex flex-col gap-[40px]">
          <div className="flex flex-col items-center gap-[8px]">
            <p className="text-center text-[24px] text-primary font-bold">
              {"We're Here to Help"}
            </p>
            <p className="text-center text-[20px] text-primary">
              Get quick solutions to your questions.
            </p>
          </div>
          <div className="flex border-b items-center justify-between overflow-x-auto gap-[20px]">
            {tabs.map((tab, index) => (
              <div
                className={`cursor-pointer min-w-fit ${
                  activeTab == tab
                    ? "text-primary border-b-2 border-[#007B83]"
                    : ""
                }`}
                key={index}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full">
          {FAQs[activeTab]?.map((faq, index) => (
            <div
              key={index}
              className={`border-b  overflow-hidden py-[5px] ${
                expandedIndex === index
                  ? "border-[#007B83] bg-[#007B83] bg-opacity-10"
                  : "bg-white"
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <div
                className={`text-gray-700 px-4 py-[20px] cursor-pointer flex justify-between items-center ${
                  expandedIndex === index ? "border-b-2" : "bg-white"
                }`}
              >
                <h3 className="font-semibold text-[16px] w-[90%]">
                  {faq.summary}
                </h3>

                <FaChevronDown
                  size={20}
                  className={
                    expandedIndex === index
                      ? "text-primary rotate-180 w-[24px] h-[24px]"
                      : ""
                  }
                />
              </div>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  expandedIndex === index
                    ? "max-h-[500px] py-4 px-4"
                    : "max-h-0"
                }`}
                dangerouslySetInnerHTML={{ __html: faq.detail }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full border-y py-[34px] border-[#F1C40F] border-opacity-25 flex items-center justify-center my-[50px]">
        <div className="w-[90%] md:w-[80%] flex flex-col md:flex-row max-md:items-center items-center justify-between max-md:gap-[20px]">
          <div className="flex flex-col gap-[4px] md:gap-[16px]">
            <p className="text-primary text-[24px] lg:text-[32px] font-bold">
              Live Chat
            </p>
            <p>Chat with us now for instant support.</p>
          </div>
          <button className="bg-primary flex items-center gap-[10px] text-white h-[48px] rounded-[30px] px-[50px]">
            <Image
              src={"/home/whatsappicon.svg"}
              width={24}
              height={24}
              alt="message icon"
            />
            Chat Now
          </button>
        </div>
      </div>
      <div className="w-[90%] md:w-[83%] flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[70px]">
        <div className="flex flex-col w-full lg:w-[40%] gap-[18px] lg:gap-[30px]">
          <p className="text-primary text-[24px] lg:text-[32px] font-bold">
            Report an Issue
          </p>
          <p>{"Let us know about any problems you're facing."}</p>
        </div>
        <div className="flex grow">
          <div className="border flex flex-col gap-[30px] px-[20px] md:px-[30px] py-[20px] md:py-[25px] bg-[#C7C9D9] bg-opacity-60 rounded-[15px]">
            <div className="flex flex-col gap-[8px]">
              <p className="text-primary">Select Issue Type</p>
              <div className="flex gap-[16px] lg:gap-[30px] flex-wrap">
                {issueTypes.map((type, index) => (
                  <div
                    key={index}
                    className={`h-[48px] px-[16px] rounded-[4px] text-gray-600 border text-[14px] flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-[#007B83] hover:bg-opacity-20 ${
                      type == selectedType
                        ? "bg-[#007B83] bg-opacity-90 text-white "
                        : "bg-white"
                    }`}
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col gap-[8px]">
              <p className="text-primary">Phone Number</p>
              <input
                type="text"
                className="h-[48px] px-[16px] rounded-[4px] bg-white text-gray-600 border w-full  focus:text-black outline-Teal_blue-50"
              />
            </div>
            <div className="w-full flex flex-col gap-[8px]">
              <p className="text-primary">Description</p>
              <textarea
                name="description"
                id="description"
                rows="4"
                className="w-full border rounded-[4px] px-[16px] py-[8px] focus:text-black outline-Teal_blue-50"
              >

              </textarea>
            </div>
            <div className="w-full items-center justify-center flex">
              <button className="bg-primary h-[40px] px-[48px] rounded-[50px] font-bold text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex items-center gap-[30px] bg-gray-400 w-[90%] justify-center py-[10px] rounded-[30px] mt-[40px] lg:hidden">
        {socialHandles.map((handle, index) => (
          <Link
            href={handle.url}
            key={index}
            className="h-[36px] w-[36px] rounded-[100%] bg-white flex items-center justify-center"
          >
            <Image src={handle.icon} width={16} height={16} alt={"icon"} />
          </Link>
        ))}
      </div> */}
    </div>
  );
};

export default Support;
