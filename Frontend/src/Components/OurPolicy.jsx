import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

        <div>
            <img src={assets.exchange_icon} className='w-10 m-auto mb-5' alt="" srcset="" />
            <p className='font-semibold'>Easy Exchange Policies</p>
            <p className='text-gray-700'>We Offers hustle free Exhange Policies</p>
        </div>
    </div>
  )
}

export default OurPolicy