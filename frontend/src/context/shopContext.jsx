
import React, { createContext, useState } from 'react';
import { products } from '../assets/assets';

export const shopContext = createContext();

const ShopContextProvider = ({ children }) => {

    // Product state
    const [productsData, setProductsData] = useState(products);

    // Currency and delivery fee
    const currency = '$';
    const delivery_fee = 10;

    // Search state
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    // Cart state
    const [cartItems, setCartItems] = useState({});

    // Add product to cart
    const addToCart = (itemId, size) => {

        if (!size) {
            alert('Please select a product size');
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
    };

    // Get total cart quantity
    const getCartCount = () => {

        let totalCount = 0;

        for (const items in cartItems) {
            for (const item in cartItems[items]) {

                if (cartItems[items][item] > 0) {
                    totalCount += cartItems[items][item];
                }

            }
        }

        return totalCount;
    };

    // Update cart quantity
    const updateQuantity = (itemId, size, quantity) => {

        let cartData = structuredClone(cartItems);

        if (cartData[itemId] && cartData[itemId][size] !== undefined) {

            if (quantity <= 0) {
                delete cartData[itemId][size];

                if (Object.keys(cartData[itemId]).length === 0) {
                    delete cartData[itemId];
                }

            } else {
                cartData[itemId][size] = quantity;
            }

        }

        setCartItems(cartData);
    };

    // Calculate total cart amount
    const getCartAmount = () => {

        let totalAmount = 0;

        for (const items in cartItems) {

            const itemInfo = productsData.find(
                (product) => product._id === items
            );

            if (itemInfo) {

                for (const item in cartItems[items]) {

                    if (cartItems[items][item] > 0) {

                        totalAmount +=
                            itemInfo.price * cartItems[items][item];

                    }

                }
            }
        }

        return totalAmount;
    };

    // Context values
    const value = {

        products: productsData,
        setProducts: setProductsData,

        currency,
        delivery_fee,

        search,
        setSearch,

        showSearch,
        setShowSearch,

        cartItems,
        setCartItems,

        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount

    };

    return (
        <shopContext.Provider value={value}>
            {children}
        </shopContext.Provider>
    );
};

export default ShopContextProvider;
