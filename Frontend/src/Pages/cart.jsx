import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";

const Cart = () => {
  const { products, currency, cartItems, addToCart, removeFromCart } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const deliveryFee = 10; // Delivery fee constant

  // Update cartData and total price whenever cartItems changes
  useEffect(() => {
    const tempData = [];
    let tempTotalPrice = 0;
    // this will set the tempData overview

    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        if (cartItems[productId][size] > 0) {
          const productData = products.find((p) => p._id === productId);
          if (productData) {
            tempData.push({
              _id: productId,
              size: size,
              quantity: cartItems[productId][size],
              price: productData.price * cartItems[productId][size],
            });
            tempTotalPrice += productData.price * cartItems[productId][size];
          }
        }
      }
    }

    setCartData(tempData);
    setTotalPrice(tempTotalPrice);
  }, [cartItems, products]);

  // Increment quantity of an item
  const handleAddQuantity = (itemId, size) => {
    addToCart(itemId, size); // Use addToCart from context
  };

  // Decrement quantity of an item
  const handleRemoveQuantity = (itemId, size) => {
    removeFromCart(itemId, size); // Use removeFromCart from context
  };

  const totalWithDelivery = totalPrice + deliveryFee; // Total price including delivery

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <h1>
          YOUR <span className="font-bold">CART</span>
        </h1>
      </div>
      {cartData.length > 0 ? (
        <>
          {cartData.map((item) => {
            const productData = products.find(
              (product) => item._id === product._id
            );

            if (!productData) {
              return null;
            }

            return (
              <div
                key={`${item._id}-${item.size}`}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_2fr_1fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img
                    className="w-16 sm:w-20"
                    src={productData.image[0]} // Assuming the image is an array
                    alt={productData.name}
                  />
                  <div className="flex flex-col">
                    <p className="text-xs sm:text-lg font-medium">
                      {productData.name}
                    </p>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                    <p className="text-sm text-gray-500">
                      {currency} {productData.price} x {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-sm text-right">
                  {currency} {item.price}
                </div>
                <div className="flex items-center">
                  <button
                    className="px-2 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => handleRemoveQuantity(item._id, item.size)}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="px-2 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => handleAddQuantity(item._id, item.size)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleRemoveQuantity(item._id, item.size)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <div className="mt-6">
            <div className="flex justify-between text-lg">
              <span>Items Total:</span>
              <span>
                {currency} {totalPrice}
              </span>
            </div>
            <div className="flex justify-between text-lg mt-2">
              <span>Delivery Fee:</span>
              <span>
                {currency} {deliveryFee}
              </span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-4">
              <span>Total:</span>
              <span>
                {currency} {totalWithDelivery}
              </span>
            </div>
            <div className="flex justify-end my-10">
            <div className="w-full sm:w-[450px]">
            <button
              className="w-full text-end bg-black text-white text-xl my-2 px-8 py-8"
              onClick={() => alert("Proceeding to checkout!")}
            >
              Proceed to Checkout
            </button>
            </div>
          </div>
          </div>
        </>
      ) : (
        <p className="text-gray-500 mt-4">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
