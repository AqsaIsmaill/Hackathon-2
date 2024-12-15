import React from "react";
import { CiMail } from "react-icons/ci";
import { TbPhoneRinging } from "react-icons/tb";
import { FiUser, FiHeart, FiShoppingCart } from "react-icons/fi";
import { RxEnvelopeClosed } from "react-icons/rx";
import { PiPhoneCallBold } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";


const UpperHeader = () => {
  return (
    <div className="flex items-center justify-between h-[44px] w-full bg-purple-700 px-6">
   
      <div className="flex items-center text-white">
        <CiMail className="mr-2" />
        <a
          className="underline mr-6 hover:text-gray-300"
          href="mailto:mhhasanul@gmail.com"
        >
          mhhasanul@gmail.com
        </a>
        <TbPhoneRinging className="mr-2" />
        <a
          className="underline hover:text-gray-300"
          href="tel:(12345)67890"
        >
          (12345)67890
        </a>
      </div>

    
      <div className="flex items-center text-white gap-6">
      
        <select
          className="bg-transparent text-white border-none focus:outline-none cursor-pointer"
        >
          <option value="english">English</option>
          <option value="urdu">Urdu</option>
        </select>

        <select
          className="bg-transparent text-white border-none focus:outline-none cursor-pointer"
        >
          <option value="USD">USD</option>
          <option value="PKR">PKR</option>
        </select>

        
        <a href="/login" className="flex items-center hover:text-gray-300">
          Login <FiUser className="ml-1" />
        </a>

    
        <a href="/wishList" className="flex items-center hover:text-gray-300">
          Wishlist <FiHeart className="ml-1" />
        </a>

        <a href="/cart" className="flex items-center hover:text-gray-300">
          <FiShoppingCart />
        </a>
      </div>
                
    </div>
  );
};

export default UpperHeader;


  























