import Image from "next/image";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";



const WhyTrustZanaSection = () => {
return (
    <section className="why-trust-zana-section bg-gray-200 flex w-full p-4 flex-col items-start gap-2">
        <div className="container mx-auto">
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="text-Teal_blue-50 text-center text-3xl font-bold leading-tight">
                        Why Trust Zana?
                    </h2>
                </div>
            </div>
            <div className="row mt-4 flex flex-row justify-between">
                <div className="col-12 col-md-4 text-center">
                    <div className="flex justify-center mb-2">
                        <div
                            className="bg-yellow-10 shadow-lg rounded-full flex items-center justify-center"
                            style={{
                                width: "100px",
                                height: "100px",
                                boxShadow: "0px 15px 60px rgba(0.3, 0.3, 0.3, 0.3)",
                            }}
                        >
                            <MdOutlineVerifiedUser
                                className="text-Teal_blue-50 "
                                size={60}
                            />
                        </div>
                    </div>
                    <p className="text-Teal_blue-50 text-center font-bold leading-tight pt-5 text-xl">Verified Experts</p>
                    <div className="pt-3 text-base text-l">
                        <p className="text-gray-5 pt-2">Every provider on ZENA is carefully vetted</p>
                        <p className="text-gray-5 pt-2">Through ID verification and background </p>
                        <p className="text-gray-5 pt-2">checks to ensure reliability and.</p>
                        <p className="text-gray-5 pt-2">trustworthiness.</p>
                        <p className="text-Teal_blue-50 pt-6 text-sm flex items-center justify-center">
                            Learn About Our Verification Process
                            <IoIosArrowRoundForward className="ml-2" size={24} />
                        </p>
                    </div>
                </div>

                <div className="col-12 col-md-4 text-center">
                    <div className="flex justify-center mb-2">
                        <div
                            className="bg-yellow-10 shadow-lg rounded-full flex items-center justify-center"
                            style={{
                                width: "100px",
                                height: "100px",
                                boxShadow: "0px 15px 60px rgba(0.3, 0.3, 0.3, 0.3)",
                            }}
                        >
                           <Image src="/icons/icon badge.svg" alt="icon" width={60} height={60}  />
                        </div>
                    </div>
                    <p className="text-Teal_blue-50 text-center font-bold leading-tight pt-5 text-xl">Certified for Excellence</p>
                    <div className="pt-3 text-base text-l">
                        <p className="text-gray-5 pt-2">Providers who meet ZENA’s standards can</p>
                        <p className="text-gray-5 pt-2">earn our exclusive certification, ensuring top-</p>
                        <p className="text-gray-5 pt-2">tier service quality for every booking.</p>
                        <p className="text-Teal_blue-50 pt-14 text-sm flex items-center justify-center">
                            Learn About Our Verification Process
                            <IoIosArrowRoundForward className="ml-2" size={24} />
                            
                        </p>
                    </div>
                </div>
                

                <div className="col-12 col-md-4 text-center">
                    <div className="flex justify-center mb-2">
                        <div
                            className="bg-yellow-10 shadow-lg rounded-full flex items-center justify-center"
                            style={{
                                width: "100px",
                                height: "100px",
                                boxShadow: "0px 15px 60px rgba(0.3, 0.3, 0.3, 0.3)",
                            }}
                        >
                            <FaRegHeart
                                className="text-Teal_blue-50 "
                                size={60}
                            />
                        </div>
                    </div>
                    <p className="text-Teal_blue-50 text-center font-bold leading-tight pt-5 text-xl">Your Peace of Mind</p>
                    <div className="pt-3 text-base text-l">
                        <p className="text-gray-5 pt-2">Not satisfied with a service? Our resolution</p>
                        <p className="text-gray-5 pt-2">process ensures that every concern is</p>
                        <p className="text-gray-5 pt-2">addressed promptly and fairly..</p>
                        <p className="text-Teal_blue-50 pt-12 text-sm flex items-center justify-center">
                            Learn About Our Verification Process
                            <IoIosArrowRoundForward className="ml-2" size={24} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
};

export default WhyTrustZanaSection;
