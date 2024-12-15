import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='justify center item center '>
      <div className="layout-container w-full bg-[#F3F3F3] overflow-hidden 
       flex flex-col md:flex-row items-center justify-between">

{/* Left Panl: For Moble and Desktop */}
<div className="panel-left w-full md:w-1/2 h-full flex flex-col md:flex-row items-center justify-start px-5 md:px-14 relative">

  {/* Decorativ Bulb */}
  <div className="bulb-holder relative md:absolute top-[-30px] left-[-40px] md:left-[-90px]  ">
    <Image src="/images/bulb.png" alt="Bulb" width={300} height={300} className="responsive-image" />
  </div>

  {/* Textual Infomation */}
  <div className="text-section relative mt-4 md:mt-0 md:ml-20 text-center md:text-left ">
    {/* Introductory Highlite */}
    <p className="highlight-text text-[#FB2E86] text-lg md:text-xl font-light mb-2">
      Perfect Furtniture for Your Home...
    </p>

    {/* Heading */}
    <h1 className="heading text-2xl md:text-4xl font-bold text-black mb-4 leading-relaxed">
      Trendy Furniture Designs for 2020
    </h1>

    {/* Supportng Paragrph */}
    <p className="subtext text-sm md:text-lg text-gray-600 mb-6">
      High-qulity pieces crafted to blend with any interor style. <br />
      Redefine elegnace and cmfort.
    </p>

    {/* Actoin Buttton */}
    <Link href="WishList">
      <button className="shop-button px-5 py-2 bg-[#FB2E86] text-white rounded-lg shadow-lg hover:bg-pink-500">
        Shop Now
      </button>
    </Link>
  </div>
</div>

{/* Right Panal: Product Showcase */}
<div className="panel-right w-full md:w-1/2 h-full flex flex-col items-center justify-start relative">

  {/* Featred Product */}
  <div className="product-image relative z-10 mt-[80px] mb-[20px] size-[100]">
    <Image src="/images/sofa.png" alt=" Sofa-Piece" width={350} height={250}
     className="sofa-image" />
  </div>

  </div>
</div>

</div>



   
  )
}

export default Hero

