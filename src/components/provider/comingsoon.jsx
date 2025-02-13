import { useState, useEffect } from "react";
import Head from "next/head";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function ComingSoon() {
  // 1. Calculate Time
  const calculateTimeLeft = () => {
    // Adjust the target date (YYYY-MM-DD format recommended)
    const targetDate = new Date("2025-04-31T00:00:00");
    const difference = targetDate - new Date();

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  // 2. State & Timer
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : String(time);
  };

  const TimeBox = ({ value, label }) => {
    const digits = formatTime(value).split(""); // e.g. "05" => ["0","5"]

    return (
      <div className="flex flex-col items-center bg-[#F5FCFF] text-[#2E463D] p-2 rounded-md">
        {/* Digits Row */}
        <div className="flex space-x-2">
          {digits.map((digit, idx) => (
            <div
              key={idx}
              className="bg-[#2A9D8F4A] w-10 h-12 flex items-center justify-center text-2xl font-bold rounded-md"
            >
              {digit}
            </div>
          ))}
        </div>

        {/* Label */}
        <span className="text-sm font-medium mt-2">{label}</span>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Zena - Coming Soon</title>
        <meta name="description" content="Zena Coming Soon" />
      </Head>

      <div className="flex flex-col items-center justify-center bg-white py-6 px-4">
        {/* Logo + Title */}
        <div className="flex flex-col md:flex-row items-center justify-center">
          <img
            src="/logos/Zena Logo trnsptw 2.png"
            alt="Zena Logo"
            className="w-[80px] h-[100px] md:w-[120px] md:h-[150px] mb-2"
          />
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 md:-mb-[16px]">
            Zena
          </h1>
        </div>

        <h2 className="text-xl md:text-3xl font-bold text-gray-700 mb-6">
          COMING SOON
        </h2>

        {/* Countdown Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <TimeBox value={timeLeft.days || 0} label="DAYS" />
          <TimeBox value={timeLeft.hours || 0} label="HOURS" />
          <TimeBox value={timeLeft.minutes || 0} label="MINUTES" />
          <TimeBox value={timeLeft.seconds || 0} label="SECONDS" />
        </div>

        {/* Description */}
        <div className="max-w-[1100px] text-center text-gray-600 font-medium space-y-4 px-2">
          <p>
            Your go-to platform for trusted and verified service providers in
            Lagos Nigeria! Whether you need skilled artisans, beauty
            professionals, private chefs, service experts, event planners, or
            wellness pros— <span className="text-[#007B83]">Zena</span> is
            making the right provider available at your fingertips.
          </p>
          <p>
            Get ready for a seamless, reliable, and convenient service
            experience—launching soon!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-12">
          <button className="bg-[#007B83] font-semibold text-white px-8 md:px-24 py-3 md:py-4 rounded-full hover:bg-[#00676F] transition-colors">
            Signup As a Service Provider
          </button>
          <button className="bg-[#FFC107] font-semibold text-[#007B83] px-6 md:px-14 py-3 md:py-4 rounded-full hover:bg-[#E0A800] transition-colors">
            Yay! Notify Me to Book Services on Zena!
          </button>
        </div>

        {/* Footer */}
        <div className="absolute bottom-5 flex flex-col items-center w-full md:mt-10">
          <p className="text-[#007B83] mt-5">Powered by Casatech Nigeria Ltd</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-[#007B83] hover:text-[#00676F] text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-[#007B83] hover:text-[#00676F] text-xl">
              <FaLinkedin />
            </a>
            <a href="#" className="text-[#007B83] hover:text-[#00676F] text-xl">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
