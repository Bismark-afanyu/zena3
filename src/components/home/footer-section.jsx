"use client";

import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-Teal_blue-50 text-white py-12 hidden md:block ">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Right Part - Logo and Social Media */}
          <div className="lg:w-1/4 flex flex-col items-start">
            <img
              src="/logos/Zena Logo trnsptw 1.png"
              alt="Logo"
              className="w-1/4 h-auto mb-4 pl-10"
            />
            <p className="text-xs text-white pb-10 font-bold">
              A platform that connects people looking for freelancer services in
              Nigeria like beauty services, IT repair, Fitness trainers and more
            </p>
            <div className="flex mt-4 gap-4">
              <a
                href="#"
                className="text-black hover:text-gray-700 bg-white rounded-full p-2"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-700 bg-white rounded-full p-2"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-700 bg-white rounded-full p-2"
                aria-label="Facebook"
              >
                <FaFacebook size={16} />
              </a>
            </div>
          </div>
          <div className="lg:w-1/4">
            <h4 className="text-2xl font-bold mb-4">Menu</h4>
            <ul className="text-sm space-y-2 font-bold">
              <li>
                <a href="#" className="text-yellow-500 underline">
                  Verify Provider
                </a>
              </li>
              <li>
                <a href="#" className="text-yellow-500 underline">
                  Appointments
                </a>
              </li>
              <li>
                <a href="#" className="text-yellow-500 underline">
                  Booking
                </a>
              </li>
              <li>
                <a href="#" className="text-yellow-500 underline">
                  Trust
                </a>
              </li>
            </ul>
            <img
              src="/home/footer_Img.svg"
              alt="Footer Menu Image"
              className="w-full h-auto mt-6"
            />
          </div>
          <div className="lg:w-1/4">
            <h4 className="text-2xl font-bold mb-4">Secure & Trusted</h4>
            <img
              src="logos/footerlogo.svg"
              alt="Secure Logo"
              className="w-1/4 h-auto mb-4"
            />
            <p className="text-sm font-bold">+100,000 Service completed.</p>
          </div>
          <div className="lg:w-1/4">
            <h4 className="text-2xl font-bold mb-4">Contact</h4>
            <p className="text-sm font-bold mb-4 text-yellow-500">
              Phone:{" "}
              <span className="text-white text-sm font-bold pl-6">
                +123 456 789
              </span>
            </p>
            <p className="text-sm font-bold mb-2 text-yellow-500">
              Email:{" "}
              <span className="text-white text-sm font-bold pl-7">
                support@example.com
              </span>
            </p>
            <ul className="text-sm space-y-2 pl-5 lg:pl-20 pt-16 font-bold">
              <li>
                <a href="#" className="text-yellow-500 underline">
                  Quality Standards
                </a>
              </li>
              <li>
                <a href="#" className="text-yellow-500 underline">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-yellow-500 underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-yellow-500 underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Line */}
      <div className="border-t border-gray-300 mt-8"></div>
      {/* Copyright */}
      <div className="container mx-auto px-4 py-4 text-start text-xs text-white">
        &copy;2024 Caasitech Nigeria Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
