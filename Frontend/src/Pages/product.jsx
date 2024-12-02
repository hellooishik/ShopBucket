import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { toast } from 'react-toastify';

const Product = () => {
  const { productID } = useParams();
  const { products, addReview, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [review, setReview] = useState({ name: '', rating: 0, comment: '' });
  const [selectedSize, setSelectedSize] = useState('');

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productID);
    if (product) {
      setProductData(product);
      setSelectedImage(product.image[0]); // Set the first image as default
      // Fetch related products from the same category
      const related = products.filter(
        (item) => item.category === product.category && item._id !== product._id
      );
      setRelatedProducts(related);
    }
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (review.name && review.rating && review.comment) {
      addReview(productID, review); // Update reviews using context or API
      setReview({ name: '', rating: 0, comment: '' }); // Reset form

      // Refetch the product data to update the review section immediately
      fetchProductData();
    } else {
      alert('Please fill out all fields!');
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size!');
      return;
    }
    addToCart(productData._id, selectedSize); // Pass selected size with the product to cart
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
                  img === selectedImage ? 'border-blue-500' : 'border-gray-300'
                } rounded-md`}
                onClick={() => setSelectedImage(img)} // Change main image
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4">{productData.name}</h1>
          <p className="text-lg mb-6">{productData.description || 'No description available.'}</p>
          <p className="text-xl font-bold text-green-600">Price: ${productData.price}</p>
          
          {/* Size Selection */}
          <div className="mt-4">
            <h3 className="font-semibold">Select Size:</h3>
            <div className="flex gap-4 mt-2">
              {productData.sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 border rounded ${selectedSize === size ? 'bg-blue-500 text-white' : 'bg-white'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Related Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <Link
              to={`/product/${item._id}`}
              key={item._id}
              className="block border p-4 rounded-lg hover:shadow-md transition-shadow"
            >
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <p className="text-green-600 font-bold">${item.price}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
        <div>
          {productData.reviews && productData.reviews.length > 0 ? (
            productData.reviews.map((review, index) => (
              <div key={index} className="border-b py-4">
                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-yellow-500">
                  {'★'.repeat(review.rating)}{' '}
                  {'☆'.repeat(5 - review.rating)}
                </p>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews available for this product.</p>
          )}
        </div>

        {/* Add Review */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Add a Review</h3>
          <form onSubmit={handleReviewSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 border rounded"
              value={review.name}
              onChange={(e) =>
                setReview((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <select
              className="p-2 border rounded"
              value={review.rating}
              onChange={(e) =>
                setReview((prev) => ({ ...prev, rating: +e.target.value }))
              }
            >
              <option value={0}>Select Rating</option>
              {[1, 2, 3, 4, 5].map((rating) => (
                <option key={rating} value={rating}>
                  {rating} Star{rating > 1 ? 's' : ''}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Your Review"
              className="p-2 border rounded"
              value={review.comment}
              onChange={(e) =>
                setReview((prev) => ({ ...prev, comment: e.target.value }))
              }
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center mt-10">Loading...</div>
  );
};

export default Product;
