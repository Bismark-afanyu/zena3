import Image from "next/image";
import Link from "next/link";

const WhyTrustUs = () => {


  const CardTemplate = ({ label, description, buttonLabel, icon }) => {
    return (
      <div className="flex flex-col items-center justify-between gap-[12px] max-lg:w-[85%] ">
        <div>
          <div className="flex flex-col items-center justify-center gap-[30px]">
            <div className="w-[90px] h-[90px] bg-yellow-10 shadow-md shadow-[#3D348B40] rounded-[100%] flex items-center justify-center">
              <Image src={icon} width={60} height={60} style={{width: "auto", height: "auto"}} alt={'icon'} />
            </div>
            <p className="text-center text-primary text-[24px] font-semibold">{label}</p>
          </div>
          <div>
            <p className="text-center font-normal text-gray-600">
              {description}
            </p>
          </div>
        </div>
        <div>
          <Link href={'#'} className="flex text-[15px] gap-[8px]" >
            <p className="text-center italic text-primary">{buttonLabel}
            </p>
            <Image src={'/icons/hero-arrow.svg'} width={20} height={12} style={{ width: "20px", height: "auto", 
                transform: "rotate(180deg)"
             }} alt="arrow left" className="rotate-180" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex items-center justify-center bg-gray-10 py-[20px]">

      <div className="flex flex-col items-center gap-[40px] lg:gap-[20px]">
        <p className="text-teal_light-50 text-[28px] lg:text-[32px] text-center font-bold">Why Trust ZENA?</p>
        <div className="flex flex-col lg:flex-row gap-[25px] lg:gap-[53px] max-lg:items-center lg:w-[90%] ">
          <CardTemplate
            label={"Verified Experts"}
            description={"Every provider on KmerLink is carefully vetted through ID verification and background checks to ensure reliability and trustworthiness."}
            buttonLabel={"Learn About Our Verification Process"}
            icon={'/home/verified_user.svg'}
          />
          <div className="flex mt-[20px] items-end">
            <Image src={'/icons/Line 2.svg'} width={2} height={100} style={{ width: "auto", height: "80%" }} alt="line" className="max-lg:hidden " />
          </div>
          <CardTemplate
            label={"Certified for Excellence"}
            description={"Providers who meet ZENA's standards can earn our exclusive certification, ensuring top-tier service quality for every booking."}
            buttonLabel={"Explore Our Certification Program"}
            icon={'/icons/workspace_premium.svg'}
          />
          <div className="flex mt-[20px] items-end">
            <Image src={'/icons/Line 2.svg'} width={2} height={100} style={{ width: "auto", height: "80%" }} alt="line" className="max-lg:hidden " />
          </div>
          <CardTemplate
            label={"Your Peace of Mind"}
            description={"Not satisfied with a service? Our resolution process ensures that every concern is addressed promptly and fairly."}
            buttonLabel={"Learn About Our Resolution Process"}
            icon={'/icons/favorite.svg'}
          />
        </div>
      </div>

    </div>
  );
}

export default WhyTrustUs;