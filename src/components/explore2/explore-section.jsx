"use client";

import { useState, useEffect } from "react";
import { categoriesData } from "../constants/categoriesData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import ExploreCategory from "./explore-heading";
import ProviderProfile from "./provider-profile";
const ExploreSection = () => {
  const [activeCategory, setActiveCategory] = useState("Beauty");
  const [selectedProviderId, setSelectedProviderId] = useState(null); 
  const [selectedProvider, setSelectedProvider] = useState(null); 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleCardClick = (providerId) => {
    setSelectedProviderId(providerId); // Set the selected provider ID
  };

  const handleBack = () => {
    setSelectedProviderId(null); // Clear the selected provider ID and go back
    setSelectedProvider(null); // Clear the selected provider data
  };

  useEffect(() => {
    if (selectedProviderId) {
      // Fetch provider data from the database based on the selectedProviderId
      fetchProviderData(selectedProviderId);
    }
  }, [selectedProviderId]);

  const fetchProviderData = async (providerId) => {
    // Replace this with your actual data fetching logic
    const response = await fetch(`/api/providers/${providerId}`);
    const data = await response.json();
    setSelectedProvider(data);
  };

  if (selectedProvider) {
    // Render ProviderProfile when a provider is selected
    return <ProviderProfile provider={selectedProvider} onBack={handleBack} />;
  }

  return (
    <section className="explore-section bg-white p-4 pb-24">
      <div>
        <ExploreCategory />
      </div>
      {/* Category Navigation */}
      <div className="flex gap-5 lg:gap-20 lg:justify-center justify-start mb-3 overflow-x-auto whitespace-nowrap px-4">
        {Object.keys(categoriesData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`flex flex-col items-center gap-2 p-2 text-lg transition-all duration-300 ${
              activeCategory === category
                ? "font-bold text-Teal_blue-50"
                : "text-gray-600"
            }`}
          >
            <img
              src={categoriesData[category].image}
              alt={category}
              className="w-20 h-20 rounded-full"
            />
            {category}
          </button>
        ))}
      </div>

      <div className=" bg-yellow-100 h-0.5 mt-2"></div>

      {/* Content Cards Based on Selected Category */}
      <div className="category-content mt-8 ml-10 mr-10">
        <div className="cards-section flex flex-col gap-8">
          {categoriesData[activeCategory].subcategories.map((subcat) => (
            <div key={subcat.title} className="subcategory-section">
              <h3 className="text-lg font-bold text-Teal_blue-50 mb-4 flex items-center mt-2">
                <img
                  src={subcat.Icon}
                  alt={`${subcat.title} icon`}
                  className="mr-2 w-6 h-6"
                />
                {subcat.title} ({subcat.content.length})
              </h3>
              <div className="flex gap-8 overflow-x-auto">
                {subcat.content.map((item) => (
                  <div
                    key={item.id}
                    className="card bg-yellow-20 p-4 rounded-lg shadow-lg max-w-[500px] flex-shrink-0 relative"
                    onClick={() => handleCardClick(item.id)} // Handle card click
                  >
                    <div className="flex flex-col items-start">
                      <h3 className="text-sm text-gray-700 font-semibold mb-6 truncate blur-sm">
                        {item.name}
                      </h3>
                      <div className="flex items-center justify-between w-full -mt-6 mb-4">
                        <h3 className="text-sm text-gray-700 font-semibold truncate blur-sm">
                          {item.title}
                        </h3>
                        <div className="text-l font-semibold bg-teal_light-5 text-gray-600 px-4 py-2 rounded-full">
                          {item.id === 1
                            ? `Top ${subcat.title}`
                            : subcat.title}
                        </div>
                      </div>
                    </div>
                    <div className="image-carousel mb-2 relative">
                      <Slider
                        {...{
                          ...settings,
                          arrows: false,
                          appendDots: (dots) => (
                            <div
                              style={{
                                position: "absolute",
                                bottom: "10px",
                                width: "100%",
                              }}
                            >
                              <ul style={{ margin: "0px" }}>{dots}</ul>
                            </div>
                          ),
                        }}
                      >
                        {item.images.map((image, index) => (
                          <div key={index}>
                            <img
                              src={image}
                              alt={`image-${index}`}
                              className="w-[500px] h-[250px] object-cover rounded-md"
                            />
                          </div>
                        ))}
                      </Slider>
                    </div>

                    <div className="flex items-start justify-between w-full">
                      <div className="flex flex-col">
                        <p className="text-sm text-gray-700 flex items-center">
                          <IoLocationOutline
                            className="mr-1 text-Teal_blue-50"
                            size={20}
                          />
                          <span className="font-bold">Service Area: </span>
                          <span className="ml-1">{item.serviceArea}</span>
                        </p>
                        <p className="text-sm text-gray-700 flex items-center mt-2">
                          <IoIosPeople
                            className="mr-1 text-Teal_blue-50"
                            size={20}
                          />
                          Served:{" "}
                          <span className="text-Teal_blue-50 ml-1 mr-1">
                            {item.clientsServed}
                          </span>{" "}
                          Clients
                        </p>
                        <p className="text-sm text-gray-700 flex items-center mt-2">
                          <FaStar
                            className="mr-1 text-yellow-50"
                            size={20}
                          />
                          {item.rating} ({subcat.content.length})
                        </p>
                      </div>
                      <button className="bg-Teal_blue-50 text-white py-2 px-3 rounded-full font-bold text-l mt-2">
                        Request Service
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
