import React, { useState } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loginSucess, setloginSuccess] = useState("");
  const [loginError, setloginError] = useState("");
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
    const username = localStorage.getItem("username");
    const getpassword = localStorage.getItem("password");
    if (user == username && password == getpassword) {
      setloginSuccess("login successfull");
      navigate("/productdetails");
    } else {
      setloginError("Invalid Credential");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7FAFC]">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-[#1E1E2F] mb-6 text-center">
          Access Your Account
        </h2>
        {loginError && (
          <div className="mb-4 flex items-center gap-2 text-sm text-red-700 bg-red-100 border border-red-400 px-4 py-2 rounded">
            <AiOutlineWarning className="text-red-600 text-xl" />
            <span>{loginError}</span>
          </div>
        )}
        {loginSucess && (
          <div className="mb-4 flex items-center gap-2 text-sm text-green-700 bg-green-100 border border-green-400 px-4 py-2 rounded">
            <AiOutlineCheckCircle className="text-green-600 text-xl" />
            <span>{loginSucess}</span>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#2D3748] mb-1">
              Username
            </label>
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
            Login
          </button>
        </form>
      </div>   
    </div>
  );
}

export default Login;
