"use client";

import { IoSearch } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useState, useRef, useEffect } from "react";

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
            <h2 className="text-teal_light-50 text-center text-2xl font-bold leading-tight pt-16">
              Your Bookings - Simplified
            </h2>
          </div>
        </div>

        {/* Search Section */}
        <div className="col-12 text-center mt-9">
          <div className="relative w-full max-w-2xl mx-auto">
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

        {/* Filter Section */}
        <div className="col-12 mt-6 pt-10 flex">
          <div className="flex gap-10">
            {exploreTypes.map((type, index) => (
              <button
                key={index}
                className="w-40 px-4 py-2 bg-teal_light-10  rounded-full shadow-sm hover:shadow-md hover:bg-teal_light-10 transition-all duration-300 text-gray-700 font-medium text-left flex items-center justify-between"
              >
                {type}
                <MdOutlineArrowDropDown
                  size={24}
                  className="text-Teal_blue-50"
                />
              </button>
            ))}
          </div>

          {/* Slider and Amount Display */}
          <div className="relative flex items-center gap-4 ml-4 w-full">
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
              max="1000"
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
