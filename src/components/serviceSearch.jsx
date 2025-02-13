"use client"

import { useState } from "react"
import Link from "next/link";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { serviceCategories } from "@/data/serviceCategories";


const ServiceSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const [showDrop, setShowDrop] = useState(true);

  const handleSearch = (e) => {
    setShowDrop(true);
    setSearchQuery(e.target.value)
    if (!e.target.value) {
      setSelected(null);
    }
  }

  return (
    <div className="relative w-full h-[45px] rounded-[50px]">
      <input type="text" className="w-full h-full rounded-[50px] border pl-[20px] lg:pl-[60px] pr-[60px] focus:text-black outline-Teal_blue-50"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Find trusted services, e.g., hair styling or plumbing" />

      <Link href={{
        pathname: `/explore`,
        query: { category: `${selected?.navigateTo}, ${selected?.cardDisplay}` },
      }} aria-disabled={!selected} >
        <button className="h-[80%] bg-primary text-white px-[40px] flex items-center justify-center absolute top-1/2 -translate-y-1/2 rounded-[50px] right-[8px] max-lg:hidden disabled:bg-gray-400" onClick={console.log(selected, 'The searched service')} disabled={!selected}>Search</button>
      </Link>
      <Link href={{
        pathname: `/explore`,
        query: { category: `${selected?.navigateTo}, ${selected?.cardDisplay}` },
      }} aria-disabled={!selected} >
        <button className="h-[35px] w-[35px] bg-white bg-opacity-55 font-bold text-primary flex items-center justify-center absolute top-1/2 -translate-y-1/2 rounded-[100%] right-[8px] lg:left-[8px]">
          <CiSearch size={26} />
        </button>
      </Link>

      {searchQuery != "" && showDrop && <div className="absolute left-[16px] right-[16px] max-h-[500px] bg-white z-[3000] bottom-[-2px] translate-y-full rounded-[8px] overflow-y-auto py-[11px] shadow-md border">
        {serviceCategories.filter(category => {
          const filteredServices = category.services.filter(s => s.service.toLowerCase().includes(searchQuery.toLowerCase()));
          if (filteredServices.length > 0) {
            return {
              ...category,
              services: filteredServices
            };
          }
          return false;
        }).length > 0 ? <div>
          {
            serviceCategories.map((category) => {
              let filteredServices = category.services.filter(s => s.service.toLowerCase().includes(searchQuery.toLowerCase()));
              return filteredServices.map((service, index) => (
                <div
                  onClick={() => {
                    setSelected(
                      {
                        category: category.category,
                        navigateTo: category.navigateTo,
                        ...service
                      }
                    )
                    setSearchQuery(service.service);
                    setShowDrop(false);
                  }}
                  className="flex items-center gap-[16px] text-[17px] lg:text-[20px] px-[19px] py-[12px] hover:bg-gray-300 hover:bg-opacity-15 cursor-pointer" key={index}>
                  <div className="h-[40px] w-[40px] rounded-[100%] border border-dashed border-[#f1c40f] flex items-center justify-center">
                    <div className="h-[30px] w-[30px] rounded-[100%] bg-[#3D348B] bg-opacity-20 flex items-center justify-center text-primary">
                      {service.icon}
                    </div>
                  </div>
                  <p className="">{service.service}</p>
                </div>
              ))
            })
          }
        </div> : <div className="py-[40px] flex items-center justify-center text-gray-400 text-[15px]">No results found for {searchQuery}</div>


        }
      </div>}
    </div>
  );
}

export default ServiceSearch;