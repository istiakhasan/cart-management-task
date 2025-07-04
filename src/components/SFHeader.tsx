"use client"
import { useGetCategoriesQuery } from "@/redux/api/categoryApi";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useSelector } from "react-redux";
import Falcon from '../assets/falcon.png'
import Image from "next/image";
const SFHeader = () => {
    const cart:any=useSelector((abc:RootState)=>abc?.cart)

  
  return (
    <header className="bg-[#0D1321] h-[80px] flex items-center justify-between px-6 text-white">
      <Link href={'/'} className="flex items-center space-x-2">
        <Image alt="" src={Falcon} />
        <span className="font-bold text-xl">FALCON</span>
      </Link>

      {/* Search Bar */}
      <div className="flex-1 hidden md:block max-w-[600px] mx-6">
        <div className="flex overflow-hidden rounded">
          <input
            type="text"
            placeholder="Search for anything...."
            className="w-full px-4 py-2 text-black focus:outline-none"
          />
          <button className="bg-teal-500 p-3 flex items-center justify-center">
            <i className="ri-search-line text-white"></i>
          </button>
        </div>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6">
        <Link href={'/cart'} className="relative">
          <i className="ri-shopping-cart-line text-2xl"></i>
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cart?.cart?.length}
          </span>
        </Link>
        <i className="ri-user-line text-2xl"></i>
      </div>
    </header>
  );
};

export default SFHeader;
