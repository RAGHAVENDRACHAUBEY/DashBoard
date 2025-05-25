import React from 'react';
import { FaHome, FaMicrophone, FaSearch } from 'react-icons/fa';
import { IoMdLocate } from "react-icons/io";

function HomePage() {
  return (
    <section className="relative h-[500px] sm:h-[550px] md:h-[600px] flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"

      />
      <div className="absolute inset-0 opacity-40"></div>

      <div className="relative z-10 text-center max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 leading-tight">
          Find Real Estate and Get Your Dream Space
        </h1>
        <p className="text-base sm:text-lg mb-6 sm:mb-8 px-2">
          We are a real estate agency that will help you find the best residence you dream of, let's discuss for your dream house?
        </p>

        <div className="max-w-5xl mx-auto mt-6 sm:mt-8">
          <div className="flex space-x-1">
            <button className="px-4 sm:px-8 py-2 text-sm font-medium bg-white shadow text-gray-800 rounded-t-lg">Buy</button>
            <button className="px-4 sm:px-8 py-2 text-sm font-normal text-gray-500 bg-[#ffffff7a] shadow rounded-t-lg">
              Rent
            </button>
          </div>
          <div className="bg-white shadow-md p-2 sm:p-3 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-0 sm:space-x-2 overflow-hidden rounded-b-lg">

            <div className="flex items-center bg-transparent px-2 py-2 rounded-lg text-gray-700 hover:bg-gray-100 w-full sm:w-auto">
              <FaHome className="mr-2 text-black" />
              <select className="bg-transparent outline-none text-gray-700 w-full sm:w-auto">
                <option>Property type</option>
                <option>Apartment</option>
                <option>Villa</option>
              </select>
            </div>


            <div className="hidden sm:block w-px h-6 bg-gray-300 mx-2" />


            <div className="flex-grow flex items-center min-w-[200px]">
              <input
                type="text"
                placeholder="Search by location or Property ID..."
                className="w-full px-3 py-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
            </div>


            <div className="flex items-center space-x-1 sm:space-x-2">
              <button className="p-2 text-black hover:text-blue-600">
                <FaMicrophone className="text-lg" />
              </button>
              <button className="p-2 text-black hover:text-blue-600">
                <IoMdLocate className="text-lg" />
              </button>
              <button className="p-2 bg-[#0A2A63] hover:bg-[#093069] text-white rounded-lg">
                <FaSearch className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
