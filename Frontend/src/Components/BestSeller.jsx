import React, {  useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useContext } from 'react'
import Title from '../Components/Tittle';
import ProductItems from './ProductItems';
const BestSeller = () => {
    const { products } = useContext(ShopContext); // Access products from context
    const [bestSeller, setBestSeller] = useState([]); // State to store best sellers
  
    useEffect(() => {
      // Check if products exist and filter for best sellers
      if (products && products.length > 0) {
        const bestProduct = products.filter((item) => item.bestseller); // Corrected key to 'bestseller'
        setBestSeller(bestProduct.slice(0, 5)); // Limit to top 10 best sellers
      }
    }, [products]); // Add 'products' as a dependency
  
    // Debugging logs
    console.log('Products in Context:', products);
    console.log('Filtered Best Sellers:', bestSeller);
  
    return (
      <div className="my-10">
        <div className="text-center text-3xl py-8">
          <Title text1={"BEST"} text2={"SELLERS"} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700">
            Find your best products
          </p>
        </div>
  
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {bestSeller.length > 0 ? (
            bestSeller.map((item) => (
              <ProductItems
                key={item._id} // Use _id as the unique key
                id={item._id}
                name={item.name}
                image={item.image} // Safely access the first image
                price={item.price}
              />
            ))
          ) : (
            <p className="text-center col-span-full">No best sellers found.</p>
          )}
        </div>
      </div>
    );
  };
  
  export default BestSeller;
  
