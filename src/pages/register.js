import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Register() {
    const navigate = useNavigate()
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleUserLogin = (e) => {
    setUser(e.target.value);
    
  };

  const handleUserPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", user);
    localStorage.setItem("password", password);
    navigate('/login')
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7FAFC]">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-[#1E1E2F] mb-6 text-center">Join LuxCart Today</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#2D3748] mb-1">Username</label>
            <input
              className="w-full px-4 py-2 border border-[#A0AEC0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F4B400]"
              type="text"
              placeholder="Enter username"
              value={user}
              onChange={handleUserLogin}
              required
            />
          </div>

          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-4 pr-10 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </span>
        </div>

          <button
            className="w-full bg-[#F4B400] text-[#1E1E2F] py-2 rounded-md font-semibold hover:opacity-90 transition"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
