import React from 'react';
import {assets} from "../assets/assets";

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>

      {/* hero side left */}
      <div className="w-full sm:w-1/2 flex flex-col items-center justify-center py-10 sm:py-0">
  {/* Section Title */}
  <div className="text-[#414141] text-center mb-4">
    <p className="w-8 md:w-11 h-[2px] bg-[#414141] mx-auto"></p>
    <p className="font-medium text-sm md:text-base">Our BestSeller</p>
  </div>

  {/* Main Heading */}
  <h1 className="prata-regular sm:text-4xl lg:text-5xl leading-relaxed text-center font-bold mb-6">
    Letsets Arrival
  </h1>

  {/* Shop Now Section */}
  <div className="flex items-center gap-2 justify-center">
    <p className="font-semibold text-sm md:text-base">Shop Now</p>
    <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
  </div>
</div>



      <div className='w-full sm:w-1/2 flex items-center justify-center'>
        <img src={assets.hero_img} alt="Hero" className='object-cover w-full h-full' />
      </div>

    </div>
  );
}

export default Hero;
