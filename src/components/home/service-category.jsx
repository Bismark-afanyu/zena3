import Image from "next/image";
import Link from "next/link";
import { CiLocationOn, CiSearch } from "react-icons/ci";

const ServiceCategories = () => {
  const categories = [
    {
      name: "Beauty",
      branches: [
        "Makeup Artists",
        "Hair stylists",
        "Nail Tech",
        "Skincare Specialist",
      ],
      navigateTo: "Beauty",
      image: "/home/woman.svg",
    },
    {
      name: "Food & Baking",
      branches: [
        "Private Chefs",
        "Event Catering Services",
        "Bakers",
        "Cooking Instructors",
      ],
      navigateTo: "Food & Baking",
      image: "/home/chef cook.svg",
    },
    {
      name: "Home Services",
      branches: [
        "Cleaning Services",
        "Laundry & Ironing",
        "Gardening",
        "Fumigation",
      ],
      navigateTo: "Home Services",
      image: "/home/Home_servicess1-.svg",
    },
    {
      name: "Event Planning",
      branches: [
        "Photographer/Videographer",
        "DJ & Live Bands",
        "MC's and Event Hosts",
        "Event Planner",
      ],
      navigateTo: "Event Planning",
      image: "/home/Camera1.svg",
    },
    {
      name: "Health and Wellness",
      branches: [
        "Fitness Trainer",
        "Massage Therapy",
        "Nutritionist & Dietitians",
      ],
      navigateTo: "beauty",
      image: "/home/gym.svg",
    },
    {
      name: "Handyman Services",
      branches: ["Electrician", "Plumber", "Carpenter", "Painter"],
      navigateTo: "Handy Man",
      image: "/home/hometech.png",
    },
  ];

  return (
    <div
      className=" bg-white w-full pt-[50px] pb-[50px] max-lg:pb-[100px]"
      id="categories"
    >
      <div className="flex flex-col items-center justify-center gap-[40px] lg:gap-[70px]">
        <div className="w-[90%] md:w-[60%] flex flex-col items-center justify-center gap-[27px]">
          <p className="text-primary text-[24px] font-bold">
            Service Categories
          </p>
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
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[95%] grid md:grid-cols-2 lg:grid-cols-3 gap-[21px]">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex justify-between rounded-[8px] overflow-clip shadow-xl bg-white border border-gray-100"
              >
                <div className="flex flex-col justify-between w-[50%] pt-[12px] pb-[24px] pl-[16px] gap-[16px]">
                  <div className="w-full flex flex-col gap-[8px]">
                    <p className="text-[20px] font-bold text-[#2D2D2D]">
                      {category.name}
                    </p>
                    <div className="w-full grow flex flex-col px-[12px] text-primary gap-[4px]">
                      {category.branches.map((branch, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-[12px] text-[14px] w-full"
                        >
                          <div className="w-[5%]">
                            <div className="w-[4px] h-[4px] rounded-[100%] bg-primary" />
                          </div>
                          <Link
                            href={{
                              pathname: `/explore`,
                              query: {
                                category: `${category.navigateTo}, ${branch}`,
                              },
                            }}
                          >
                            {branch}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Link
                      href={{
                        pathname: "/explore",
                        query: { category: category.navigateTo },
                      }}
                      className="bg-primary h-[40px] rounded-[50px] text-white px-[24px] flex items-center justify-center font-bold"
                    >
                      Find Services
                    </Link>
                  </div>
                </div>
                <Image
                  src={category.image}
                  width={200}
                  height={200}
                  style={{ width: "50%", height: "100%" }}
                  alt="category image"
                  className=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCategories;
