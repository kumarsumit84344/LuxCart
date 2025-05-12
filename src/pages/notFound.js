import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7FAFC] text-[#2D3748] text-center px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="bg-[#F4B400] text-[#1E1E2F] px-6 py-3 rounded shadow hover:opacity-90 transition">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;