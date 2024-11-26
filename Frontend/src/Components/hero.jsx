import React from 'react';
import assets from "../assets/assets";

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>

      {/* hero side left */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
          <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
          <p className='font-medium text-sm md:text-base'>Our BestSeller</p>
        </div>
        <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Letsets Arrival</h1>
        <div className='flex items-center gap-2'>
          <p className='font-semibold text-sm md:text-base'>Shop Now</p>
          <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
        </div>
      </div>

      {/* hero side right - image */}
      <div className='w-full sm:w-1/2 flex items-center justify-center'>
        <img src={assets.hero_img} alt="Hero" className='object-cover w-full h-full' />
      </div>

    </div>
  );
}

export default Hero;
