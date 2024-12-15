import React from 'react'
import { CiSearch } from 'react-icons/ci'


 
 const Navbar = () => {
    return (
        <div>
           
            {/* Navbar Container with White Background */}
            <div className="w-[1177px] h-[40px] gap-20 bg-white flex items-center relative" 
            style={{ marginTop: "44px", marginLeft: "250px" , marginBottom:"10px"}}>
               
                <div 
                    className="text-[#0D0E43] font-[Josefin Sans] font-[700] text-[34px] leading-[34px]
                     flex items-center justify-start px-[90px] space-x-[8px]"
                    style={{ width: "98px", height: "34px" }}
                >
                    HEKTO
                </div>

                {/* Navbar Links */}
                <div className="flex items-center space-x-[30px]" style={{ marginLeft: "80px" }}>
                <select
          className="bg-transparent font-[Lato] text-[#FB2E86] border-none focus:outline-none cursor-pointer"
        >
          <option className='text-black' value="home">Home</option>
          <option className='text-black' value="shop">Shop</option>
        </select>
                     
                    <span className="text-[#0D0E43] cursor-pointer font-[Lato] font-[400] text-[16px]">Pages</span>
                    <span className="text-[#0D0E43] cursor-pointer font-[Lato] font-[400] text-[16px]">Products</span>
                    <span className="text-[#0D0E43] cursor-pointer font-[Lato] font-[400] text-[16px]">Blog</span>
                    <span className="text-[#0D0E43] cursor-pointer font-[Lato] font-[400] text-[16px]">Shop</span>
                    <span className="text-[#0D0E43] cursor-pointer font-[Lato] font-[400] text-[16px]">Contact</span>
                </div>

                {/* Search Bar and Icon */}
                <div className="flex items-center ml-10px justi fy-start px-[190px] ">
                    <input 
                        type="text" 
                        className="w-[317px] h-[40px] border border-[#E6E6E6] px-4 text-[#333] text-[16px] rounded-l"
                    />
                    <div className="w-[51px] h-[40px] bg-[#FB2E86] flex items-center justify-center rounded-r">
                        <CiSearch className="w-[24px] h-[24px] text-white" />
                    </div>
                </div>
            </div>


     </div>
   )
 }
 
 export default Navbar
 
