import React from 'react';
import PropTypes from 'prop-types';
const TrustCard = ({ icon: Icon, title, description, linkText }) => (
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
                                <Icon className="text-Teal_blue-50" size={60} />
                            </div>
                        </div>
                        <p className="text-Teal_blue-50 text-center font-bold leading-tight pt-5 text-xl">{title}</p>
                        <div className="pt-3 text-base text-l">
                            {description.map((text, index) => (
                                <p key={index} className="text-gray-5 pt-2">{text}</p>
                            ))}
                            <p className="text-Teal_blue-50 pt-6 text-sm flex items-center justify-center">
                                {linkText}
                                <IoIosArrowRoundForward className="ml-2" size={24} />
                            </p>
                        </div>
                    </div>
                );
                TrustCard.propTypes = {
                    icon: PropTypes.elementType.isRequired,
                    title: PropTypes.string.isRequired,
                    description: PropTypes.arrayOf(PropTypes.string).isRequired,
                    linkText: PropTypes.string.isRequired,
                };

                export default TrustCard;