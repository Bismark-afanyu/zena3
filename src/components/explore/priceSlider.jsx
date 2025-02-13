"use client";

import { useState, useRef, useEffect } from "react";

const PriceSlider = () => {
  const [amount, setAmount] = useState(10000);
  const sliderRef = useRef(null);
  const tooltipRef = useRef(null);

  const handleSliderChange = (e) => {
    setAmount(Number(e.target.value));
  };

  useEffect(() => {
    const slider = sliderRef.current;
    const tooltip = tooltipRef.current;

    if (slider && tooltip) {
      const sliderWidth = slider.offsetWidth;
      const thumbWidth = 20; // Approximate width of the thumb
      const max = slider.max;
      const min = slider.min;
      const value = amount;

      const left =
        ((value - min) / (max - min)) * (sliderWidth - thumbWidth) +
        thumbWidth / 2;
      tooltip.style.left = `${left}px`;
    }
  }, [amount]);

  return (
    <div className="relative w-[25%]">
      <div
        ref={tooltipRef}
        className="absolute top-[-4px] -translate-y-full transform -translate-x-1/2 bg-primary text-white px-23px]  text-sm min-w-[30%] text-center rounded-[32px]"
      >
        <div className="py-[10px] relative">
          <div className="h-[12px] w-[12px] bg-primary absolute left-1/2 -translate-x-1/2 bottom-0 rotate-45 translate-y-1/2" />
          {amount >= 1000000 ? "N 1M+" : `N ${Math.round(amount / 1000)}k`}
        </div>
      </div>

      <input
        ref={sliderRef}
        id="amount-slider"
        type="range"
        min="10000"
        max="1000000"
        step="1000"
        value={amount}
        onChange={handleSliderChange}
        className="w-full h-2 bg-teal-500 rounded-full cursor-pointer"
      />
    </div>
  );
};

export default PriceSlider;
