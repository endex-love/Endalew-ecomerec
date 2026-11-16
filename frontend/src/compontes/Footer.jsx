import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaStore,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';

const Footer = () => {

  return (
    <footer className="bg-gray-950 text-gray-300">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Information */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-5">
              <FaStore className="text-3xl text-orange-500" />
              <h2 className="text-2xl font-bold text-white">
                BRAND <span className="text-orange-500">CLOTH</span>
              </h2>
            </Link>

            <p className="text-gray-400 leading-relaxed mb-6">
              Discover your unique style with our latest fashion collections.
              We bring you quality clothing, modern designs, and affordable prices.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4">

              <a href="https://facebook.com" aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 hover:text-white transition">
                <FaFacebookF />
              </a>

              <a href="https://instagram.com" aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 hover:text-white transition">
                <FaInstagram />
              </a>

              <a href="https://twitter.com" aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 hover:text-white transition">
                <FaTwitter />
              </a>

              <a href="https://tiktok.com" aria-label="TikTok"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 hover:text-white transition">
                <FaTiktok />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link to="/" className="hover:text-orange-500 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/category/Men" className="hover:text-orange-500 transition">
                  Men Collection
                </Link>
              </li>

              <li>
                <Link to="/category/Women" className="hover:text-orange-500 transition">
                  Women Collection
                </Link>
              </li>

              <li>
                <Link to="/category/Kids" className="hover:text-orange-500 transition">
                  Kids Collection
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-orange-500 transition">
                  About Us
                </Link>
              </li>

            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">
              Customer Service
            </h3>

            <ul className="space-y-4">

              <li>
                <Link to="/contact" className="hover:text-orange-500 transition">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link to="/order" className="hover:text-orange-500 transition">
                  My Orders
                </Link>
              </li>

              <li>
                <Link to="/shipping" className="hover:text-orange-500 transition">
                  Shipping Information
                </Link>
              </li>

              <li>
                <Link to="/returns" className="hover:text-orange-500 transition">
                  Returns & Refunds
                </Link>
              </li>

              <li>
                <Link to="/privacy" className="hover:text-orange-500 transition">
                  Privacy Policy
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">
              Contact Information
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1" />
                <p>
                  Addis Ababa, Ethiopia
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-500" />
                <p>+251935453320</p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-orange-500" />
                <p>endalewbishaw33@gmail.com</p>
              </div>

            </div>

          </div>

        </div>

        {/* Newsletter */}
        <div className="mt-16 border-t border-gray-800 pt-10">

          <div className="max-w-xl mx-auto text-center">

            <h3 className="text-2xl font-bold text-white mb-3">
              Subscribe to Our Newsletter
            </h3>

            <p className="text-gray-400 mb-6">
              Get updates about new collections, special offers, and discounts.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3"
            >

              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none focus:border-orange-500"
              />

              <button
                type="submit"
                className="bg-orange-500 text-white px-7 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                Subscribe
              </button>

            </form>

          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Endalew BRAND CLOTH. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-500">
            Designed with ❤️ for Fashion Lovers.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;