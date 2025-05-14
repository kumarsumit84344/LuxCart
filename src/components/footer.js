import React from "react";

function footer(){
    return(
        <footer className="bg-gradient-to-r from-[#2D3748] via-[#1E1E2F] to-[#F4B400] text-white py-6">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    {/* Left Section: Brand */}
    <div className="text-center md:text-left">
      <h2 className="text-2xl font-extrabold tracking-wide text-[#F4B400]">
        <span>LuX</span>
        <span className="text-[#fff]">Cart</span>
      </h2>
      <p className="text-sm italic mt-2">Style meets comfort</p>
    </div>

    {/* Middle Section: Links */}
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
      <a href="/about" className="hover:text-[#F4B400]">About Us</a>
      <a href="/services" className="hover:text-[#F4B400]">Services</a>
      <a href="/contact" className="hover:text-[#F4B400]">Contact</a>
      <a href="/privacy" className="hover:text-[#F4B400]">Privacy Policy</a>
    </div>

    {/* Right Section: Social Media Icons */}
    <div className="flex space-x-6">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4B400]">
        <i className="fab fa-facebook fa-2x"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4B400]">
        <i className="fab fa-twitter fa-2x"></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4B400]">
        <i className="fab fa-instagram fa-2x"></i>
      </a>
    </div>
  </div>

  {/* Bottom Section: Copyright */}
  <div className="text-center mt-4">
    <p className="text-sm">&copy; 2025 LuXCart. All rights reserved.</p>
  </div>
</footer>

    )
}

export default footer;