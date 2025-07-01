"use client"
import SbBreadcam from "@/components/SbBreadcam";
import SubHeader from "@/components/SbHeader";
import SFHeader from "@/components/SFHeader";
import React from "react";
import Cart from "./_compoent/CartPage";

const Page = () => {
  return (
    <div>
      <SFHeader />
      <SubHeader />
      <SbBreadcam>
        <h1 className="text-[#0F172A] text-[14px] ">Home</h1>
        <i className="ri-arrow-right-s-line text-[18px]"></i>
        <h1 className="text-[#475569] text-[14px] ">My Cart</h1>
      </SbBreadcam>

      <Cart />
    </div>
  );
};

export default Page;
