"use client";
import React from "react";
import { IoSearch } from "react-icons/io5";
import Card from "../utils/card";
import { IoIosArrowRoundForward } from "react-icons/io";

const ServiceCategory = () => {
  // Example category data
  const categories = [
    {
      title: "Beauty",
      categories: [
        "Makeup Artists",
        "Hair stylists",
        "Nail Tech",
        "Skincare Specialist",
      ],
      buttonLabel: "Find Services",
      imageSrc: "/home/woman.svg",
      ImageSize: { width: "100%", height: "auto" },
    },
    {
      title: "Food & Baking",
      categories: [
        "Private Chefs",
        "Event Catering Services",
        "Bakers",
        "Cooking Instructors",
      ],
      buttonLabel: "Find Services",
      imageSrc: "/home/chef cook.svg",
      ImageSize: { width: "100%", height: "auto" },
    },
    {
      title: "Home Services",
      categories: [
        "Cleaning Services",
        "Laundry & Ironing",
        "Gardening",
        "Fumigation",
      ],
      buttonLabel: "Find Services",
      imageSrc: "/home/Home_servicess1-.svg",
      ImageSize: { width: "100%", height: "auto" },
    },
    {
      title: "Event Planning",
      categories: [
        "Photographer/Videographer",
        "DJ & Live Bands",
        "Mc’s and Event Hosts",
        "Event Planner",
      ],
      buttonLabel: "Find Services",
      imageSrc: "/home/Camera1.svg",
      ImageSize: { width: "100%", height: "auto" },
    },
    {
      title: "Health and Wellness",
      categories: [
        "Fitness Trainer",
        "Massage Therapy",
        "Nutritionist & Dietitians",
      ],
      buttonLabel: "Find Services",
      imageSrc: "/home/gym.svg",
      ImageSize: { width: "100%", height: "auto" },
    },
    {
      title: "Handyman Services",
      categories: ["Electrician", "Plumber", "Carpenter", "Painter"],
      buttonLabel: "Find Services",
      imageSrc: "/home/hometech.png",
      ImageSize: { width: "100%", height: "auto" },
    },
  ];

  return (
    <section className="service-category-section bg-white flex w-full p-4 flex-col items-start gap-6">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-Teal_blue-50 text-center text-2xl font-bold leading-tight pt-20">
              Service Categories
            </h2>
          </div>
        </div>

        {/* Search Section */}
        <div className="col-12 text-center mt-9">
          <div className="relative w-full max-w-4xl mx-auto">
            <input
              type="text"
              className="w-full border border-Teal_blue-50 rounded-full py-3 px-6 pl-14 text-sm shadow-lg text-gray-700 focus:outline-none focus:border-Teal_blue-50 focus:ring-1 focus:ring-Teal_blue-50 transition-all duration-300"
              placeholder="Find trusted services, e.g., hair styling or plumbing"
            />
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <IoSearch size={24} className="text-gray-400" />
            </div>
            <button className="absolute inset-y-1.5 right-1.5 px-12 py-2 bg-Teal_blue-50 font-bold text-sm text-white rounded-full transition-all duration-300 flex items-center justify-center">
              Search
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {categories.map((category, index) => (
            <Card
              key={index}
              title={category.title}
              categories={category.categories}
              buttonLabel={category.buttonLabel}
              imageSrc={category.imageSrc}
              imageSize={{ width: category.ImageSize }}
              onButtonClick={() => alert(`Clicked on ${category.title}`)}
            />
          ))}
        </div>
        
        <div className="flex items-end justify-end ">
  <h1 className="text-end text-Teal_blue-50 pt-5 text-lg">
    Explore Full View
  </h1>
  <IoIosArrowRoundForward className="ml-2 mt-6 text-Teal_blue-50" size={24} />
</div>

      </div>
    </section>
  );
};

export default ServiceCategory;
