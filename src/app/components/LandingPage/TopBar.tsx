import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { NavMobile } from './NavMobile';
const TopBar: React.FC = () => {
  return (
    <div className="bg-black text-white absolute top-0 left-0 w-full">
       {/* OFFERS*/}
      <div className="flex justify-between items-center px-4">
        <div className="text-left">USD</div>
        <div className="text-center">FREE SHIPPING ON ALL HERMAN MILLER! FEB. 25–28</div>
        <div className="text-right">Support</div>
      </div>

       {/* search products web*/}
       <div className="bg-white text-black flex justify-between items-center px-4 py-2">
        <div className=" hidden lg:block font-bold">Tech Trend Emporium</div>
        <button className="hidden lg:block">Shop List</button>
        <button className="hidden lg:block">Wishlist</button>
        <div className="relative hidden lg:block">
          <FaSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
          <input type="text" placeholder="Search" className="pl-10 pr-4 rounded-full border border-gray-300 bg-transparent focus:outline-none focus:border-black w-36 sm:w-48 md:w-60 lg:w-72" />
        </div>
        <button className="bg-white text-black px-4 py-2 hidden lg:block">Login</button>
      </div>
      <NavMobile/>
    </div>
    
  );  
}

export default TopBar;
