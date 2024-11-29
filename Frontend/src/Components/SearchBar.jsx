import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';


const SearchBar = () => {
    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible, setVisible] = useState(false)
    const location = useLocation();
    useEffect(()=>{
       if (location.pathname.includes('collection')) {
        setVisible(true);
       }else{
        setVisible(false);
       }
    },[location])

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center py-4">
  {/* Search Bar Container */}
  <div className="inline-flex items-center justify-between border border-gray-400 px-4 py-2 mx-auto my-4 rounded-full w-3/4 max-w-lg">
    {/* Search Input */}
    <input 
      value={search} 
      onChange={(e) => setSearch(e.target.value)} 
      className="flex-1 outline-none bg-transparent text-sm text-gray-700 placeholder-gray-500" 
      type="text" 
      placeholder="Search Here" 
    />
    {/* Search Icon */}
    <img 
      className="w-5 h-5 ml-2 cursor-pointer" 
      src={assets.search_icon} 
      alt="Search icon" 
    />
  </div>
  {/* Close Button */}
  <img 
    onClick={() => setShowSearch(false)} 
    className="inline-block w-3 h-3 cursor-pointer mx-auto gap-3 ml-3" 
    src={assets.cross_icon} 
    alt="Close search bar" 
  />
</div>
  ):null
}

export default SearchBar