"use client"
import { useGetCategoriesQuery } from "@/redux/api/categoryApi";
import { useState } from "react";
import TrachOrder from '../assets/trackOrder.png'
import HelpCustoemr from '../assets/help.png'
import HelpUs from '../assets/helpUs.png'
import Image from "next/image";
import Categorydata from '../assets/category.json'
const SubHeader = () => {
  const { data, isLoading } = useGetCategoriesQuery(undefined);
  const [active,setActive]=useState(false)
  if (isLoading) {
    return;
  }

  return (
    <div className="bg-white lg:h-[40px] md:flex items-center justify-between lg:px-[80px] flex-wrap text-sm text-gray-700 border-b customShadow">
      <div className="lg:flex items-center space-x-6 mb-3 lg:mb-0">
        <button onClick={()=>{
          setActive(!active)
        }} className="flex items-center relative text-black font-semibold">
          <i className="ri-menu-line mr-2 text-teal-500"></i>
          Categories
         {active && <span className="inline-block max-h-500 overflow-auto w-[300px] p-[20px] bg-white shadow-xl z-50 absolute left-0 top-[110%]">
          
          {
           false ? data?.data?.map((item:any)=>(
              <span className="block text-start font-[400] border-b-[1px] border-b-gray-300" key={item?.id}>{item?.name}</span>
            )) :Categorydata?.map((item:any)=>(
              <span className="block text-start font-[400] border-b-[1px] border-b-gray-300" key={item?.id}>{item?.name}</span>
            ))
          }
          </span>}
        </button>
        {Categorydata?.slice(0,4)?.map((item: any) => (
          <span className="text-[14px] hidden lg:inline" key={item?.id}>{item?.name}</span>
        ))}
      </div>

      <div className="flex items-center flex-wrap space-x-6 text-[8px] md:text-[14px] text-gray-500">
        <button className="flex items-center whitespace-nowrap hover:text-black">
          <Image className="mr-[8px]" alt="" src={TrachOrder}/>
          TRACK ORDER
        </button>
        <button className="flex items-center whitespace-nowrap hover:text-black">
           <Image className="mr-[8px]" alt="" src={HelpCustoemr}/>
          HELP CENTER
        </button>
        <button className="flex items-center whitespace-nowrap text-teal-500 font-medium hover:text-teal-600">
          <Image className="mr-[8px]" alt="" src={HelpUs}/>
          SELL WITH US
        </button>
      </div>
    </div>
  );
};

export default SubHeader;
