import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Product = () => {
  const { productID } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productID);
    if (product) {
      setProductData(product);
      setSelectedImage(product.image[0]); // Set the first image as default
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productID, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images Section */}
        <div className="flex-1 flex flex-col gap-3">
          <img
            src={selectedImage}
            alt="Selected Product"
            className="w-full h-auto border border-gray-300 rounded-lg"
          />
          <div className="flex flex-wrap gap-3 mt-4">
            {productData.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product Thumbnail ${index + 1}`}
                className={`w-20 h-20 object-cover cursor-pointer border ${
                  img === selectedImage
                    ? 'border-blue-500'
                    : 'border-gray-300'
                } rounded-md`}
                onClick={() => setSelectedImage(img)} // Change main image
              />
            ))}
          </div>
        </div>
        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4">{productData.name}</h1>
          <p className="text-lg mb-6">{productData.description}</p>
          <p className="text-xl font-bold text-green-600">Price: ${productData.price}</p>
          {/* Add to Cart Button */}
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center mt-10">Loading...</div>
  );
};

export default Product;
