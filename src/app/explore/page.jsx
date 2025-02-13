"use client";

import { data } from "@/data/mockData";
import Image from "next/image";
import { useState, useEffect, Suspense, useRef } from "react";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { HiMiniUserGroup } from "react-icons/hi2";
import { CiStar } from "react-icons/ci";
import Link from "next/link";
import {
  FaArrowLeft,
  FaArrowRight,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import FilterOptions from "@/components/explore/filterOptions";
import { useSearchParams } from "next/navigation";
import ReusableModal from "@/components/modal-template";
import FixedBookingForm from "@/components/modals/fixed-booking";
import ServiceSearch from "@/components/serviceSearch";

const ExplorePage = () => {
  const categoryRefs = useRef({});

  const [showBookingModal, setShowBookingModal] = useState(false);

  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "Beauty";

  console.log(category.split(","));

  let defaultCategory = "Beauty";
  let [sectionIdField, setSectionIdField] = useState("");

  useEffect(() => {
    if (category != null) {
      const categoryArr = category.split(",");
      console.log("cat array", categoryArr);
      setActiveCategory(categoryArr[0]);
      if (categoryArr.length > 1) {
        const sectionId = categoryArr[1].trim();
        const targetElement = document.getElementById(sectionId);
        setSectionIdField(targetElement);

        if (targetElement) {
          // Smoothly scroll to the element if it exists
          targetElement.scrollIntoView({ behavior: "smooth" });
        } else {
          console.log(`Element with id "${sectionId}" not found.`);
        }
      }
    }
  }, [category, sectionIdField]);

  console.log(category.split(","));

  const [activeCategory, setActiveCategory] = useState(
    defaultCategory || "Beauty"
  );

  const categories = [
    {
      name: "Beauty",
      image: "/home/woman.svg",
    },
    {
      name: "Food & Baking",
      image: "/home/chef cook.svg",
    },
    {
      name: "Home Services",
      image: "/home/Home_servicess1-.svg",
    },
    {
      name: "Event Planning",
      image: "/home/Camera1.svg",
    },
    {
      name: "Personal Care",
      image: "/home/gym.svg",
    },
    {
      name: "Tech Support",
      image: "/home/Laptop.svg",
    },

    {
      name: "Handy Man",
      image: "/home/hometech.png",
    },
  ];

  const scrollLeft = (categoryName) => {
    const ref = categoryRefs.current[categoryName];
    console.log("This is the ref", ref, categoryRefs);
    if (ref) {
      ref.scrollBy({ left: -300, behavior: "smooth" });
      // console.log(ref.current.scrollLeft)
      // console.log("Scroll Width:", ref.current.scrollWidth);
      // console.log("Client Width:", ref.current.clientWidth);
    } else {
      console.error("Scroll container not found.");
    }
  };

  const scrollRight = (categoryName) => {
    const ref = categoryRefs.current[categoryName];
    console.log("This is the ref", ref, categoryRefs);
    if (ref) {
      ref.scrollBy({ left: 300, behavior: "smooth" });
      // console.log(ref.current.scrollLeft);
      // console.log("Scroll Width:", ref.current.scrollWidth);
      // console.log("Client Width:", ref.current.clientWidth);
    } else {
      console.error("Scroll container not found.");
    }
  };

  return (
    <div className="w-full flex items-center justify-center pt-[50px] pb-[70px]">
      <div className="w-[93%] flex flex-col items-center justify-center">
        <div className="w-full md:w-[60%] flex flex-col items-center justify-center gap-[20px]">
          <p className="text-primary text-[24px] font-bold">
            Your Bookings - Simplified
          </p>
          <ServiceSearch />
          {/* <div className="relative w-full h-[45px] rounded-[50px]">
            <input type="text" className="w-full h-full rounded-[50px] border pl-[20px] lg:pl-[60px] pr-[60px]" placeholder="Find trusted services, e.g., hair styling or plumbing" />
            <button className="h-[80%] bg-primary text-white px-[40px] flex items-center justify-center absolute top-1/2 -translate-y-1/2 rounded-[50px] right-[8px] max-lg:hidden">Search</button>
            <button className="h-[35px] w-[35px] bg-white bg-opacity-55 font-bold text-primary flex items-center justify-center absolute top-1/2 -translate-y-1/2 rounded-[100%] right-[8px] lg:left-[8px]">
              <CiSearch size={26} />
            </button>
          </div> */}
        </div>
        <div className="flex flex-col mb-[32px] mt-[70px] gap-[25px] w-full">
          <div className="">
            <FilterOptions
              categories={categories}
              setActiveCategory={setActiveCategory}
            />
          </div>
          <div className="flex overflow-x-auto gap-[60px] w-full items-center justify-center">
            {categories.map((category, index) => (
              <div
                className="max-lg:min-w-[120px] flex flex-col items-center gap-[8px] cursor-pointer"
                key={index}
                onClick={() => setActiveCategory(category.name)}
              >
                <div className="h-[100px] w-[100px] rounded-[100%]">
                  <Image
                    src={category.image}
                    width={100}
                    height={100}
                    style={{ width: "100%", height: "100%" }}
                    alt={`${category.name} category image`}
                    className="rounded-[100%] bg-[#F9CF4F] bg-opacity-15"
                  />
                </div>
                <p
                  className={`text-[15px] text-center ${
                    activeCategory == category.name
                      ? "text-primary font-bold"
                      : ""
                  }`}
                >
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden w-full">
          <div></div>
          <div className="w-full">
            {data.map((category) => (
              <div key={category.category}>
                {/* <h1>{category.category}</h1> */}
                {category.category == activeCategory &&
                  category.branches.map((branch) => (
                    <div
                      key={branch.branchName}
                      id={branch.branchName}
                      className="relative"
                    >
                      <h2 className="text-primary font-bold mb-[10px]">{`${branch.branchName} (${branch.providers.length})`}</h2>
                      <div
                        ref={(el) =>
                          (categoryRefs.current[branch.branchName] = el)
                        }
                        className="gap-[20px] flex overflow-x-auto scroll-smooth w-full text-[14px] mb-[20px]"
                        style={{ scrollBehavior: "smooth" }}
                      >
                        {branch.providers.map((provider) => (
                          <div
                            onClick={() => {
                              localStorage.setItem(
                                "selectedProviderProfile",
                                JSON.stringify({
                                  ...provider,
                                  branchName: branch.branchName,
                                })
                              );
                              window.location.href = `/explore/profile/${provider.id}`;
                            }}
                            key={provider.name}
                            className="py-[10px] px-[10px] min-w-[90%] lg:min-w-[40%] h-fit rounded-[8px] bg-[#F9CF4F] bg-opacity-15 cursor-pointer shadow"
                          >
                            <div className="flex flex-col-reverse max-lg:gap-[16px]  lg:flex-row md:items-start lg:items-center justify-between">
                              <div className="flex items-center gap-[13px] blur-sm">
                                <div className="h-[40px] w-[40px]  bg-gray-400 rounded-[100%]" />
                                <h3 className="text-[12px]">
                                  {/* {provider.name} */}
                                  Service Provider
                                </h3>
                              </div>
                              <p className="bg-[#007B83] bg-opacity-25 text-[14px] h-[30px] rounded-[50px] flex items-center justify-center px-[12px]">
                                {provider.label}
                              </p>
                            </div>
                            <div className="h-[200px] w-full mt-[10px] overflow-x-auto flex gap-[10px]">
                              {provider.gallery.map((image, index) => (
                                <Image
                                  key={index}
                                  src={image.imgUrl}
                                  width={300}
                                  height={200}
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                  }}
                                  alt={`provider image ${index + 1}`}
                                  className="border rounded-[8px] flex-shrink-0"
                                />
                              ))}
                            </div>

                            <div className="flex flex-col max-lg:gap-[20px] lg:flex-row items-start lg:items-center justify-between">
                              <div className="flex flex-col gap-[7px] mt-[10px]">
                                <div className="flex gap-[12px]">
                                  <div className="flex items-center gap-[4px]">
                                    <CiLocationOn
                                      className="text-primary"
                                      size={20}
                                    />
                                    <p className="font-bold">Service Area:</p>
                                  </div>
                                  <p> {provider?.serviceArea.join(", ")}</p>
                                </div>
                                <div className="flex items-center gap-[4px]">
                                  <HiMiniUserGroup
                                    size={20}
                                    className="text-primary"
                                  />
                                  <p>
                                    Served
                                    <span className="text-primary font-bold">
                                      {" "}
                                      {provider?.clientsServed}{" "}
                                    </span>
                                    Clients
                                  </p>
                                </div>
                                {/* <p>Clients Served: {provider.clientsServed}</p> */}
                                <div className="flex items-center gap-[4px]">
                                  <FaStar
                                    size={20}
                                    className="text-yellow-50"
                                  />
                                  <div className="flex items-center gap-[2px]">
                                    <p>{`${provider?.rating}`}</p>
                                    <button onClick={() => {}}>
                                      (
                                      <span className="text-primary underline">
                                        {provider?.reviews?.length ?? 0}
                                      </span>
                                      )
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <button
                                className="bg-primary font-bold text-white rounded-[50px] flex items-center justify-center h-[35px] px-[15px] "
                                // onClick={(e) => {
                                //   e.stopPropagation();
                                //   setShowBookingModal(true)
                                // }}
                              >
                                Request Service
                              </button>
                            </div>
                            {/* <div>
                            {provider.gallery.map((image, index) => (
                              <img key={index} src={image} alt={`Provider ${provider.name} gallery image ${index + 1}`} />
                            ))}
                          </div> */}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <ReusableModal
        showModal={showBookingModal}
        setShowModal={setShowBookingModal}
      >
        <FixedBookingForm />
      </ReusableModal>
    </div>
  );
};

const Explore = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ExplorePage />
    </Suspense>
  );
};

export default Explore;
