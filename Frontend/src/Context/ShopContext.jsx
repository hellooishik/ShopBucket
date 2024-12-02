import React, { createContext, useState, useEffect } from "react";
import { products as initialProducts } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "$";
    const delivery_fee = 10;
    const [products, setProducts] = useState(initialProducts);
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const addToCart = async (itemId, size) => {
        
        if (!size) {
            toast.error("example should be clear");
            return;
        }

        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);
        console.log('Updated cart:', cartData); // Debug cart state
    };
    // thi will update the current count of the cart icon
      const getCartCount = () => {
    let totalCount = 0;
    // Loop through each item in the cartItems object
    for (const itemId in cartItems) {
        // Loop through each size of the item
        for (const size in cartItems[itemId]) {
            try {
                // Add to totalCount if the quantity is greater than 0
                if (cartItems[itemId][size] > 0) {
                    totalCount += cartItems[itemId][size];
                }
            } catch (error) {
                // Handle any errors that occur
                console.error(error);
            }
        }
    }
    return totalCount;
};
const removeFromCart = (itemId, size) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId] && cartData[itemId][size]) {
        cartData[itemId][size] -= 1;
        if (cartData[itemId][size] <= 0) {
            delete cartData[itemId][size]; // Remove size if quantity is zero or less
        }
        if (Object.keys(cartData[itemId]).length === 0) {
            delete cartData[itemId]; // Remove item if no sizes remain
        }
    }
    setCartItems(cartData);
    console.log('Cart after removal:', cartData); // Debugging log
};

    const addReview = (productID, review) => {
        setProducts((prev) =>
            prev.map((product) =>
                product._id === productID
                    ? { ...product, reviews: [...(product.reviews || []), review] }
                    : product
            )
        );
    };

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        addReview,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        removeFromCart, // Add this to the context value

    };

    useEffect(() => {
        console.log('cartItems state updated:', cartItems);
    }, [cartItems]);

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
