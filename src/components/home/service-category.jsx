"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const ServiceCategories = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const serviceOptions = [
    { name: "Electrician", icon: "/home/electric_bolt.svg" },
    { name: "Event Photographer", icon: "/home/photo_camera.svg" },
    { name: "Makeup Artist", icon: "/explore/health_and_beauty.svg" },
    { name: "Personal Fitness Trainer", icon: "/home/exercise.svg" },
    { name: "Nail Technician", icon: "/explore/pan_tool.svg" },
    { name: "Nutritionist", icon: "/home/nutrition.svg" },
    { name: "Plumber", icon: "/home/plumbing.svg" },
    { name: "House Cleaner", icon: "/home/cleaning_services.svg" },
    { name: "Gardener", icon: "/home/yard.svg" },
    { name: "Carpenter", icon: "/home/carpenter.svg" },
    { name: "Fumigators", icon: "/home/pest_control (1).svg" },
    { name: "DJ for Events", icon: "/home/artist.svg" },
    { name: "Hair Stylist", icon: "/explore/health_and_beauty.svg" },
  ];

  const handleSelect = (option) => {
    setSearchInput(option.name);
    setShowDropdown(false);
  };
  const categories = [
    {
      name: "Beauty",
      branches: [
        "Makeup Artists",
        "Hair stylists",
        "Nail Tech",
        "Skincare Specialist",
      ],
      navigateTo: "Beauty",
      image: "/home/woman.svg",
    },
    {
      name: "Food & Baking",
      branches: [
        "Private Chefs",
        "Event Catering Services",
        "Bakers",
        "Cooking Instructors",
      ],
      navigateTo: "Food & Baking",
      image: "/home/chef cook.svg",
    },
    {
      name: "Home Services",
      branches: [
        "Cleaning Services",
        "Laundry & Ironing",
        "Gardening",
        "Fumigation",
      ],
      navigateTo: "Home Services",
      image: "/home/Home_servicess1-.svg",
    },
    {
      name: "Event Planning",
      branches: [
        "Photographer/Videographer",
        "DJ & Live Bands",
        "MC's and Event Hosts",
        "Event Planner",
      ],
      navigateTo: "Event Planning",
      image: "/home/Camera1.svg",
    },
    {
      name: "Health and Wellness",
      branches: [
        "Fitness Trainer",
        "Massage Therapy",
        "Nutritionist & Dietitians",
      ],
      navigateTo: "Health and Wellness",
      image: "/home/gym.svg",
    },
    {
      name: "Handyman Services",
      branches: ["Electrician", "Plumber", "Carpenter", "Painter"],
      navigateTo: "Handy Man",
      image: "/home/hometech.png",
    },
  ];

  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      category.branches.some((branch) =>
        branch.toLowerCase().includes(searchInput.toLowerCase())
      )
  );

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    setShowDropdown(e.target.value !== "");
  };

  return (
    <div
      className="bg-white w-full pt-[50px] pb-[50px] max-lg:pb-[100px]"
      id="categories"
    >
      <div className="flex flex-col items-center justify-center gap-[40px] lg:gap-[70px]">
        <div className="w-[90%] md:w-[60%] flex flex-col items-center justify-center gap-[27px]">
          <p className="text-primary text-[24px] font-bold">
            Service Categories
          </p>

          <div className="relative w-full h-[45px] rounded-[50px]">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onClick={() => setShowDropdown(true)}
              className="w-full h-full rounded-[50px] border pl-[20px] lg:pl-[60px] pr-[60px] focus:text-black outline-Teal_blue-50"
              placeholder="Find trusted services, e.g., hair styling or plumbing"
            />
            <button className="h-[80%] bg-primary text-white px-[40px] flex items-center justify-center absolute top-1/2 -translate-y-1/2 rounded-[50px] right-[8px] max-lg:hidden font-bold">
              Search
            </button>
            <button className="h-[35px] w-[35px] bg-white bg-opacity-55 font-bold text-primary flex items-center justify-center absolute top-1/2 -translate-y-1/2 rounded-[100%] right-[8px] lg:left-[8px]">
              <CiSearch size={26} />
            </button>

            {showDropdown && (
              <div className="absolute top-[110%] left-0 w-full bg-white border rounded-md shadow-md z-10 max-h-[200px] overflow-y-auto">
                {serviceOptions
                  .filter((option) =>
                    option.name
                      .toLowerCase()
                      .includes(searchInput.toLowerCase())
                  )
                  .map((option, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelect(option)}
                      className="px-4 py-2 flex items-center gap-3 hover:bg-gray-100 cursor-pointer"
                    >
                      <div className="relative flex items-center justify-center w-[40px] h-[40px] rounded-full bg-Teal_blue-5">
                        <div className="absolute inset-0 border-[3px] border-dotted border-yellow-400 rounded-full"></div>
                        <Image
                          src={option.icon}
                          alt={option.name}
                          width={20}
                          height={20}
                        />
                      </div>
                      <span>{option.name}</span>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-[95%] grid md:grid-cols-2 lg:grid-cols-3 gap-[21px]">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex justify-between rounded-[8px] overflow-clip shadow-xl bg-white border border-gray-100"
              >
                <div className="flex flex-col justify-between w-[50%] pt-[12px] pb-[24px] pl-[16px] gap-[16px]">
                  <div className="w-full flex flex-col gap-[8px]">
                    <p className="text-[20px] font-bold text-[#2D2D2D]">
                      {category.name}
                    </p>
                    <div className="w-full grow flex flex-col px-[12px] text-primary gap-[4px]">
                      {category.branches.map((branch, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-[12px] text-[14px] w-full"
                        >
                          <div className="w-[5%]">
                            <div className="w-[4px] h-[4px] rounded-[100%] bg-primary" />
                          </div>
                          <Link
                            href={{
                              pathname: `/explore`,
                              query: {
                                category: `${category.navigateTo}, ${branch}`,
                              },
                            }}
                          >
                            {branch}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Link
                      href={{
                        pathname: "/explore",
                        query: { category: category.navigateTo },
                      }}
                      className="bg-primary h-[40px] rounded-[50px] text-white px-[24px] flex items-center justify-center font-bold"
                    >
                      Find Services
                    </Link>
                  </div>
                </div>
                <Image
                  src={category.image}
                  width={200}
                  height={200}
                  style={{ width: "50%", height: "100%" }}
                  alt="category image"
                  className=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCategories;
