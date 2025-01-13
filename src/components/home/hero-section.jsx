"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "../utils/Button";

const HeroSection = () => {
  const slideData = ["One", "Two", "Three", "Four", "Five"];

  const slides = [
    <div className="flex flex-col md:flex-row items-center">
      <div className="flex flex-col gap-[60px] w-full md:w-auto">
        <div className="px-[20px] md:px-[40px]">
        <div>location data</div>
          <p className="text-base md:text-lg font-bold lg:text-xl xl:text-2xl text-[32px] text-[#264653]">
            100% Verified Providers-
            <span className="hidden md:inline">
              <br />
            </span>
            Book with Confidence!
          </p>
        </div>
        <div className="lg:flex items-center gap-[40px] sm:">
          <Button type="button" title="Explore Categories" variant="btn_teal" />
          <Button
            type="button"
            title="See Trusted Providers Near You"
            variant="btn_teal_border"
          />
        </div>
      </div>
      <div className=" md:w-1/2 w-full h-auto object-cover">
        <Image
          src={"/hero-svg.svg"}
          alt="hero image slide one"
          width={712}
          height={583}
          style={{ width: "auto", height: "auto" }}
          className=""
          priority
        />
      </div>
    </div>,
    <div className="text-[32px] text-center flex items-center justify-center w-full">
      Slide Two
    </div>,
    <div className="text-[32px] text-center flex items-center justify-center w-full">
      Slide Three
    </div>,
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeData, setActiveData] = useState(slideData[activeIndex]);

  useEffect(() => {
    setActiveData(slideData[activeIndex]);
  }, [activeIndex]);
  return (
    <div className="h-screen bg-white flex items-center justify-center text-black overflow-x-hidden">
      <div className="flex items-center justify-center relative w-full h-full">
        <Image
          src={"/icons/hero-arrow.svg"}
          width={24}
          height={12}
          style={{ width: "auto", height: "auto" }}
          alt="arrow left"
          className="absolute left-[34px] cursor-pointer"
          onClick={() => {
            if (activeIndex == 0) {
              setActiveIndex(slides.length - 1);
            } else {
              setActiveIndex((prev) => prev - 1);
            }
          }}
        />
        <Image
          src={"/icons/hero-arrow.svg"}
          width={24}
          height={12}
          style={{ width: "auto", height: "auto" }}
          alt="arrow right"
          className="absolute rotate-180 right-[34px] cursor-pointer"
          onClick={() => {
            if (activeIndex == slides.length - 1) {
              setActiveIndex(0);
            } else {
              setActiveIndex((prev) => prev + 1);
            }
          }}
        />
        <div className="absolute bottom-[74px] flex gap-[8px] items-center">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`cursor-pointer transition-all duration-300 ${
                index == activeIndex
                  ? "w-[16px] h-[10px] bg-primary shadow-xl rounded-[10px]"
                  : "w-[8px] h-[8px] rounded-[100%] bg-[#72757E]"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex} // Key helps AnimatePresence to track changes
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="w-[85%] flex mt-[40px] items-center justify-center"
          >
            {/* <div>

          </div> */}
            {slides[activeIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroSection;
