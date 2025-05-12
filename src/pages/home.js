import React from 'react';
import Header from '../components/header';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F7FAFC] flex flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center text-center px-4">
        <div>
          <h1 className="text-4xl font-bold text-[#2D3748] mb-4">
            Welcome to <span className="text-[#F4B400]">LuxCart</span>
          </h1>
          <p className="text-[#2D3748] text-lg max-w-xl mx-auto">
            Discover premium products with a seamless shopping experience. Quality, luxury, and style—all in one place.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
