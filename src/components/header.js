import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setlogout } from '../features/authSlicer';
import { useNavigate } from 'react-router-dom';

function Header() {
  const name = useSelector((state) => state.auth.name);
  const isloggin = useSelector((state) => state.auth.isloggin);
  const dispatch= useDispatch();
  const navigate = useNavigate();
  console.log(name)
  
  const handleLogout = () => {
    dispatch(setlogout());
    navigate("/login"); // Or redirect to homepage
  };

  const handleLogin=()=>{
    navigate("/login")
  }

  const handleRegister=()=>{
    navigate("/register")
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#F7FAFC] px-6 py-4 shadow-md mb-6">
  <div className="flex items-center justify-between">
    {/* Brand */}
    <div>
      <h1 className="text-4xl font-extrabold tracking-wide text-[#1E1E2F]">
        <span className="text-[#F4B400]">LuX</span>
        <span className="text-[#2D3748]">Cart</span>
      </h1>
      <p className="text-sm text-[#A0AEC0] mt-1 italic">Style meets comfort</p>
    </div>

    {/* User Info and Logout */}
    <div className="flex items-center space-x-4">
      {/* User Avatar and Name */}
      <div className="flex items-center space-x-2">
        {isloggin && <img
          src="https://i.pravatar.cc/40" // Replace with user's avatar if available
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />}
      <span className="text-[#2D3748] font-bold uppercase tracking-wider text-sm">{name}</span>
      </div>

      {!isloggin && <button
        onClick={handleLogin} // define this function
        className="bg-[#F4B400] text-white px-4 py-2 rounded hover:bg-yellow-500 transition"
      >
        Login
      </button>}
      
      {isloggin && <button
        onClick={handleLogout} // define this function
        className="bg-[#F4B400] text-white px-4 py-2 rounded hover:bg-yellow-500 transition"
      >
        Logout
      </button>}
      
      {!isloggin &&  <button
        onClick={handleRegister} // define this function
        className="bg-[#F4B400] text-white px-4 py-2 rounded hover:bg-yellow-500 transition"
      >
        Register
      </button>}
     
    </div>
  </div>
</div>

  );
};

export default Header;