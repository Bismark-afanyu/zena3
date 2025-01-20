"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const TrustTestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      user: "Naul Koe",
      review:
        "My bridal makeup was stunning, lasted all day. Highly recommended!",
      rating: 5,
      reviewDate: "2025-01-18",
    },
    {
      id: 2,
      user: "Mose Lmith",
      review:
        "My bridal makeup was stunning, lasted all day. Highly recommended!",
      rating: 4,
      reviewDate: "2025-01-15",
    },
    {
      id: 3,
      user: "Kam Tilson",
      review:
        "My bridal makeup was stunning, lasted all day. Highly recommended!",
      rating: 5,
      reviewDate: "2025-01-10",
    },
    {
      id: 4,
      user: "Anna Yaylor",
      review:
        "My bridal makeup was stunning, lasted all day. Highly recommended!",
      rating: 4,
      reviewDate: "2025-01-12",
    },
  ];

  const getInitials = (name) => {
    const nameParts = name.split(" ");
    return nameParts.length > 1
      ? nameParts[0][0] + nameParts[1][0]
      : nameParts[0][0];
  };

  const getDaysAgo = (reviewDate) => {
    const reviewTime = new Date(reviewDate).getTime();
    const currentTime = new Date().getTime();
    const diffInTime = currentTime - reviewTime;
    const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
    return `${diffInDays} days ago`;
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-40  relative">
      <h2 className="absolute top-0 text-2xl font-bold mt-4 text-red-400">
        What Users are Saying
      </h2>
      <div className="relative w-full">
        <Image
          src={"/trust/bottom.svg"}
          width={491}
          height={463}
          style={{ width: "100%", height: "auto" }}
          alt="icons"
        />
        {/* Horizontal Scroll Container */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 overflow-x-auto">
          <div className="flex space-x-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white shadow-lg p-6 rounded-lg w-80 flex-shrink-0 text-start"
              >
                <div className="flex items-center justify-between">
                  {/* User Initials Circle */}
                  <div className="w-10 h-10 bg-gray-35 text-primary rounded-full flex items-center justify-center font-bold text-xl ">
                    {getInitials(testimonial.user)}
                  </div>
                  <div className="flex items-center space-x-1">
                    {/* Rating */}
                    <div className="flex mr-10">
                      {Array.from(
                        { length: testimonial.rating },
                        (_, index) => (
                          <span key={index} className="text-yellow-200 text-lg">
                            ★
                          </span>
                        )
                      )}
                      {Array.from(
                        { length: 5 - testimonial.rating },
                        (_, index) => (
                          <span key={index} className="text-gray-300 text-lg">
                            ★
                          </span>
                        )
                      )}
                    </div>
                    {/* Days Ago */}
                    <span className="text-gray-500 text-xs  ">
                      {getDaysAgo(testimonial.reviewDate)}
                    </span>
                  </div>
                </div>
                {/* Review Date */}
                <p className="text-sm text-primary mt-2">
                  Reviewed on{" "}
                  {new Date(testimonial.reviewDate).toLocaleDateString()}
                </p>
                {/* Review */}
                <p className="text-sm text-gray-600 mt-2">
                  {testimonial.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustTestimonialSection;
