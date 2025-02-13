"use client";

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { FaCalendar, FaClock } from 'react-icons/fa6';
import PreferredTimeField from './preferred-time-field';

const FixedBookingForm = ({selectedOption}) => {


  // console.log('This is the selected option', selectedOption)

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [pricing, setPricing] = useState({serviceFee: 500, baseFare: 0, totalCost: 0})

  const increment = () => {
    setQuantity(prev => prev + 1);
  }
  const decrement = () => {
    if(quantity == 1) return setQuantity(1);
    setQuantity(prev => prev - 1);
  }

  const calcTotalCost = () => {
    let baseFare = selectedOption?.fixedPrice ?? 0;
    let serviceFee = 500;
    let totalCost = (baseFare * quantity) + serviceFee;

    console.log({serviceFee: serviceFee, baseFare: baseFare, totalCost: totalCost})

    setPricing({serviceFee: serviceFee, baseFare: baseFare, totalCost: totalCost})
  }

  useEffect(() => {
    calcTotalCost();
  }, [selectedOption, quantity])


  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col w-full md:w-[80%] lg:w-[55%] gap-[30px]'>
        <div className='flex flex-col items-start md:items-center justify-center'>
          <p className='text-primary text-[22px] lg:text-[24px] font-bold'>Complete Your Booking</p>
          <p className='text-[18px] lg:text-[20px] font-light'>{"You're just a few steps away from securing your service"}</p>
        </div>

        <div>
          <div className='flex justify-between p-[11px] text-primary bg-[#3d348b] bg-opacity-25'>
            <div>
              <p className='font-light'>Service Name</p>
              <p className='font-bold'>Top Makeup Artist</p>
            </div>
            <div>
              <p className='font-light'>Service Provider</p>
              <p className='blur-sm'>Service Provider</p>
            </div>
          </div>
          <div className='flex flex-col gap-[10px] mt-[10px]'>
            <div className='grid md:grid-cols-2 gap-[20px]'>
              <div className='flex flex-col gap-[4px]'>
                <label htmlFor="name">Name</label>
                <input className='bg-[#f4f4f4] rounded-[10px] h-[50px] px-[20px] placeholder:text-[14px]' type="text" placeholder='Enter your name' />
              </div>
              <div className='flex flex-col gap-[4px]'>
                <label htmlFor="name">Phone Number</label>
                <input className='bg-[#f4f4f4] rounded-[10px] h-[50px] px-[20px] placeholder:text-[14px]' type="text" placeholder='Enter your phone number' />
              </div>
            </div>
            <div className='mt-[4px] flex flex-col gap-[4px]'>
              <p className='text-primary font-bold text-[20px]'>Service Details</p>
              <div className='flex flex-col lg:flex-row max-lg:gap-[20px] justify-between'>
                <div className='flex flex-col gap-[10px] lg:gap-[18px]'>
                  <div>
                    <p className='font-normal text-primary'>Selected Service</p>
                    <p className='text-[18px]'>Bridal Makeup</p>
                  </div>
                  <div className='flex flex-col gap-[6px]'>
                    <p className='font-bold text-[18px]'>How many do you need?</p>
                    <div className='flex items-center gap-[20px]'>
                      <button className='h-[40px] w-[40px] rounded-[10px] bg-[#3d348b] bg-opacity-25' onClick={decrement}>-</button>
                      <p>{quantity}</p>
                      <button className='h-[40px] w-[40px] rounded-[10px] bg-[#3d348b] bg-opacity-25' onClick={increment}>+</button>
                    </div>
                  </div>
                </div>
                <div className="bg-primary w-full lg:w-auto rounded-[10px] px-[14px] py-[12px] text-white text-[14px] h-fit">
                  <div className="border border-dashed border-white px-[18px] py-[15px] rounded-[10px]">
                    <div className="">
                      <div className="border-b border-white pb-[8px] mb-[8px] flex justify-between">
                        <div>
                          <p>
                            {/* Seats */}
                            {'Qty'}
                          </p>
                          <p className="font-medium">{quantity}</p>
                        </div>
                        <div>
                          <p>
                            {/* Total Cost */}
                            {'Total Cost'}
                          </p>
                          <p className="font-medium text-[#007bff] text-lg">
                            {pricing?.totalCost ?? 0} XAF
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between gap-[40px]">
                      <div>
                        <p>
                          {/* Base fare */}
                          {'Base fare'}
                        </p>
                        <p className="font-medium">{pricing?.baseFare ?? 0} XAF</p>
                      </div>
                      <div>
                        <p>
                          {/* Service fee */}
                          {'Service fee'}
                        </p>
                        <p className="font-medium">{pricing?.serviceFee ?? 0} XAF</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* preferred time */}
            <PreferredTimeField 
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
            />
            <div className='mt-[10px] flex flex-col gap-[16px]'>
              <p className='font-bold text-[18px]'>Service Location</p>
              <div>
                <div className='flex flex-col max-lg:gap-[10px] lg:flex-row items-start lg:items-center justify-between text-[15px]'>
                  <div className='text-black flex items-center gap-[16px]'>
                    <input type="radio" name="loc" id="loc" />
                    <p>At My Location (Additional fees may apply)</p>
                  </div>
                  <div className='text-black flex items-center gap-[16px]'>
                    <input type="radio" name="loc" id="loc" />
                    <p>{"At Provider's Shop"}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-[25px] flex flex-col gap-[4px]'>
              <p className='text-primary font-bold'>Additional Notes (Optional)</p>
              <textarea name="notes" id="notes" rows="5" className='border w-full placeholder:text-center placeholder:text-[14px] flex items-center justify-center h-full bg-[#f4f4f4] rounded-[10px] px-[20px] py-[16px]' placeholder='Add any special requirements to help the provider prepare better.'></textarea>
            </div>
            <button className='bg-primary text-white h-[50px] rounded-[10px] mt-[16px]'>Proceed to Booking Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FixedBookingForm;