"use client"

import { useRef, useState } from "react";
import { FaCalendar, FaClock } from "react-icons/fa6";
import Image from "next/image";
import { PiCalendar, PiClock } from "react-icons/pi";

const PreferredTimeField = ({selectedTime, setSelectedTime, selectedDate, setSelectedDate}) => {

  

  const dateRef = useRef();
  const timeRef = useRef();

  const handleDateClicked = () => {
    dateRef.current.showPicker();
  }

  const handleTimeClicked = () => {
    timeRef.current.showPicker();
  }

  const formatTimeTo12Hour = (time) => {
    if(!time) return "";

    const [hours, minutes] = time.split(":").map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;

    return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${period}`;
  }


  return (
    <div className='mt-[4px] flex flex-col gap-[6px]'>
      <p className='font-bold text-[18px]'>Preferred Date & Time</p>
      <div>
        <div className='grid md:grid-cols-2 gap-[20px]'>
          <div className='h-[50px] bg-[#f4f4f4] text-black rounded-[10px] flex items-center px-[16px] gap-[12px]'
            onClick={handleDateClicked}
          >
            <div className='flex items-center gap-[12px] text-[15px]'>
              <PiCalendar size={18} />
              <p>Date</p>
            </div>
            <div className='flex grow relative'>
              <input type="date" name="date" id="date" ref={dateRef} onChange={(e) => {
                const dateSelected = new Date(e.target.value);
                const formatter = new Intl.DateTimeFormat('en-GB', {
                  weekday: "long",
                  day: "numeric",
                  month: "short",
                  year: "numeric"
                });

                const formatted = formatter.format(dateSelected).replace(/\s(\d{4})$/, ", $1");
                setSelectedDate(formatted);
              }} className='invisible' />
              <p className='absolute text-[12px] top-1/2 -translate-y-1/2 '>{selectedDate}</p>
            </div>
          </div>
          <div className='h-[50px] bg-[#f4f4f4] text-black rounded-[10px] flex items-center px-[16px] gap-[12px]'
            onClick={handleTimeClicked}
          >
            <div className='flex items-center gap-[12px] text-[15px]'>
              <PiClock size={18} />
              <p>Time</p>
            </div>
            <div className='flex grow relative'>
              <input type="time" name="date" id="date" ref={timeRef} onChange={(e) => {
                const timeValue = e.target.value;

                const formatted = formatTimeTo12Hour(timeValue);
                console.log('Formatted time', formatted);
                setSelectedTime(formatted);
              }} className='invisible' />
              <p className='absolute text-[12px] top-1/2 -translate-y-1/2 '>{selectedTime}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[6px] mt-[6px]">
          <Image src={'/icons/info.svg'} width={20} height={20} alt={'icon'} />
          <p className='text-[12px]'>Please check the providers availability before selecting your date and time</p>
        </div>
      </div>
    </div>
  );
}

export default PreferredTimeField;