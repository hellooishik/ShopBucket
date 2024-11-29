import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" srcset="" />
            <p className='w-full md:w-2/3 text-gray-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis modi alias soluta reiciendis veritatis quasi aut at ad vel, reprehenderit error quidem excepturi aliquid placeat amet ex culpa quaerat blanditiis!
            </p>
        </div>
        <div>
            <h3 className='text-lg font-bold mb-5'>Quick Links</h3>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Poilcies</li>
            </ul>
        </div>
        <div>
            <h3 className='text-lg font-bold mb-5'>Get In Touch</h3>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1 2200 5520 5520</li>
                <li>admin@forever.com</li>

                {/* The set to integere will be set to the main frame  */}
               
            </ul>
        </div>
     
    </div>
    <div className='text-center'>
        <hr />
        <p className='text-gray-600 font-medium py-5 mb-5'>Copyright @2024 Forever ||    All rights Reserve</p>
        </div>
    </div>
  )
}

export default Footer