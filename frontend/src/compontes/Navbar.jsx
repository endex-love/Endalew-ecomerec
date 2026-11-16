import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaStore } from 'react-icons/fa';
import { BiUser, BiChevronDown, BiCart } from 'react-icons/bi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate =useNavigate();
  const Location =useLocation();
  const handleNavigation =(path)=>{
    setTimeout(()=>{
      navigate(path)
    },800)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Men', path: '/category/Men' },
    { name: 'Women', path: '/category/Women' },
    { name: 'Kids', path: '/category/Kids' }
  ];

  return (
    <nav
      className={`w-full flex justify-between items-center px-8 py-4 sticky top-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'}`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 text-gray-900">
        <FaStore className="text-3xl text-orange-500" />
        <h2 className="text-2xl font-bold">
          BRAND <span className='text-green-500'>Endalew</span> <span className="text-orange-500">CLOTH</span>
        </h2>
      </Link>

      {/* Navigation links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={()=>handleNavigation(link.path)}
            className="text-gray-700 font-medium hover:text-orange-500 transition duration-300"
          >
            {link.name}
          </button>
        ))}
      </div>

      {/* User and Cart */}
      <div className="flex items-center gap-5">

        {/* User dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-1 text-2xl text-gray-700 hover:text-orange-500">
            <BiUser />
            <BiChevronDown />
          </button>

          <div className="absolute right-0 top-full mt-2 w-44 bg-white shadow-xl rounded-lg p-3 hidden group-hover:block">
            <Link
              to="/login"
              className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded"
            >
              Login / Sign Up
            </Link>

            <hr className="my-2" />

            <Link
              to="/order"
              className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded"
            >
              My Orders
            </Link>

            <button className="w-full text-left px-3 py-2 text-red-500 hover:bg-red-50 rounded">
              Logout
            </button>
          </div>
        </div>

        {/* Shopping cart */}
        <Link
          to="/cart"
          className="relative text-3xl text-gray-700 hover:text-orange-500 transition"
        >
          <BiCart />
          <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            0
          </span>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;