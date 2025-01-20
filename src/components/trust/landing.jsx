

import Image from "next/image";
import Link from "next/link";

const TrustHeroSection = () => {
  return (
    <div className="w-full flex items-center justify-center border" style={{ background: 'linear-gradient(90deg, rgba(0, 123, 131, 0.5) 0%, rgba(235, 245, 245, 0.5923) 82.3%, rgba(255, 255, 255, 0.6) 100%)' }}>
      <div className="w-full flex flex-col-reverse lg:flex-row">
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="flex flex-col gap-[40px] lg:gap-[70px] text-white justify-center items-start w-[90%] lg:w-[75%] py-[20px]">
        <div className="flex flex-col gap-[20px] lg:gap-[40px]">
          <p className="text-[28px] font-bold lg:text-[32px] text-primary">Your Safety, Our Commitment.</p>
          <p>Explore how ZENA ensures a reliable, secure, and transparent experience for every user.</p>
        </div>
        <Link href={'/explore'} className="bg-primary text-white rounded-[50px] flex items-center justify-center h-[40px] px-[15px] font-semibold "
        // onClick={(e) => {
        //   e.stopPropagation();
        //   setShowBookingModal(true)
        // }}
        >Explore Verified Services</Link>
        </div>
      </div>
      <div className="">
        <Image src={'/trust/top image.svg'} width={800} height={400} style={{ width: "auto", height: "auto" }} alt="happy customer image" />
      </div>
      </div>
    </div>
    );
}

export default TrustHeroSection;