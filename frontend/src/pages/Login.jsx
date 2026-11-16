
import React, { useState } from 'react';
import { FiMail, FiLock, FiUser, FiEye, FiEyeOff } from 'react-icons/fi';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const [showPassword, setShowPassword] = useState(false);

  const isLogin = currentState === 'Login';

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend API integration will go here
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-md">

        {/* LOGO */}

        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Endalew
            <span className="text-orange-500"> Fashion.</span>
          </h1>

          <p className="text-gray-500 mt-2">
            Discover your style. Express yourself.
          </p>
        </div>

        {/* LOGIN CARD */}

        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">

          {/* HEADER */}

          <div className="text-center mb-8">

            <h2 className="text-3xl font-bold text-gray-900">
              {currentState}
            </h2>

            <p className="text-gray-500 mt-3 text-sm">
              {isLogin
                ? 'Welcome back to Endalew Fashion!'
                : 'Create your account and join Endalew Fashion.'}
            </p>

          </div>

          {/* FORM */}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* FULL NAME */}

            {!isLogin && (
              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>

                <div className="relative">

                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                  />

                </div>

              </div>
            )}

            {/* EMAIL */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <div className="relative">

                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>

              <div className="relative">

                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-12 pr-12 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>

              </div>

            </div>

            {/* REMEMBER ME */}

            {isLogin && (
              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-2 text-gray-600">
                  <input
                    type="checkbox"
                    className="accent-orange-500"
                  />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-orange-500 font-semibold hover:text-orange-600"
                >
                  Forgot password?
                </button>

              </div>
            )}

            {/* SUBMIT BUTTON */}

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-200 transition-all duration-300"
            >
              {isLogin ? 'Login' : 'Create Account'}
            </button>

          </form>

          {/* SWITCH LOGIN / REGISTER */}

          <div className="text-center mt-8">

            <p className="text-gray-500 text-sm">

              {isLogin
                ? "Don't have an account?"
                : 'Already have an account?'}

              <button
                onClick={() =>
                  setCurrentState(isLogin ? 'Register' : 'Login')
                }
                className="ml-2 text-orange-500 font-bold hover:text-orange-600"
              >
                {isLogin ? 'Create Account' : 'Login'}
              </button>

            </p>

          </div>

        </div>

        {/* FOOTER */}

        <p className="text-center text-gray-400 text-sm mt-8">
          © 2026 Endalew Fashion. All rights reserved.
        </p>

      </div>

    </div>
  );
};

export default Login;
