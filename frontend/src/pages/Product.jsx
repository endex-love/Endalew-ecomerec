
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { shopContext } from '../context/shopContext';

import { FiTruck, FiShield, FiRefreshCcw } from 'react-icons/fi';

const Product = () => {

    // Get product ID from URL
    const { productId } = useParams();

    // Get data from Context
    const {
        products,
        currency,
        addToCart
    } = useContext(shopContext);

    // States
    const [productData, setProductData] = useState(null);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');

    // Find product
    const fetchData = () => {

        const product = products.find(
            (item) => item._id === productId
        );

        if (product) {
            setProductData(product);
            setImage(product.image[0]);
        } else {
            setProductData(null);
        }
    };

    // Load product
    useEffect(() => {

        fetchData();

        window.scrollTo(0, 0);

    }, [productId, products]);

    // Add to cart
    const handleAddToCart = () => {

        addToCart(productId, size);

    };

    return productData ? (

        <div className="border-t pt-10 px-4 sm:px-10">

            {/* Product Details */}
            <div className="flex flex-col lg:flex-row gap-12">

                {/* Product Images */}
                <div className="flex-1 flex flex-col-reverse sm:flex-row gap-4">

                    {/* Small Images */}
                    <div className="flex sm:flex-col gap-3 overflow-x-auto">

                        {productData.image.map((item, index) => (

                            <img
                                key={index}
                                onClick={() => setImage(item)}
                                src={item}
                                alt={productData.name}
                                className="w-20 h-24 object-cover cursor-pointer border"
                            />

                        ))}

                    </div>

                    {/* Main Image */}
                    <div className="flex-1">

                        <img
                            src={image}
                            alt={productData.name}
                            className="w-full max-h-[550px] object-cover"
                        />

                    </div>

                </div>

                {/* Product Information */}
                <div className="flex-1">

                    {/* Breadcrumb */}
                    <nav className="text-gray-500 mb-5">

                        <span>Home</span>
                        {' / '}
                        <span>{productData.category}</span>
                        {' / '}
                        <span>{productData.name}</span>

                    </nav>

                    {/* Product Name */}
                    <h1 className="text-3xl font-semibold mb-4">

                        {productData.name}

                    </h1>

                    {/* Price */}
                    <div className="flex items-center gap-4 mb-5">

                        <p className="text-2xl font-bold">

                            {currency}{productData.price}

                        </p>

                        <span className="text-green-600">

                            In Stock

                        </span>

                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6">

                        {productData.description}

                    </p>

                    {/* Select Size */}
                    <div className="mb-6">

                        <div className="flex justify-between mb-4">

                            <p className="font-medium">

                                Select Size

                            </p>

                            <button className="text-sm underline">

                                Size Guide

                            </button>

                        </div>

                        <div className="flex gap-3">

                            {productData.sizes.map((item, index) => (

                                <button
                                    key={index}
                                    onClick={() => setSize(item)}
                                    className={`border px-5 py-2 ${
                                        size === item
                                            ? 'border-black bg-black text-white'
                                            : 'border-gray-300'
                                    }`}
                                >

                                    {item}

                                </button>

                            ))}

                        </div>

                    </div>

                    {/* Add To Cart */}
                    <button
                        onClick={handleAddToCart}
                        className="bg-black text-white px-10 py-3 hover:bg-gray-800"
                    >

                        ADD TO BAG

                    </button>

                    {/* Delivery Information */}
                    <div className="mt-8 border-t pt-6 space-y-5">

                        <div className="flex items-center gap-4">

                            <FiTruck size={22} />

                            <p>
                                Free express delivery on orders over {currency}170
                            </p>

                        </div>

                        <div className="flex items-center gap-4">

                            <FiShield size={22} />

                            <p>
                                Secure payment platform
                            </p>

                        </div>

                        <div className="flex items-center gap-4">

                            <FiRefreshCcw size={22} />

                            <p>
                                30-days hassle-free return policy
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    ) : (

        <div className="text-center py-20">

            <h2 className="text-2xl font-semibold">

                Product Not Found

            </h2>

        </div>

    );

};

export default Product;
