"use client";

import React, { useState } from "react";

const ReportIssueSection = () => {
    const [selectedIssue, setSelectedIssue] = useState("");

    const issueTypes = ["Service Delivery", "Payment", "Feedback", "Others"];

    return (
        <div className="w-full bg-white">
            <div className="report-issue-section pt-10 px-4 lg:pt-20 lg:px-32 rounded-lg flex flex-col lg:flex-row gap-10">
                {/* Left Side - Title and Description */}
                <div className="lg:w-1/3 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-Teal_blue-50">Report an Issue</h3>
                    <p className="text-gray-600 text-sm mt-4">
                        Let us know about any problems 
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                        you’re facing.
                    </p>
                </div>

                {/* Right Side - Form */}
                <div className="lg:w-2/3 bg-gray-35 p-4 lg:p-6 rounded-lg shadow-md">
                    <form className="space-y-6">
                        {/* Select Issue Type */}
                        <div>
                            <p className="block text-Teal_blue-50 text-xl lg:text-2xl font-semibold mb-4">
                                Select Issue Type
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {issueTypes.map((type, index) => (
                                    <label
                                        key={index}
                                        className={`cursor-pointer border px-4 py-3 rounded-md text-sm font-medium w-1/2 sm:w-1/4 text-center ${
                                            selectedIssue === type
                                                ? "bg-Teal_blue-50 text-white border-Teal_blue-50"
                                                : "bg-white text-gray-700 border-gray-300"
                                        } hover:border-Teal_blue-50`}
                                    >
                                        <input
                                            type="radio"
                                            name="issue-type"
                                            value={type}
                                            className="hidden"
                                            onChange={() => setSelectedIssue(type)}
                                        />
                                        {type}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Full Name and Phone Number in a Row */}
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="w-full lg:w-1/2">
                                <label
                                    className="block text-Teal_blue-50 text-xl lg:text-2xl font-semibold mb-2"
                                    htmlFor="full-name"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="full-name"
                                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-Teal_blue-50"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div className="w-full lg:w-1/2">
                                <label
                                    className="block text-Teal_blue-50 text-xl lg:text-2xl font-semibold mb-2"
                                    htmlFor="phone-number"
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone-number"
                                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-Teal_blue-50"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label
                                className="block text-Teal_blue-50 text-xl lg:text-2xl font-semibold mb-2"
                                htmlFor="description"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                rows="4"
                                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-Teal_blue-50"
                                placeholder="Enter here"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button className="bg-Teal_blue-50 font-semibold text-white px-6 py-2 pr-10 pl-10 rounded-full hover:bg-Teal_blue-70 transition duration-300 flex items-center">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReportIssueSection;
