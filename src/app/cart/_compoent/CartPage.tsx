/* eslint-disable @next/next/no-img-element */
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TrashIcon from "../../../assets/trashicon.png";
import Image from "next/image";
import { addCoupon, clearCart, decrementQuantity, incrementQuantity, removeToCart, selectAll, selectById } from "@/redux/slice/cartSlice";
import FashonHouse from "../../../assets/fashonhouse.png";
import { message } from "antd";
const Cart = () => {
  const cart: any = useSelector((abc: RootState) => abc?.cart);
  const dispatch = useDispatch();
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [coupon,setaddCoupon]=useState('')
  console.log(cart, "cart");
  return (
    <div className="mx-[80px]  flex gap-[28px]">
    <div className="bg-white p-[20px] rounded-[8px] flex-1">
        <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-6">
          My Cart ({cart?.cart?.length})
        </h1>

        <div className="flex items-center text-[16px] text-[#475569] gap-[34px]">
          <h1 className="flex items-center gap-3">
            <input type="checkbox" onChange={(e)=>{
              if(e.target.checked){
                dispatch(selectAll({select:true}))
              }else{
                dispatch(selectAll({select:false}))
              }
            }} /> Select All
          </h1>
          <h1 onClick={()=>dispatch(clearCart())} className="cursor-pointer"> Clear All</h1>
        </div>
      </div>

      <div className="">
        {/* Cart Items */}
        <div>
          {cart?.cart.map((item: any, index: any) => (
            <div key={item?.data?.id} className=" mb-4">
              <div className="flex gap-2 bg-[#F1F5F9] p-[10px]">
                <input type="checkbox" checked={item?.select} 
                   onChange={(e) => {
                      if(!!item?.select){
                          dispatch(selectById({index,select:false}))
                      }
                      if(!item?.select){
                          dispatch(selectById({index,select:true}))
                      }
                  }}
                
                className="" />
                <Image alt="" src={FashonHouse} /> {item?.data?.shop_name}
              </div>
              <div className="flex items-start p-[10px]">
                <input
                  type="checkbox"
                  checked={item?.select}
                  onChange={(e) => {
                      if(!!item?.select){
                          dispatch(selectById({index,select:false}))
                      }
                      if(!item?.select){
                          dispatch(selectById({index,select:true}))
                      }
                  }}
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
                        <span className="text-[#0F172A] text-[20px] font-[700]">
                          ৳ {Number(item?.data?.discount_price)}
                        </span>
                        <del className="text-[#475569] text-[16px] font-[400] ml-[8px]">
                          ৳ {Number(item?.data?.regular_price)}
                        </del>
                      </div>
                    </div>
                    <p className="text-[#475569] text-[16px] font-[400] mb-[10px]">
                      Color: {item.color?.value}; Size: {item.size?.value}
                    </p>

                    <div className="flex items-center">
                      <div className="flex items-center w-[161px]  justify-between border rounded-full border-gray-300 p-[3px]">
                        <button
                          onClick={() => {
                            dispatch(decrementQuantity({ index }));
                          }}
                          className="h-[33px] w-[33px] text-lg text-gray-500 hover:bg-gray-100 bg-[#F1F5F9] rounded-full"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 text-md font-medium">
                          {item?.quantity}
                        </span>
                        <button
                          onClick={() => {
                            dispatch(incrementQuantity({ index }));
                          }}
                          className="h-[33px] w-[33px] text-lg text-gray-500 hover:bg-gray-100 bg-[#F1F5F9] rounded-full"
                        >
                          +
                        </button>
                      </div>

                      <Image 
                      onClick={()=>dispatch(removeToCart({index:index}))}
                        className="ml-[24px] cursor-pointer"
                        alt=" "
                        src={TrashIcon}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>





        {/* Order Summary */}
        <div className=" w-[418px] bg-white">
          <div className="border rounded-lg p-4 sticky top-4">
            <h2 className="text-[24px] font-[500] text-[#475569]  mb-[16px]">
              Order summary
            </h2>

            <div className="space-y-3 text-[#475569] text-[16px] mb-[12px]">
              <div className="flex justify-between">
                <span>Price ({cart?.cart?.length || 0} items)</span>
                <span>
                  {cart?.cart?.reduce(
                    (a: any, b: any) =>
                      a + b?.data?.discount_price * b?.quantity,
                    0
                  )}
                </span>
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
                    value={coupon}
                    onChange={(e) => setaddCoupon(e.target.value)}
                    className="w-full border rounded px-3 py-2 text-sm"
                  />
                  <button onClick={()=>{
                    dispatch(addCoupon({coupon:coupon}))
                    message.success('Coupon added successfully')
                  }} className="bg-[#00B795] absolute right-0 top-0 h-[100%]  text-[16px] w-[82px] text-white">
                    Apply
                  </button>
                </div>
              </div>

              <div className="pt-2 border-t">
                <div className="flex justify-between font-bold text-lg">
                  <span>Sub Total</span>
                  <span>$ {cart?.cart?.reduce(
                    (a: any, b: any) =>
                      a + b?.data?.discount_price * b?.quantity,
                    0
                  )}</span>
                </div>
              </div>
            </div>

            <button
              disabled={!agreeToTerms}
              onClick={()=>{
                message.success('Order placed successfully..')
                console.log({cart:cart?.cart,coupon:cart?.coupon});
              }}
              className={`w-full mt-6 py-3 rounded-lg font-medium ${
                agreeToTerms
                  ? "bg-[#00B795] text-white "
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Proceed to Checkout
            </button>

            <div className="mt-4 flex items-center  gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreeToTerms}
                onChange={() => setAgreeToTerms(!agreeToTerms)}
                className="flex-1 border rounded px-2 py-2 text-sm"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I have read and agree to the Terms and Conditions, Privacy
                Policy and Refund and Return Policy
              </label>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Cart;
