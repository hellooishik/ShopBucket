import React, { useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useContext } from 'react'
import Tittle from './Tittle';
import ProductItems from './ProductItems';
// This set will be connected to the main domain chain overview  

const LetestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10))
    }, [])
    console.log(products);

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Tittle text1={'LATEST'} text2={'COLLECTION'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-green-700'>Try Our Colletion Designs</p>
        </div>

        {/* Rendering the products  */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>

            {
                latestProducts.map((item, index) => (
                    <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>
    </div>
    // this set will be set for the main module overview 
  )
}

export default LetestCollection