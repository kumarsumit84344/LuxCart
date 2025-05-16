import React from 'react';
import Header from '../components/header';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const isloggin = useSelector((state) => state.auth.isloggin);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F7FAFC] flex flex-col">
      <main className="flex flex-1 items-center justify-center text-center px-4">
        <div>
          <h1 className="text-4xl font-bold text-[#2D3748] mb-4">
            Welcome to <span className="text-[#F4B400]">LuxCart</span>
          </h1>
          <p className="text-[#2D3748] text-lg max-w-xl mx-auto">
            Discover premium products with a seamless shopping experience. Quality, luxury, and style—all in one place.
          </p>
          {isloggin && <button
        onClick={()=>navigate('productDetails')} // define this function
        className="text-xs sm:text-sm bg-[#F4B400] text-white px-2 py-1 sm:px-4 sm:py-2 rounded hover:bg-yellow-500 transition"
      >
        Enjoy Shopping
      </button>}
        </div>
      </main>
    </div>
  );
};

export default Home;
