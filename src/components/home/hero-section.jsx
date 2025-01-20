"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";


const HeroSection = () => {

  const slideData = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five'
  ]

  const slides = [
    <div className="flex flex-col-reverse lg:flex-row items-center">
      <div className="flex flex-col gap-[60px]">
        <div className="px-[40px] flex flex-col gap-[35px]">
          <p className=" text-[26px] lg:text-[32px] font-bold text-[#264653] max-lg:text-center">100% Verified Providers - <br className="max-lg:hidden" />Book with Confidence!</p>
          <div className="flex items-center gap-[12px]">
            <div className="flex items-center gap-[12px]">
              <CiLocationOn size={20} className="text-Teal_blue-50" />
              <p className="text-primary font-bold">Lekki 1</p>
            </div>
            <FaChevronDown size={20} className="text-Teal_blue-50" />
          </div>
        </div>


        <div className="flex flex-col lg:flex-row items-center gap-[40px]">
          <Link href={"#categories"} className="bg-primary py-[13px] rounded-[36px] px-[26px] w-fit text-white">Explore Categories</Link>
          <Link href={'/explore'} className="border-primary text-primary py-[13px] rounded-[36px] px-[26px]">
            See Trusted Providers Near You
          </Link>
        </div>

      </div>
      
      <div className="w-full lg:w-1/2">
        <Image src={'/hero-svg.svg'} alt="hero image slide one" width={712} height={583} style={{ width: "auto", height: "auto" }} className="" priority />
      </div>
    </div>,
    <div className="text-[32px] text-center flex items-center justify-center w-full">Slide Two</div>,
    <div className="text-[32px] text-center flex items-center justify-center w-full">Slide Three</div>,
  ]

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeData, setActiveData] = useState(slideData[activeIndex])

  useEffect(() => {
    setActiveData(slideData[activeIndex])
  }, [activeIndex])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  //   }, 3000); // Change slide every 3 seconds
  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, []);



  return (
    <div className="min-h-screen lg:h-screen bg-white flex items-center justify-center text-black overflow-x-hidden">
      <div className="flex items-center justify-center relative w-full min-h-screen lg:h-full max-lg:py-[60px]">
        <Image src={'/icons/hero-arrow.svg'} width={24} height={12} style={{ width: "auto", height: "auto",     transform: "rotate(0deg)" 
}} alt="arrow right" className="absolute left-[34px] cursor-pointer" onClick={() => {
          if (activeIndex == 0) {
            setActiveIndex(slides.length - 1)
          } else {
            setActiveIndex(prev => prev - 1)
          }
        }} />
        <Image src={'/icons/hero-arrow.svg'} width={24} height={12} style={{ width: "auto", height: "auto",    transform: "rotate(-180deg)" 
 }} alt="arrow left" className="absolute rotate-180 right-[34px] cursor-pointer" onClick={() => {
          if (activeIndex == slides.length - 1) {
            setActiveIndex(0)
          } else {
            setActiveIndex(prev => prev + 1)
          }
        }} />
        <div className="absolute bottom-[24px] lg:bottom-[74px] flex gap-[8px] items-center">
          {
            slides.map((_, index) => (
              <div key={index} className={`cursor-pointer transition-all duration-300 ${index == activeIndex ? "w-[16px] h-[10px] bg-primary shadow-xl rounded-[10px]" : "w-[8px] h-[8px] rounded-[100%] bg-[#72757E]"}`} onClick={() => setActiveIndex(index)} />
            ))
          }
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
}

export default HeroSection;