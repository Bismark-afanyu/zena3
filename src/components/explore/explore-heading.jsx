"use client";

import { IoSearch } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";

const ExploreCategory = () => {
  const exploreTypes = ["Category", "Location", "Ratings", "Delivery Type"];
  const [amount, setAmount] = useState(500); // Initial value for the slider
  const sliderRef = useRef(null);
  const cardRef = useRef(null);
  const isDragging = useRef(false); // To handle dragging state

  // Update the card position whenever the slider value changes
  useEffect(() => {
    if (!sliderRef.current || !cardRef.current) return;

    const slider = sliderRef.current;
    const card = cardRef.current;

    const sliderWidth = slider.offsetWidth;
    const cardWidth = card.offsetWidth;

    // Calculate the card's position based on the slider value
    const cardPosition = (amount / 1000) * (sliderWidth - cardWidth);

    // Update the position of the card
    card.style.left = `${cardPosition}px`;
  }, [amount]);

  // Handle slider change
  const handleSliderChange = (e) => {
    setAmount(e.target.value);
  };

  // Handle card dragging
  const handleMouseDown = (e) => {
    isDragging.current = true;
    const initialX = e.clientX;
    const initialCardLeft = cardRef.current.getBoundingClientRect().left;

    const onMouseMove = (moveEvent) => {
      if (!isDragging.current) return;

      const deltaX = moveEvent.clientX - initialX;
      const newCardPosition = Math.min(
        Math.max(initialCardLeft + deltaX, 0),
        sliderRef.current.offsetWidth - cardRef.current.offsetWidth
      );

      const newAmount =
        (newCardPosition /
          (sliderRef.current.offsetWidth - cardRef.current.offsetWidth)) *
        1000;
      setAmount(newAmount);
    };

    const onMouseUp = () => {
      isDragging.current = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <section className="explore-category-section bg-white flex w-full p-4 flex-col items-start gap-6">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-teal_light-50 text-center text-2xl font-bold leading-tight pt-16 pb-10">
              Your Bookings - Simplified
            </h2>
          </div>
        </div>

        {/* Search Section */}
        <div className="relative w-full h-[45px] rounded-[50px]">
          <input
            type="text"
            className="w-full h-full rounded-[50px] border pl-[20px] lg:pl-[60px] pr-[60px] focus:text-black outline-Teal_blue-50"
            placeholder="Find trusted services, e.g., hair styling or plumbing"
          />
          <button className="h-[80%] bg-primary text-white px-[40px] flex items-center justify-center absolute top-1/2 -translate-y-1/2 rounded-[50px] right-[8px] max-lg:hidden font-bold">
            Search
          </button>
          <button className="h-[35px] w-[35px] bg-white bg-opacity-55 font-bold text-primary flex items-center justify-center absolute top-1/2 -translate-y-1/2 rounded-[100%] right-[8px] lg:left-[8px]">
            <CiSearch size={26} />
          </button>
        </div>

        <div className="col-12 mt-6 pt-10 lg:flex justify-start md:justify-start  ">
          <div className="flex gap-10 ">
            {exploreTypes.map((type, index) => (
              <button
                key={index}
                className="w-40 px-4 py-2 bg-teal_light-10 border border-Teal_blue-50 rounded-full shadow-sm hover:shadow-md hover:bg-teal_light-10 transition-all duration-300 text-gray-700 font-medium text-left flex items-center justify-between"
              >
                {type}
                <MdOutlineArrowDropDown
                  size={24}
                  className="text-Teal_blue-50"
                />
              </button>
            ))}
          </div>

          <div className="relative flex items-center gap-4 ml-8 w-full">
            <div
              ref={cardRef}
              className="absolute top-[-35px] left-0 transform w-20 h-10 bg-Teal_blue-50 rounded-full flex items-center justify-center text-white font-bold cursor-pointer"
              onMouseDown={handleMouseDown}
            >
              N{Math.round(amount)}K
            </div>

            <input
              ref={sliderRef}
              id="amount-slider"
              type="range"
              min="0"
              max="900"
              value={amount}
              onChange={handleSliderChange}
              className="w-64 h-2 bg-Teal_blue-50 rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCategory;
