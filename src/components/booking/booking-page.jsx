"use client";

import { useState } from "react";

const BookingSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Current Bookings", "Past Bookings"];

  return (
    <div className="flex justify-center lg:min-h-screen bg-">
      <div className="w-[90%] md:w-[80%] lg:w-[55%] flex flex-col gap-[30px] lg:gap-[50px]">
        <div className="flex justify-between border-b w-[80%] self-center">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`pb-[6px] cursor-pointer ${
                activeTab == index
                  ? "border-b-4 border-[#007B83] text-primary"
                  : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </div>
          ))}
        </div>
        {tabs[activeTab] == "Current Bookings" && (
          <div className="flex flex-col items-center gap-[25px]">
            <p className="text-center text-[20px] lg:text-[24px] font-bold text-primary">
              Current Bookings
            </p>
            <div className="flex flex-col gap-[48px]">
              <p className="text-center lg:text-[18px]">
                Enter your booking reference code to access the details of your
                current appointments.
              </p>
              <div className="flex flex-col gap-[60px]">
                <div className="flex flex-col gap-[8px]">
                  <p className="text-primary">Booking Reference Code</p>
                  <input
                    type="text"
                    className="border h-[49px] rounded-[4px] px-[20px] placeholder:text-[14px] placeholder:italic"
                    placeholder="Zena12345"
                  />
                </div>
                <div className="flex flex-col gap-[14px] items-start">
                  <button className="bg-primary w-full text-white h-[48px] lg:h-[50px] rounded-[36px]">
                    View Booking
                  </button>
                  <button className="text-[#0179B4] underline max-lg:text-[14px]">
                    Resend SMS with Reference Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* past bookings */}
        {tabs[activeTab] == "Past Bookings" && (
          <div className="flex flex-col items-center gap-[25px]">
            <p className="text-center text-[20px] lg:text-[24px] font-bold text-primary">
              Past Bookings
            </p>
            <div className="flex flex-col gap-[48px]">
              <p className="text-center lg:text-[18px]">
                Enter your phone number to access all your appointments linked
                to it.
              </p>
              <div className="flex flex-col gap-[60px]">
                <div className="flex flex-col gap-[8px]">
                  <p className="text-primary">Phone Number</p>
                  <input
                    type="text"
                    className="border h-[49px] rounded-[4px] px-[20px] placeholder:text-[14px] placeholder:italic"
                    placeholder="e.g. +234(992 334 343 0)"
                  />
                </div>
                <div className="flex flex-col gap-[14px] items-start">
                  <button className="bg-primary w-full text-white h-[48px] lg:h-[50px] rounded-[36px]">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingSection;
