/* eslint-disable @next/next/no-img-element */
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TrashIcon from '../../../assets/trashicon.png'
import Image from "next/image";
import { decrementQuantity, incrementQuantity } from "@/redux/slice/cartSlice";

const Cart = () => {
  const cart: any = useSelector((abc: RootState) => abc?.cart);
 const dispatch=useDispatch()
  return (
    <div className="mx-[80px] p-[20px] bg-white">
      <h1 className="text-2xl font-bold mb-6">
        My Cart ({cart?.cart?.length})
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Cart Items */}
        <div className="md:w-2/3">
          {cart?.cart.map((item: any,index:any) => (
            <div key={item?.data?.id} className="border rounded-lg p-4 mb-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  //   checked={item.selected}
                  //   onChange={() => toggleSelect(item.id)}
                  className="mt-1 mr-3"
                />

                <div className="flex-1 flex">
                  <img
                    src={item?.data?.thumbnail}
                    alt=""
                    width={100}
                    height={100}
                  />
                  <div className="flex-1">
                    <div className="font-medium text-gray-700">
                      {item?.data?.store}
                    </div>
                    <div className="flex justify-between">
                      <h3 className="font-[500] text-[16px] mt-1 mb-[10px]">
                        {item?.data?.name}
                      </h3>

                      <div>
                        <span className="text-[#0F172A] text-[20px] font-[700]">৳ {Number(item?.data?.discount_price)}</span>
                        <del className="text-[#475569] text-[16px] font-[400] ml-[8px]">৳ {Number(item?.data?.regular_price)}</del>
                      </div>
                    </div>
                    <p className="text-[#475569] text-[16px] font-[400] mb-[10px]">
                      Color: {item.color?.value}; Size: {item.size?.value}
                    </p>

              <div className="flex items-center">
                      <div className="flex items-center w-[161px]  justify-between border rounded-full border-gray-300 p-[3px]">
                      <button onClick={()=>{
                  
                        dispatch(decrementQuantity({index}))
                      }} className="h-[33px] w-[33px] text-lg text-gray-500 hover:bg-gray-100 bg-[#F1F5F9] rounded-full">
                        -
                      </button>
                      <span className="px-4 py-1 text-md font-medium">{item?.quantity}</span>
                      <button onClick={()=>{
                     
                        dispatch(incrementQuantity({index}))
                      }} className="h-[33px] w-[33px] text-lg text-gray-500 hover:bg-gray-100 bg-[#F1F5F9] rounded-full">
                        +
                      </button>
                    </div>

                    <Image className="ml-[24px] cursor-pointer" alt=" " src={TrashIcon} />
              </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="md:w-1/3 ">
          <div className="border rounded-lg p-4 sticky top-4">
            <h2 className="text-[24px] font-[500] text-[#475569]  mb-[16px]">Order summary</h2>

            <div className="space-y-3 text-[#475569] text-[16px] mb-[12px]">
              <div className="flex justify-between">
                <span>Price ({0} items)</span>
                <span>0</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping fee</span>
                <span className="text-[#3B82F6] text-[14px]">To be added</span>
              </div>

              <div className="pt-2">
                <div className="flex justify-between mb-2">
                  <span>Store / Falcon coupon</span>
                  
                </div>
                <div className="relative">

                <input
                  type="text"
                  placeholder="Enter coupon code"
                  //   value={couponCode}
                  //   onChange={(e) => setCouponCode(e.target.value)}
                  className="w-full border rounded px-3 py-2 text-sm"
                  />
                  <button className="bg-[#00B795] absolute right-0 top-0 h-[100%]  text-[16px] w-[82px] text-white">Apply</button>
                  </div>
              </div>

              <div className="pt-2 border-t">
                <div className="flex justify-between font-bold text-lg">
                  <span>Sub Total</span>
                  <span>$00</span>
                </div>
              </div>
            </div>

            <button
              //   disabled={!agreeToTerms}
              className={`w-full mt-6 py-3 rounded-lg font-medium ${
                true
                  ? "bg-[#00B795] text-white "
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Proceed to Checkout
            </button>

            <div className="mt-4 flex items-start">
              <input
                type="checkbox"
                id="terms"
                // checked={agreeToTerms}
                // onChange={() => setAgreeToTerms(!agreeToTerms)}
                className="mt-1 mr-2"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I have read and agree to the Terms and Conditions, Privacy
                Policy and Refund and Return Policy
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
