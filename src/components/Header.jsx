import React, { useState } from 'react';
import { FiUser, FiMenu, FiX } from 'react-icons/fi';
import { CgArrowTopRight } from "react-icons/cg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-white py-2 sm:py-4 px-3 sm:px-6">
      <nav className="container mx-auto flex justify-between items-center px-4 sm:px-10 py-2 mx-5">
        <div className="flex items-center">
          <span className="text-xl sm:text-2xl font-bold">🏠 Realtor X</span>
          
          <div className="hidden md:flex space-x-6 lg:space-x-10 text-sm ml-8">
            <a href="#" className="text-white font-bold border-b-2 border-white pb-2 mb-[-17px]">For buyers</a>
            <a href="#" className="hover:text-blue-300">For tenants</a>
            <a href="#" className="hover:text-blue-300">For owners</a>
            <a href="#" className="hover:text-blue-300">For dealers / builders</a>
            <a href="#" className="hover:text-blue-300">Insights</a>
          </div>
        </div>

       
        <div className="hidden md:flex items-center space-x-4 text-sm">
          <a href="#" className="flex items-center gap-1 hover:text-blue-300">
            <FiUser className="text-lg" />
            Log in
          </a>
          <a href="#" className="flex items-center gap-2 rounded-[10px] border border-white px-4 py-2 rounded hover:bg-white hover:text-[#0A2540] transition">
            Post a property
            <CgArrowTopRight className="text-lg" />
          </a>
        </div>

      
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      <div className="w-full md:w-[85%] mx-auto border-b border-white ml-0 md:ml-[175px]"></div>


    
      {isMenuOpen && (
        <div className="md:hidden bg-[#0A2540] py-4 px-4">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-white font-bold border-b-2 border-white pb-2">For buyers</a>
            <a href="#" className="text-white hover:text-blue-300">For tenants</a>
            <a href="#" className="text-white hover:text-blue-300">For owners</a>
            <a href="#" className="text-white hover:text-blue-300">For dealers / builders</a>
            <a href="#" className="text-white hover:text-blue-300">Insights</a>
            <div className="flex flex-col space-y-3 pt-4 border-t border-white/20">
              <a href="#" className="flex items-center gap-1 text-white hover:text-blue-300">
                <FiUser className="text-lg" />
                Log in
              </a>
              <a href="#" className="flex items-center gap-2 border border-white px-4 py-2 rounded hover:bg-white hover:text-[#0A2540] transition">
                Post a property
                <CgArrowTopRight className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
