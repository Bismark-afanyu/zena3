"use client"
import Image from 'next/image';
import { FaPlus } from 'react-icons/fa6';
import { useState, useRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import PreferredTimeField from './preferred-time-field';

const RequestQuoteForm = () => {

  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage1(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {

        // console.log(selectedImage1, 'kjlkjlkjklj')
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImage2Change = (event) => {
    const file = event.target.files[0];
    setSelectedImage2(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {

        // console.log(selectedImage1, 'kjlkjlkjklj')
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImage3Change = (event) => {
    const file = event.target.files[0];
    setSelectedImage3(file);
    if (file) {
      console.log('This is the file', file);
      const reader = new FileReader();
      reader.onloadend = () => {

        // console.log(selectedImage1, 'kjlkjlkjklj')
      };
      reader.readAsDataURL(file);
    }
  };

  const inputRef = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();


  const handleImageClick = () => {
    inputRef.current.click();
  }
  const handleImage2Click = () => {
    inputRef2.current.click();
  }
  const handleImage3Click = () => {
    inputRef3.current.click();
  }

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');


  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col w-full md:w-[80%] lg:w-[55%] gap-[30px]'>
        <div className='flex flex-col items-start md:items-center justify-center'>
          <p className='text-primary text-[22px] lg:text-[24px] font-bold'>Fill the form below to get a quote</p>
          <p className='text-[18px] lg:text-[20px] font-light'>{"Final price will be confirmed after provider reviews your request"}</p>
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
          <div className='flex flex-col mt-[10px] gap-[10px]'>
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
            <div className='flex flex-col gap-[4px]'>
              <label htmlFor="name">Service Description</label>
              <textarea name="notes" id="notes" rows="2" className='border w-full placeholder:text-start placeholder:text-[14px] flex items-center justify-center h-full bg-[#f4f4f4] rounded-[10px] px-[20px] py-[16px]' placeholder='e.g Looking for Afro-fusion dinner for 10 guests'></textarea>
            </div>
            <div className='mt-[4px] flex flex-col gap-[4px]' >
              <p>Upload Sample Image(s)</p>
              <div className='grid grid-cols-3 gap-[20px] lg:gap-[50px]'>
                <div className='border-2 border-dashed borderd flex items-center justify-center h-[95px] lg:h-[120px] rounded-[10px] overflow-clip relative' onClick={handleImageClick}>
                  {selectedImage1 && <div className='bg-[#D9D9D9] text-black flex items-center justify-center h-[15px] w-[15px] rounded-[100%] absolute top-[6px] right-[8px] bg-opacity-80' onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage1(null);
                  }}>
                    <IoMdClose size={10} />
                  </div>}
                  {selectedImage1 ? <Image src={URL.createObjectURL(selectedImage1)} width={100} height={100} style={{ width: "100%", height: "100%" }} className='object-cover' alt='image' /> : <FaPlus size={50} />}
                  <input type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageChange} ref={inputRef} />
                </div>
                <div className='border-2 border-dashed borderd flex items-center justify-center h-[95px] lg:h-[120px] rounded-[10px] overflow-clip relative' onClick={handleImage2Click}>
                  {selectedImage2 && <div className='bg-[#D9D9D9] text-black flex items-center justify-center h-[15px] w-[15px] rounded-[100%] absolute top-[6px] right-[8px] bg-opacity-80' onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage2(null)
                  }}>
                    <IoMdClose size={10} />
                  </div>}
                  {selectedImage2 ? <Image src={URL.createObjectURL(selectedImage2)} width={100} height={100} style={{ width: "100%", height: "100%" }} className='object-cover' alt='image' /> : <FaPlus size={50} />}
                  <input type="file" accept="image/*" style={{ display: "none" }} onChange={handleImage2Change} ref={inputRef2} />
                </div>
                <div className='border-2 border-dashed borderd flex items-center justify-center h-[95px] lg:h-[120px] rounded-[10px] overflow-clip relative' onClick={handleImage3Click}>
                  {selectedImage3 && <div className='bg-[#D9D9D9] text-black flex items-center justify-center h-[15px] w-[15px] rounded-[100%] absolute top-[6px] right-[8px] bg-opacity-80' onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage3(null)
                  }}>
                    <IoMdClose size={10} />
                  </div>}
                  {selectedImage3 ? <Image src={URL.createObjectURL(selectedImage3)} width={100} height={100} style={{ width: "100%", height: "100%" }} className='object-cover' alt='image' /> : <FaPlus size={50} />}
                  <input type="file" accept="image/*" style={{ display: "none" }} onChange={handleImage3Change} ref={inputRef3} />
                </div>
              </div>
            </div>
            <PreferredTimeField
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
            />
            <div className='flex flex-col gap-[4px]'>
              <label htmlFor="name">Enter your suggested cost</label>
              <input className='bg-[#f4f4f4] rounded-[10px] h-[50px] px-[20px] placeholder:text-[14px]' type="text" placeholder='Enter amount' />
            </div>
            <div className='flex flex-col gap-[16px]'>
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

            <button className='bg-primary text-white h-[50px] rounded-[10px] mt-[16px]'>Proceed to Booking Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestQuoteForm;