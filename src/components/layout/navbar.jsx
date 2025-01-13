"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineLocalActivity, MdOutlineSupportAgent } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import Button from "../utils/Button";
import { NAV_LINKS } from "../constants";


const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-Teal_blue-50 flexBetween max-container padding-container  py-5 sm:hidden lg:flex">
        <Link href="/">
          <Image src="/logos/Zena Logo trnsptw 1.png" alt="logo" width={50} height={20} />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link, index) => (
            <li key={link.key}>
              <Link
                href={link.href}
                onClick={() => setActiveIndex(index)}
                className={`regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold ${
                  activeIndex === index
                    ? "bg-Teal_blue-30 rounded-[15px] px-3 py-1 font-bold"
                    : ""
                }`}
              >
                {link.lable}
              </Link>
            </li>
          ))}
        </ul>
        <div className="lg:flexCenter ">
                    <Button type="button" title="Become a Service Provider" variant="btn_yellow" />
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white z-30 shadow-lg sm:flex lg:hidden flex-col items-center">
        <ul className="flex justify-between items-center w-full px-4 py-3">
          {NAV_LINKS.map((link, index) => (
            <li key={link.key} className="flex-1 text-center">
              <Link
                href={link.href}
                onClick={() => setActiveIndex(index)}
                className={`regular-16 text-Teal_blue-50 flex flex-col items-center justify-center transition-all ${
                  activeIndex === index
                    ? "text-Teal_blue-50 font-bold"
                    : "text-gray-15"
                }`}
              >
                <span className="block w-6 h-6 mb-1">
                  {index === 0 && <FiHome size={24} />}
                  {index === 1 && <IoSearch size={24} />}
                  {index === 2 && <MdOutlineLocalActivity size={24} />}
                  {index === 3 && <MdOutlineSupportAgent size={24} />}
                  {index === 4 && <Image src="/home/chat_info.svg" alt="logo" width={24} height={24} />}
                </span>
                {link.lable}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
