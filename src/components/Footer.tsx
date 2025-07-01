// components/Footer.tsx
"use client";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import Image from "next/image";
import Logo from "../assets/falcon.png";
import LocationIcon from "../assets/location.png";
import PhoneIcon from "../assets/phoneicon.png";
import EmailIcon from "../assets/emailicon.png";
import FacebookIcon from "../assets/facebookicon.png";
import InstagramIcon from "../assets/instagramicon.png";
import TwiterIcon from "../assets/formkit_twitter.png";
import CustomerSupport from "../assets/customer-support (1).png";
import Google from "../assets/Google.png";
import Apple from "../assets/apple.png";
import Payment from "../assets/payment.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B1220] text-white md:p-[80px] p-[10px] lg:px-20">
      <div className="md:flex justify-between gap-8">
        {/* Logo and Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src={Logo} alt="Falcon Logo" width={48} height={48} />
            <h1 className="text-[48px] font-bold">FALCON</h1>
          </div>
          <p className=" text-[#F1F5F9] text-[14px] mb-4">
            Experience our new platform & Enjoy <br /> exciting deals and offers
            on your day to day
          </p>
          <div className="text-sm mt-[16px] mb-[32px]">
            <div className="flex items-center gap-2 mb-[16px]">
              <Image alt="" src={LocationIcon} className="text-lg" />
              <span className="text-[14px]">
                House #64, Road 13, ASA Center, Uttara, Dhaka-1402
              </span>
            </div>
            <div className="flex items-center gap-2 mb-[16px]">
              <Image src={PhoneIcon} alt="" />
              <span className="text-[14px]">01729-1497201</span>
            </div>
            <div className="flex items-center gap-2 mb-[16px]">
              <Image src={EmailIcon} alt="" />
              <span className="text-[14px]">falcon@gmail.com</span>
            </div>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className=" text-[18px] font-[500] text-[#94A3B8] mb-[12px]">
            ABOUT
          </h3>
          <ul className="space-y-[8px] text-[16px] text-[#FFFFFF] text-[500]">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Cancellation & Returns</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className=" text-[18px] font-[500] text-[#94A3B8] mb-[12px]">
            HELP
          </h3>
          <ul className="space-y-[8px] text-[16px] text-[#FFFFFF] text-[500]">
            <li>Payments</li>
            <li>Shipping</li>
            <li>My Orders</li>
            <li>FAQs</li>
            <li>Terms of Use</li>
            <li>Security</li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* Support & Apps */}
        <div>
          <h3 className=" text-[18px] font-[500] text-[#94A3B8] mb-[12px]">
            Need Support?
          </h3>
          <div className="border flex items-center border-[#F1F5F9] gap-[8px] w-[169px] text-white justify-center  py-[8px] rounded-md  text-[16px] mb-6">
            <Image alt="" src={CustomerSupport} /> 10724-7814XX
          </div>
          <h3 className="font-semibold text-[#94A3B8] text-[18px] mb-4">
            DOWNLOAD APP
          </h3>
          <div className="space-y-3">
            <Image src={Google} alt="Google Play" width={169} height={40} />
            <Image src={Apple} alt="App Store" width={169} height={40} />
          </div>
        </div>
      </div>
      <div className="md:flex items-center justify-between">
        <div className="flex gap-[16px] mt-4">
          <span>Follow us on</span>
          <Image src={FacebookIcon} width={32} height={32} alt="" />
          <Image src={InstagramIcon} width={32} height={32} alt="" />
          <Image src={TwiterIcon} width={32} height={32} alt="" />
        </div>

        <Image src={Payment} alt="" />
      </div>
      <hr className="my-8 border-gray-700" />

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row justify-center items-center  text-sm text-gray-400 gap-4">
        <p>Falcon ©2025. Design by xyz</p>
      </div>
    </footer>
  );
};

export default Footer;
