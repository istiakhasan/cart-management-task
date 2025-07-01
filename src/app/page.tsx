"use client";
import ProductInfo from "@/components/ProductInfoCard";
import SbBreadcam from "@/components/SbBreadcam";
import SubHeader from "@/components/SbHeader";
import SFHeader from "@/components/SFHeader";
import ProductPage from "@/components/SFProductDetails";
export default function Home() {
  return (
    <div>
      <SFHeader />
      <SubHeader />
      <SbBreadcam>
        <h1 className="text-[#0F172A] text-[14px] ">Home</h1>
        <i className="ri-arrow-right-s-line text-[18px]"></i>
        <h1 className="text-[#0F172A] text-[14px] ">Tops</h1>
        <i className="ri-arrow-right-s-line text-[18px]"></i>
        <h1 className="text-[#475569] text-[14px] ">T-Shirts</h1>
      </SbBreadcam>
      <ProductPage />
      <ProductInfo />
    </div>
  );
}
