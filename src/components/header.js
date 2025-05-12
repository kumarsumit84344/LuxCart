import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-[#1E1E2F] text-[#F7FAFC] p-6 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold tracking-wide">LuxCart</div>
      <div className="space-x-4">
      <Link to="/login" className="bg-[#F4B400] text-[#1E1E2F] font-medium px-4 py-2 rounded hover:opacity-90 transition">
        Login
      </Link>
        
      <Link to="/register" className="border border-[#F4B400] text-[#F4B400] px-4 py-2 rounded hover:bg-[#F4B400] hover:text-[#1E1E2F] transition">
        Register
      </Link>
        
      </div>
    </header>
  );
};

export default Header;