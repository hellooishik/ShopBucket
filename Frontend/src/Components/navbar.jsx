import React, { useState } from 'react';
import { assets } from "../assets/assets";
import logo from '../assets/logo.png'; // Directly import the logo image
import { NavLink, Link } from 'react-router-dom'; // Ensure Link is imported
import '../index.css';

const Navbar = () => {
  // State for showing the responsive sidebar
  const [visible, setVisible] = useState(false);

  return (
    <div className='flex items-center justify-between py-5 font-sm'>
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-36" />

      {/* Navigation Links */}
      <ul className='hidden sm:flex gap-5 text-lg text-gray-700'>
        <NavLink 
          to='/' 
          className={({ isActive }) => 
            isActive ? 'active flex flex-col items-center gap-1' : 'flex flex-col items-center gap-1'
          }
        >
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>
        <NavLink 
          to='/about' 
          className={({ isActive }) => 
            isActive ? 'active flex flex-col items-center gap-1' : 'flex flex-col items-center gap-1'
          }
        >
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>
        <NavLink 
          to='/collection' 
          className={({ isActive }) => 
            isActive ? 'active flex flex-col items-center gap-1' : 'flex flex-col items-center gap-1'
          }
        >
          <p>Collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>
        <NavLink 
          to='/contact' 
          className={({ isActive }) => 
            isActive ? 'active flex flex-col items-center gap-1' : 'flex flex-col items-center gap-1'
          }
        >
          <p>Contact Us</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>
      </ul>

      {/* Icons Section */}
      <div className='flex items-center gap-5'>
        {/* Search Icon */}
        <img 
          src={assets.search_icon} 
          className='w-6 cursor-pointer' 
          alt="Search Icon" 
        />

        {/* Profile Dropdown */}
        <div className='relative group'>
          <img 
            src={assets.profile_icon} 
            className='w-6 cursor-pointer' 
            alt="Profile Icon" 
          />
          <div className='hidden absolute right-0 pt-4 group-hover:block'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-50 text-gray-700 rounded shadow-lg'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        {/* Cart Icon */}
        <Link to='/cart' className='relative'>
          <img 
            src={assets.cart_icon} 
            className='w-6 cursor-pointer' 
            alt="Cart Icon" 
          />
          <p className='absolute -right-1 -bottom-1 w-4 text-xs text-white text-center leading-4 bg-black rounded-full'>
            10
          </p>
        </Link>

        {/* Menu Icon for Mobile */}
        <img 
          onClick={() => setVisible(!visible)} 
          src={assets.menu_icon} 
          className='w-5 cursor-pointer sm:hidden' 
          alt="Menu Icon" 
        />
      </div>

      {/* Sidebar Menu for Mobile */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-grey-600'>
          <div 
            onClick={() => setVisible(false)} 
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} alt="Back Icon" className="h-4 rotate-180" />
            <p>Back</p>
          </div>

          {/* Sidebar Menu Links */}
          <NavLink to='/' className="p-3">Home</NavLink>
          <NavLink to='/about' className="p-3">About</NavLink>
          <NavLink to='/collection' className="p-3">Collection</NavLink>
          <NavLink to='/contact' className="p-3">Contact Us</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
