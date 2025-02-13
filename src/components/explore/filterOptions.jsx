"use client";
import { useState, useRef, useEffect } from "react";
import { MdArrowDropDown } from "react-icons/md";
import PriceSlider from "./priceSlider";

const CustomDropdown = ({
  children,
  dropdownMobilePlacement = "below",
  moreStyles,
  selected,
  placeholder,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="px-[16px] h-[36px] border rounded-[50px] flex items-center justify-center cursor-pointer relative bg-[#007B83] bg-opacity-20"
      ref={dropdownRef}
      onClick={handleToggleDropdown}
    >
      <div className="flex items-center text-[14px] gap-[4px]">
        <p>{selected == "" ? placeholder : selected}</p>
        <MdArrowDropDown
          size={20}
          className={`text-primary transition-all duration-300 ${
            showDropdown ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* drop menu */}

      <div
        className={`bg-gray-600 text-[14px] shadow-2xl z-[100] absolute left-0 right-0 min-h-[20px] ${
          dropdownMobilePlacement == "below"
            ? "bottom-[-5px] translate-y-full "
            : dropdownMobilePlacement == "above"
            ? "max-lg:top-[-5px] max-lg:-translate-y-full lg:bottom-[-5px] lg:translate-y-full"
            : ""
        } overflow-y-auto  py-[5px] rounded-[8px] transition-all duration-300 ease-in-out ${
          showDropdown ? "opacity-100 max-h-[200px]" : "opacity-0 max-h-0"
        } ${moreStyles}`}
      >
        {children}
      </div>
    </div>
  );
};

const FilterOptions = ({ categories, setActiveCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedDeliveryType, setSelectedDeliveryType] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [amount, setAmount] = useState(500);
  const dropdownRef = useRef(null);
  const sliderRef = useRef(null);
  const cardRef = useRef(null);
  const isDragging = useRef(false);

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
    <div className="w-full flex items-center justify-center">
      <div className="w-[90%] flex gap-[16px] lg:gap-[30px] flex-wrap items-center justify-center">
        <CustomDropdown
          moreStyles={`w-[140%]`}
          placeholder={"Category"}
          selected={selectedCategory}
        >
          <div className="text-black flex flex-col divide-y divide-gray-50">
            {categories.map((category, index) => (
              <div
                className="px-[16px] py-[4px] hover:bg-[#007B83] hover:bg-opacity-20"
                key={index}
                onClick={() => {
                  setActiveCategory(category.name);
                  setSelectedCategory(category.name);
                }}
              >
                {category.name}
              </div>
            ))}
          </div>
        </CustomDropdown>
        <CustomDropdown
          placeholder={"Location"}
          selected={selectedLocation}
        ></CustomDropdown>
        <CustomDropdown
          placeholder={"Ratings"}
          selected={selectedRating}
        ></CustomDropdown>
        <CustomDropdown
          placeholder={"Delivery Type"}
          selected={selectedDeliveryType}
        ></CustomDropdown>

        {/* <div className="relative">
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
        </div> */}
        <PriceSlider />
      </div>
    </div>
  );
};

export default FilterOptions;
