
import React from 'react';
import woman from '../assets/woman.jpg';

import {
  FiArrowRight,
  FiStar,
  FiSend,
  FiYoutube,
} from 'react-icons/fi';

import { FaShippingFast } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { MdPayment } from 'react-icons/md';

const Hero = () => {
  const features = [
    {
      icon: <FaShippingFast />,
      title: 'Free Shipping',
      text: 'All orders over $100',
    },
    {
      icon: <FiSend />,
      title: 'Fast Delivery',
      text: 'Worldwide in 4-6 days',
    },
    {
      icon: <BiSupport />,
      title: '24/7 Support',
      text: 'Expert fashion advice',
    },
    {
      icon: <MdPayment />,
      title: 'Secure Payment',
      text: '100% encrypted payment',
    },
  ];

  return (
    <section className="w-full bg-gray-50 overflow-hidden">

      {/* ================= HERO SECTION ================= */}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-14">

        {/* LEFT CONTENT */}

        <div className="space-y-7 z-10">

          <span className="inline-flex items-center gap-3 bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-semibold">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            New Collection Arrival
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
            See Your
            <br />
            Cloth
            <span className="text-orange-500"> Style.</span>
          </h1>

          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg">
            Discover the latest fashion trends with our exclusive
            clothing collection. Find your perfect style and
            express yourself with confidence.
          </p>

          {/* BUTTONS */}

          <div className="flex flex-wrap items-center gap-4">

            <button className="flex items-center gap-3 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-orange-200 hover:bg-orange-600 hover:scale-105 transition-all duration-300">
              Shop Collection
              <FiArrowRight className="text-xl" />
            </button>

            <button className="border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300">
              View Lookbook
            </button>

          </div>

          {/* HAPPY CUSTOMERS */}

          <div className="flex items-center gap-4 pt-5">

            <div className="flex -space-x-3">

              {['A', 'B', 'C'].map((name) => (
                <div
                  key={name}
                  className="w-11 h-11 rounded-full border-4 border-gray-50 bg-orange-200 flex items-center justify-center text-orange-700 font-bold"
                >
                  {name}
                </div>
              ))}

            </div>

            <div>

              <div className="flex items-center gap-2">

                <h3 className="text-2xl font-bold text-gray-900">
                  50+
                </h3>

                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar key={star} className="fill-yellow-400" />
                  ))}
                </div>

              </div>

              <p className="text-sm text-gray-500">
                Happy Customers
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT IMAGE SECTION */}

        <div className="relative flex justify-center items-center">

          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-orange-200 rounded-full blur-2xl opacity-50"></div>

          <div className="absolute w-80 h-80 sm:w-[420px] sm:h-[420px] border-2 border-orange-200 rounded-full"></div>

          <img
            src={woman}
            alt="Fashion model wearing modern clothing"
            className="relative z-10 w-full max-w-md h-[420px] sm:h-[500px] object-cover rounded-[40px] shadow-2xl"
          />

          {/* DISCOUNT CARD */}

          <div className="absolute z-20 bottom-8 -left-2 sm:left-0 bg-white shadow-xl rounded-2xl px-6 py-5">

            <p className="text-xs text-gray-500 font-medium">
              Special Offer
            </p>

            <h3 className="text-3xl font-bold text-orange-500">
              30% OFF
            </h3>

            <p className="text-xs text-gray-400">
              New Collection
            </p>

          </div>

          {/* FLOATING TEXT CARD */}

          <div className="absolute z-20 top-8 -right-2 sm:-right-5 bg-white shadow-xl rounded-2xl px-5 py-4">

            <h3 className="font-bold text-gray-900">
              Endalew Fashion
            </h3>

            <p className="text-xs text-gray-500">
              Your Style, Your Identity
            </p>

          </div>

        </div>

      </div>

      {/* ================= FEATURES SECTION ================= */}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature, index) => (

            <div
              key={index}
              className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-14 h-14 flex items-center justify-center bg-orange-100 text-orange-500 text-2xl rounded-xl">
                {feature.icon}
              </div>

              <div>

                <h3 className="font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {feature.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* ================= YOUTUBE SUBSCRIPTION ================= */}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">

        <div className="relative bg-gray-900 rounded-3xl overflow-hidden px-8 py-14 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">

          {/* LEFT CONTENT */}

          <div className="max-w-xl text-center md:text-left">

            <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">
              Special Membership
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 leading-tight">
              Welcome to
              <span className="text-orange-500">
                {' '}Endalew E-commerce
              </span>
            </h2>

            <p className="text-gray-300 mt-5 leading-relaxed">
              Subscribe to our YouTube channel and stay updated
              with the latest fashion trends, new arrivals,
              styling tips, and exclusive shopping offers.
            </p>

            <p className="text-orange-400 font-bold text-2xl mt-5">
              Get 10% OFF
            </p>

            <p className="text-gray-400 text-sm mt-1">
              Enjoy a special discount on your next purchase.
            </p>

            <button className="mt-7 inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-300">

              <FiYoutube className="text-2xl" />

              Subscribe to YouTube

              <FiArrowRight />

            </button>

          </div>

          {/* RIGHT CONTENT */}

          <div className="flex justify-center items-center">

            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">

              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-orange-500 flex items-center justify-center">

                <FiYoutube className="text-white text-7xl md:text-8xl" />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
