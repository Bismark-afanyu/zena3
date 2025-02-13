"use client";

import Link from "next/link";
import Image from "next/image";
import ScheduleView from "@/components/explore/profile/schedule";
import { MdDiversity2 } from "react-icons/md";
import { useState, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import ReusableModal from "@/components/modal-template";
import FixedBookingForm from "@/components/modals/fixed-booking";
import RequestQuoteForm from "./modals/request-quote";
import { Rating } from "@mui/material";
import { GiAlliedStar } from "react-icons/gi";


const ProviderProfile = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showRequestQuoteModal, setShowRequestQuoteModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState({});

  const [profileData, setProfileData] = useState([]);
  const selectedProvider = localStorage.getItem("selectedProviderProfile");
  useEffect(() => {
    if (!selectedProvider) {
      return setProfileData([]);
    }

    setProfileData(JSON.parse(selectedProvider));

    console.log("This is the selected profile data", profileData);
  }, [selectedProvider]);

  console.log("out of the use effect", profileData);

  return (
    <div className="min-h-screen flex items-center justify-center py-[120px]">
      <div className="w-[90%] flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[28px]">
          <div className="flex flex-col max-lg:gap-[20px] md:flex-row items-start md:items-center justify-between">
            <Link href={"/explore"} className="flex items-center gap-[10px]">
              <FaChevronLeft size={24} className="text-primary" />
              <p className="text-primary text-[24px] font-bold text-pretty">
                {profileData && (profileData?.branchName || "").toUpperCase()}{" "}
                PROFILE
              </p>
            </Link>
            <Link
              href={"#"}
              className="underline text-primary text-[14px] flex font-bold items-center gap-[4px]"
            >
              {"ZENA’s's trust or refund policy"}
              <Image
                src={"/icons/hero-arrow.svg"}
                width={16}
                height={16}
                alt="icon"
                style={{ transform: "rotate(180deg)" }}
              />
            </Link>
            <div className="bg-white shadow-xl rounded-full  p-2 m-4">
              <div className="text-[20px] font-bold text-[#FF6F61] px-12">
                {profileData?.label ?? ""}
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-[] rounded-[30px] py-[8px] gap-[8px] shadow-2xl">
            <p className="text-[#FF6F61] font-semibold text-[20px] px-[24px]">
              Provider Information
            </p>
            <div className="grid lg:grid-cols-3 max-lg:divide-y lg:divide-x">
              <div className="flex flex-col items-center justify-center gap-[16px] px-[24px] max-lg:py-[24px]">
                <div>
                  <div className="h-[200px] w-full mt-[10px] blur">
                    <Image
                      src={"/categories/beauty.svg"}
                      width={300}
                      height={200}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      alt="provider image"
                      className="border rounded-[8px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col max-lg:gap-[20px] lg:flex-row items-start justify-between w-full">
                  <div className="flex flex-col gap-[8px] items-center justify-center">
                    <p className="blur-sm font-bold text-[20px]">
                      Service Provider
                    </p>
                    <div className="flex items-center gap-[4px] text-[16px] lg:text-[18px]">
                      <div className="text-primary flex items-center gap-[10px]">
                        <GiAlliedStar
                          style={{ fontSize: 24, color: "orange" }}
                        />
                        

                        <p className="text-primary font-bold">Specialty:</p>
                      </div>
                      <p className="font-bold text-primary">
                        {profileData?.specialty ?? ""}
                      </p>
                    </div>
                  </div>
                  <p className="text-yellow-500 italic underline text-[15px]">
                    View Bio
                  </p>
                </div>
              </div>
              <div className="px-[26px] max-lg:py-[24px] flex flex-col gap-[16px] text-[18px] lg:text-[18px] text-primary">
                <div className="flex items-center gap-[20x]} ">
                  <Image
                    src={"/explore/profile/id.svg"}
                    width={30}
                    height={30}
                    alt="icon"
                  />
                  <div className="flex items-center font-bold gap-[4px]">
                    <p>Provider ID:</p>
                    <div className="flex items-center gap-[8px]">
                      <p className="text-[#FF6F61] font-bold">
                        {profileData?.id ?? " "}
                      </p>
                      <Image
                        src={"/logos/footerlogo.svg"}
                        width={24}
                        height={24}
                        alt="icon"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center font-bold gap-[20px]">
                  <Image
                    src={"/explore/profile/location.svg"}
                    width={30}
                    height={30}
                    alt="icon"
                  />
                  <p>{profileData?.serviceArea?.join(", ")}</p>
                </div>
                <div className="flex items-center gap-[20px]">
                  <Image
                    src={"/explore/profile/bellring.svg"}
                    width={30}
                    height={30}
                    alt="icon"
                  />
                  <div className="flex items-center font-bold gap-[4px]">
                    <p>
                      Served
                      <span className="text-primary font-bold">
                        {" "}
                        {profileData?.clientsServed ?? 0}{" "}
                      </span>
                      clients
                      <span className="text-primary font-bold"> {"--"} </span>
                      returning
                    </p>
                  </div>
                </div>
                <div className="flex items-center font-bold gap-[20px]">
                  <Image
                    src={"/explore/profile/message.svg"}
                    width={30}
                    height={30}
                    alt="icon"
                  />
                  <p>{profileData?.languages?.join(", ")}</p>
                </div>
                <div className="flex items-center font-bold gap-[20px]">
                  <Image
                    src={"/explore/profile/start.svg"}
                    width={30}
                    height={30}
                    alt="icon"
                  />
                  <div className="flex items-center gap-[2px]">
                    <p>{profileData?.rating ?? 0}</p>
                    <button>
                      (
                      <span className="text-black underline">
                        {profileData?.reviewsCount}
                      </span>
                      )
                    </button>
                  </div>
                </div>
              </div>
              <div className="px-[26px] max-lg:py-[24px] flex flex-col justify-between gap-[24px]">
                <div className="">
                  <div className="flex flex-col gap-[8px]">
                    <p className="text-primary text-2xl font-semibold ">Available Working Days</p>
                    <ScheduleView>
                      <div className="flex items-center gap-[16px] text-[13px]">
                        <p>All Day</p>
                        <p>Half Day</p>
                      </div>
                    </ScheduleView>
                  </div>
                </div>
                <p className="text-[13px] italic">
                  Book at least 1 day in advance
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[48px]">
          <div className="flex flex-col gap-[20px]">
            <p className="text-[#FF6F61] font-semibold text-[20px]">
              Gallery of Work
            </p>
            <div className="flex overflow-x-auto pb-[20px] gap-[20px]">
              {profileData?.gallery?.map((image, index) => (
                <div
                  className="h-[200px] min-w-[90%] lg:min-w-[25%] relative"
                  key={index}
                >
                  <Image
                    src={image.imgUrl}
                    width={300}
                    height={200}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    alt="provider image"
                    className="border rounded-[8px]"
                  />
                  <div className="absolute bottom-[10px] left-0 right-0 bg-white font-semibold bg-opacity-70 text-primary text-center">
                    {image?.label ?? ""}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <p className="text-[#FF6F61] font-semibold text-[20px] ">
              Service Details
            </p>
            <div className="grid md:grid-cols-2 max-md:gap-[30px] md:gap-x-[66px] md:gap-y-[48px]">
              <div className="border rounded-[30px] shadow-xl px-[20px] lg:px-[32px] py-[20px] lg:py-[33px]">
                <div className="flex flex-col lg:flex-row gap-[22px]">
                  <div className="w-full lg:w-[40%]">
                    <Image
                      src={"/categories/beauty.svg"}
                      width={300}
                      height={200}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                      alt="provider image"
                      className="border rounded-[8px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-primary text-[20px] font-bold">
                      Custom Requests
                    </p>
                    <div>
                      {profileData?.custRequests?.map((request, index) => (
                        <div
                          className="flex items-center gap-[12px] text-[14px] w-full pl-[10px]"
                          key={index}
                        >
                          <div className="w-[5%]">
                            <div className="w-[4px] h-[4px] rounded-[100%] bg-primary" />
                          </div>
                          <div>{request}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex lg:justify-end">
                  <button
                    className="bg-primary text-white font-semibold rounded-[50px] flex items-center justify-center h-[35px] px-[15px] mt-[40px]"
                    onClick={() => {
                      setShowRequestQuoteModal(true);
                    }}
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
              {profileData?.fixedBookings?.map((booking, index) => (
                <div
                  className="border rounded-[30px] shadow-xl px-[20px] lg:px-[32px] py-[20px] lg:py-[33px]"
                  key={index}
                >
                  <div className="flex flex-col lg:flex-row gap-[22px]">
                    <div className="w-full md:w-[40%]">
                      <Image
                        src={"/categories/beauty.svg"}
                        width={300}
                        height={200}
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                        }}
                        alt="provider image"
                        className="border rounded-[8px]"
                      />
                    </div>
                    <div className="flex flex-col gap-[16px]">
                      <p className="text-primary text-[20px] font-bold">
                        {profileData?.specialty ?? ""}
                      </p>
                      <div className="flex flex-col gap-[14px] text-[14px] w-full pl-[10px]">
                        <div className="flex items-center text-[20px] font-bold text-gray-400 gap-[4px]">
                          <p>Aprox Duration:</p>
                          <p>{booking?.approxDuration ?? ""}</p>
                        </div>
                        <div className="flex items-center text-[20px] font-bold text-black gap-[4px]">
                          <p>Fixed Price:</p>
                          <p>₦ {booking?.fixedPrice ?? 0}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex lg:justify-end">
                    <button
                      className="bg-primary font-semibold text-white rounded-[50px] flex items-center justify-center h-[35px] px-[15px] mt-[40px]"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowBookingModal(true);
                        setSelectedOption(booking);
                      }}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[20px]"></div>
          <div className="flex flex-col gap-[20px]">
            <p className="text-[#FF6F61] font-semibold text-[20px] ">
              Top Reviews
            </p>
            <div className="grid md:grid-cols-3 gap-x-[26px] gap-y-[24px]">
              {profileData?.reviews?.map((review, index) => (
                <div
                  className="border rounded-[30px] shadow-xl px-[32px] py-[33px]"
                  key={index}
                >
                  <div className="flex flex-col gap-[22px]">
                    <div className="flex items-center gap-[16px]">
                      <div className="w-[40px] h-[40px] rounded-[100%] bg-primary text-white flex items-center justify-center relative group">
                        <div className="bg-white text-primary text-[13px] absolute w-[200%] top-[-20px] hidden group-hover:flex transition-all duration-300">
                          Verified User
                        </div>
                        <p className="text-[14px] tracking-wide">VU</p>
                      </div>
                      <Rating
                        name="rating"
                        value={3}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        precision={0.5}
                        readOnly
                      />
                    </div>
                    <div className="flex flex-col">
                      <p>{review?.message ?? ""}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ReusableModal
        showModal={showBookingModal}
        setShowModal={setShowBookingModal}
      >
        <FixedBookingForm selectedOption={selectedOption} />
      </ReusableModal>
      <ReusableModal
        showModal={showRequestQuoteModal}
        setShowModal={setShowRequestQuoteModal}
      >
        <RequestQuoteForm />
      </ReusableModal>
    </div>
  );
};

export default ProviderProfile;
