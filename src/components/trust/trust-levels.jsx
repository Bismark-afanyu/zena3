"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";

const LevelCard = ({ children, icon }) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-[30px]">
      <div className="w-full lg:w-[50%]">
        <Image
          src={icon}
          width={491}
          height={463}
          style={{ width: "100%", height: "auto" }}
          alt="icons"
        />
      </div>
      <div className="pt-[20px]">{children}</div>
    </div>
  );
};

const ValueCard = ({ count, value }) => {
  return (
    <div className="flex gap-[20px] max-md:w-full items-center rounded-[8px] shadow-md px-[12px] py-[16px] ">
      <div className="h-[40px] w-[40px] flex items-center justify-center rounded-[100%] text-primary bg-Teal_blue-5 ">
        {count}
      </div>
      <p className=" font-medium">{value}</p>
    </div>
  );
};

const LevelDescription = ({
  heading,
  description,
  steps = [],
  link,
  navigateTo = "#",
}) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[37px]">
        <div className="flex flex-col gap-[24px] ">
          <p className="text-[28px] lg:text-[36px] font-semibold">{heading}</p>
          <p>{description}</p>
        </div>
        <div className="flex gap-[20px] flex-wrap">
          {steps.map((level, index) => (
            <ValueCard key={index} count={index + 1} value={level} />
          ))}
        </div>
      </div>
      <Link href={navigateTo} className="text-primary text-end">
        {link}
      </Link>
    </div>
  );
};

const TrustLevels = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Verification Process",
    "Certification Program",
    "Resolution Process",
    "Refund Policy",
  ];

  const levels = [
    <LevelCard key={0} icon={"/trust/verificationPolicy.svg"}>
      <LevelDescription
        heading={
          <span>
            <span className="mr-2" style={{ color: "#142349" }}>
              Our{" "}
            </span>
            <span className="mr-2" style={{ color: "#007B83" }}>
              Provider Verification
            </span>
            <span className="mr-2" style={{ color: "#142349" }}>
              Process{" "}
            </span>
          </span>
        }
        description={
          "At ZENA, your trust is our top priority. That’s why every provider on our platform undergoes a rigorous verification process to ensure quality, safety, and reliability for all users."
        }
        steps={[
          "Identity Verification",
          "Background Checks",
          "Work Review",
          "Profile Completion",
          "Approval Badge",
        ]}
        link={"Learn About Our Verification Process"}
        navigateTo="#"
      />
    </LevelCard>,
    <LevelCard key={1} icon={"/trust/certificationprogram.svg"}>
      <LevelDescription
        heading={
          <span>
            <span className="mr-2" style={{ color: "#142349" }}>
              Certified For{" "}
            </span>
            <span className="mr-2" style={{ color: "#007B83" }}>
              Excellence
            </span>
          </span>
        }
        description={
          "Our certification program recognizes providers who meet ZENA’s high standards for professionalism and service quality. This badge sets them apart as top-tier providers trusted by our community."
        }
        steps={[
          "Performance Metrics",
          "Compliance",
          "Training",
          "Verification Renewal",
        ]}
        link={"Learn About Certification"}
        navigateTo="#"
      />
    </LevelCard>,
    <LevelCard key={2} icon={"/trust/resulationpolicy.svg"}>
      <LevelDescription
        heading={
          <span>
            <span className="mr-2" style={{ color: "#142349" }}>
              Our
            </span>
            <span className="mr-2" style={{ color: "#007B83" }}>
              Resolution
            </span>
            <span style={{ color: "#142349" }}>Process</span>
          </span>
        }
        description={
          "At ZENA, we stand by our promise to resolve all user concerns promptly and fairly. Whether it’s a missed appointment, a subpar service, or a billing issue, our resolution process ensures your peace of mind."
        }
        steps={["Report the Issue", "Case Review", "Mediation", "Resolution"]}
        link={"Contact Support Now"}
        navigateTo="#"
      />
    </LevelCard>,
    <LevelCard key={3} icon={"/trust/refound policy.svg"}>
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[37px]">
          <div className="flex flex-col gap-[24px]">
            <p className="text-[36px] font-semibold">
              <span className="mr-2" style={{ color: "#142349" }}>
                Our
              </span>
              <span className="mr-2 " style={{ color: "#007B83" }}>
                Refund
              </span>

              <span style={{ color: "#142349" }}>Policy</span>
            </p>
            <p>
              {
                "We believe in transparency and fairness when it comes to refunds. Our refund policy ensures that users are protected in case of unforeseen issues."
              }
            </p>
          </div>
          <div>
            <p className="text-primary text-[18px]">How to Request a Refund:</p>
            <div className="flex flex-col pl-[20px]">
              <p>{'1. Go to the "support" section in the app.'}</p>
              <p>
                {
                  "2. Submit a refund request with details (e.g. booking reference, reason for the request)."
                }
              </p>
              <p>{"3. Refunds are processed within 5 - 7 business days."}</p>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <p className="text-start text-primary text-[20px] font-semibold">
              Refund Scenarios
            </p>
            <div className="flex gap-[20px] flex-wrap">
              {[
                "Provider Cancellation",
                "Missed Appointments",
                "Service Quality Issues",
                "User Cancellation",
              ].map((level, index) => (
                <ValueCard key={index} count={index + 1} value={level} />
              ))}
            </div>
          </div>
        </div>
        <Link href={"#"} className="text-primary text-end">
          {"Read Full Refund Policy"}
        </Link>
      </div>
    </LevelCard>,
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="w-[90%] flex flex-col">
        <div className="flex items-center justify-between border-b max-lg:mt-[40px] max-lg:mb-[10px] lg:my-[50px] w-full lg:w-[80%] self-center overflow-x-auto max-lg:gap-[20px] sticky top-0 bg-white">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`max-md:min-w-[50%] py-[6px] cursor-pointer ${
                activeTab == index
                  ? "border-b-4 border-[#007B83] text-primary "
                  : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div>
          {levels.map((level, index) => (
            <div key={index}>{activeTab == index && level}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustLevels;
