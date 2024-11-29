import React, { useContext, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'

const Collections = () => {
    const {products} = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(true);


  return (
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        <div className="min-2-60">
            <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>
            FILTERS
            </p>
            <img
          className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
          src={assets.dropdown_icon}
          alt=""
        />
            {/* sub-category filters */}
            <div className={`border border-gray-300 pl-5 py-3 m-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}>
<p className="mb-3 text-sm font-medium">CATEGORIES</p>
<div className="flex flex-col gap-2 text-sm font-light text-gray-700">
    </div>
           
              <p className="flex gap-2 font-medium">
             CATEGORY
              </p>
              <p className='flex gap-2'>
<input className='w-3' type='checkbox' value={'Men'}/> Men
</p>
<p className='flex gap-2'>
<input className='w-3' type='checkbox' value={'Women'}/> Men
</p>
<p className='flex gap-2'>
<input className='w-3' type='checkbox' value={'Kids'}/> Men
</p>
            </div>
            <div className={`border border-gray-300 pl-5 py-3 m-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}>
<p className="mb-3 text-sm font-medium">SUB-CATEGORIES</p>
<div className="flex flex-col gap-2 text-sm font-light text-gray-700">
    </div>
           
              <p className="flex gap-2 font-medium">
             CATEGORY
              </p>
              <p className='flex gap-2'>
<input className='w-3' type='checkbox' value={'TopWear'}/> Top-Wear
</p>
<p className='flex gap-2'>
<input className='w-3' type='checkbox' value={'BottomWear'}/> Bottom-Wear
</p>
<p className='flex gap-2'>
<input className='w-3' type='checkbox' value={'WinterWare'}/> Winter-Wear 
</p>
            </div>



        </div>
      </div>
      // the module will be comes from the main module overview

      // the set of the integers will be set to the main module overview  
  )
}

export default Collections