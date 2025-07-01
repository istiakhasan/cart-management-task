/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import IconI from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import PGIcon from "../assets/P&G.png";
import RisingStar from "../assets/risingstartwo.png";
import contentimg from "../assets/content.png";
import verified from "../assets/verified.png";
import { useGetProductByIdQuery } from "@/redux/api/productApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/slice/cartSlice";
import { RootState } from "@/redux/store";
import { message } from "antd";
const ProductPage = () => {
  const { data, isLoading } = useGetProductByIdQuery({
    id: "iphone-15-plus",
  });
  const [quantity,setQuantity]=useState(0)
  const [selectedColor, setSelectedColor] = useState<any>(null);
  const [selectSize,setSelectedSize]=useState<any>(null)
  const [selectThumbnail,setSelectedThumbnail]=useState<any>(null)
  const dispatch=useDispatch()
  const cart:any=useSelector((abc:RootState)=>abc?.cart)
  useEffect(() => {
    setSelectedColor(data?.data?.attributes[0]);
    setSelectedSize(data?.data?.attributes?.filter((abc:any)=>abc?.name==="Ram")[0])
  }, [data]);
  if (isLoading) {
    return;
  }

  const product: any = data?.data;
  const rating = product?.shop_rating || 0; // example: 3.5
  const totalStars = 5;

  const getStars = () => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      if (rating >= i) {
        stars.push(<i key={i} className="ri-star-s-fill text-yellow-400"></i>);
      } else if (rating >= i - 0.5) {
        stars.push(
          <i key={i} className="ri-star-half-s-line text-yellow-400"></i>
        );
      } else {
        stars.push(<i key={i} className="ri-star-line text-gray-300"></i>);
      }
    }
    return stars;
  };
  return (
    <div className="bg-[#FFFFFF]  lg:h-[601px]  py-8 mb-[15px]">
      <main className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white  rounded-lg shadow-sm">
          <div className="lg:flex gap-[40px]">
            {/* Left Column: Product Image Gallery */}
            <div className="lg:flex flex-col ">
              <div className=" min-h-[380px] lg:w-[380px]   rounded-lg  ">
                <img
                  src={selectThumbnail || product?.thumbnail}
                  alt="Men's Casual Shirt"
                  className="w-[100%] h-full  object-contain rounded-md"
                />
              </div>
              <div className="lg:flex  mt-4 gap-[8px]">
                {data?.data?.images?.map((item:any, i:any) => (
                  <div 
                   onClick={()=>setSelectedThumbnail(item?.url)}
                    key={i}
                    className="w-[68px] border border-gray-300 overflow-hidden h-[68px] bg-gray-100 rounded-[5px]  cursor-pointer  hover:border-blue-500"
                  >
                    <img
                      src={item?.url}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-full object-cover rounded-sm"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Product Details */}
            <div className="lg:flex gap-[40px] flex-1">
              <div className="lg:w-[507px]">
                {/* Product Info */}
                <div>
                  <h1 className="text-[20px] font-[500]  text-[#0F172A]">
                    {product?.name}
                  </h1>
                  <div className="flex items-center mt-2 gap-[10px]">
                    <div className="flex items-center text-[16px]">
                      {" "}
                      {/* Increased size for better visibility */}
                      <span className="text-gray-500 mr-2 text-sm">
                        {product?.shop_rating}
                      </span>
                      {getStars()}
                    </div>

                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:underline"
                    >
                      2,254 Ratings
                    </a>
                    <i className="ri-arrow-down-s-line mx-[5px]"></i>
                    <div className="flex items-center ml-auto text-xl">
                      <i className="ri-heart-line text-gray-400 cursor-pointer hover:text-red-500"></i>
                      <i className="ri-share-line text-gray-400 ml-4 cursor-pointer hover:text-blue-500"></i>
                    </div>
                  </div>

                  <div className="mt-4 relative">
                    <span className="text-[24px] font-bold text-teal-500">
                      ৳{product?.regular_price}
                    </span>
                    <span className="text-[16px] text-gray-400 line-through ml-2 absolute">
                      ৳{product?.discount_price}
                    </span>
                  </div>

                  <div className="mt-2  text-[14px] flex items-center ">
                    Promotion
                    <span className="inline-block bg-orange-100 text-[#FFFFFF] relative gradiantBg font-semibold px-2 py-1 rounded-sm pr-[30px]">
                      {product?.badges[0]?.name}

                      <i className="ri-arrow-down-s-line mx-[5px]"></i>
                      <span className="inline-block bg-white w-[20px] h-[100%] right-[-1px] top-0 absolute customPolygon"></span>
                    </span>
                  </div>
                </div>

                {/* Color & Size Selection */}
                <div className="mt-6">
                  <div className="mb-4">
                    <span className="text-[16px] font-medium text-gray-700">
                      Available Color:{" "}
                      <span className="font-bold">{selectedColor?.value}</span>
                    </span>
                    <div className="flex space-x-2 mt-2">
                      {product?.attributes?.filter((abc:any)=>abc?.name==="Color").map((item: any, i: any) => (
                        <div 
                          onClick={()=>{
                            setSelectedColor(item)
                            setSelectedThumbnail(item?.image)
                          }}
                          key={i}
                          className={`w-[56px] h-[56px] rounded-md cursor-pointer  overflow-hidden bg-cover ${
                            selectedColor?.value === item?.value
                              ? "bg-teal-50 border-teal-500 border text-teal-600"
                              : "bg-white border-gray-300 text-gray-700 border hover:bg-gray-50"
                          }`}
                        >
                          <img
                            src={item?.image}
                            alt=""
                            className="h-full w-full"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-gray-700">
                      Select Size: <span className="font-bold">{selectSize?.value}</span>
                    </span>
                    <div className="flex space-x-2 mt-2">
                      {product?.attributes?.filter((abc:any)=>abc?.name==="Ram")?.map((size:any,i:any) => (
                        <button
                        onClick={()=>setSelectedSize(size)}
                          key={i}
                          className={`px-4 py-2 border rounded-md text-sm font-medium ${
                            size?.value === selectSize?.value
                              ? "bg-teal-50 border-teal-500 text-teal-600"
                              : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {size?.value}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quantity & Add to Cart */}
                <div className="lg:flex items-center mt-6">
                  <div className="flex flex-col ">
                    <span className="text-[16px] font-medium text-gray-700 py-[11px]">
                      Quantity
                    </span>
                    <div className="flex items-center border rounded-full border-gray-300 p-[3px]">
                      <button onClick={()=>{
                        if(quantity==1){
                            return message.error('Quantity should not be zero')
                        }
                        setQuantity(prev=>prev-1)
                      }} className="h-[33px] w-[33px] text-lg text-gray-500 hover:bg-gray-100 bg-[#F1F5F9] rounded-full">
                        -
                      </button>
                      <span className="px-4 py-1 text-md font-medium">{quantity}</span>
                      <button onClick={()=>setQuantity(prev=>prev+1)} className="h-[33px] w-[33px] text-lg text-gray-500 hover:bg-gray-100 bg-[#F1F5F9] rounded-full">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-4"> 
                  <button onClick={()=>{
                    if(!selectSize?.valueId || !selectedColor?.valueId){
                        return message.error('Please select color and size')
                    }
                    if(quantity <1){
                        return message.error('Quantity should not be zero')
                    }
                    dispatch(addToCart({
                        data:data?.data,
                        color:selectedColor,
                        size:selectSize,
                        quantity
                    }))

                    setQuantity(0)
                  }} className="w-full bg-[#00A788] text-[16px] text-[#FFFFFF]  font-bold py-3 rounded-md hover:bg-teal-600 transition duration-300">
                    Add to Cart
                  </button>  
                 
                </div>
              </div>

              {/* Right Column Sub-Sections */}
              <div className="flex flex-col flex-1 gap-[16px]">
                {/* Delivery Options */}
                <div className="border w-full border-gray-200 rounded-lg px-[16px] py-[12px]">
                  <h3 className="font-semibold text-[18px] text-[#475569] mb-2 ">
                    Delivery Options
                  </h3>
                  <div className="flex flex-col  mb-[16px]">
                    <div className="flex items-center gap-[8px]">
                      <Image src={IconI} alt="" />
                      <div className="flex flex-col">
                        <span className="text-[16px] text-[#334155] ">
                          Regular
                        </span>
                        <span className="text-sm text-gray-500">
                          Delivery within 2-3 days
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center  text-[#CBD5E1] gap-[12px]">
                    <div className="flex items-center gap-[8px]">
                      <Image src={Icon2} alt="" />
                      <span className="text-[16px]">Express</span>
                    </div>
                    <span className="text-[10px] text-[#F87171] font-[600]">
                      Not Available
                    </span>
                  </div>
                  <p className="text-[16px]  text-[#CBD5E1] mt-1 pl-7">
                    Delivery within 24 Hours.
                  </p>
                </div>

                {/* Sold By */}
                <div className="border border-gray-200 rounded-lg px-[20px] py-[20px]">
                  <h3 className="text-[#475569]  text-[12px] mb-2">Sold by</h3>
                  <div className="flex items-center justify-between mb-[16px] gap-[9px]">
                    <div className="flex items-center gap-[9px] bg-white">
                      <Image src={PGIcon} alt="" />
                      <div>
                        <div className="flex items-center gap-[5px] mb-[8px]">
                          <span className=" text-[14px] text-[#475569] ">
                            {data?.data?.shop_name}
                          </span> 
                          <Image src={verified} alt="" />
                        </div>
                        <Image
                          className="h-[20px] w-[138px]"
                          src={RisingStar}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-[12px] mb-[16px]">
                    <button className="flex-1 flex items-center gap-[8px] text-[14px] justify-center bg-[#E6F8F4] text-[#00A788] py-[4px] rounded-md hover:bg-blue-100 transition">
                      <Image alt="" src={contentimg} /> Chat Now
                    </button>
                    <button className="flex-1 flex items-center font-[500] text-[14px] justify-center bg-gray-100 text-[#475569] py-[4px] rounded-md hover:bg-gray-200 transition">
                      View Shop
                    </button>
                  </div>
                  <div className="flex  justify-between mt-3 text-center text-sm">
                    <div>
                      <p className="text-[12px] text-gray-500 mb-[12px]">
                        Ship on Time
                      </p>
                      <p className="font-semibold text-[28px] text-[#64748B]">
                        100%
                      </p>
                    </div>
                    <div>
                      <p className="text-[12px] text-gray-500 mb-[12px]">
                        Chat Response
                      </p>
                      <p className="font-semibold text-[28px] text-[#64748B]">
                        90%
                      </p>
                    </div>
                    <div>
                      <p className="text-[12px] text-gray-500 mb-[12px]">
                        Shop Rating
                      </p>
                      <p className="font-semibold text-[28px] text-[#64748B]">
                        99.8%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
