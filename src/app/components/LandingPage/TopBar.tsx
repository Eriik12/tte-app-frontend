'use client'
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { NavMobile } from './NavMobile';
import { destroyCookie, parseCookies } from 'nookies';

const TopBar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const cookies = parseCookies();
    const userDataCookie = cookies.userData;
    if (userDataCookie) {
      setIsLoggedIn(true);
      const userData = JSON.parse(decodeURIComponent(userDataCookie));
      setUserName(userData.username);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = async () => {
    try {
      const cookies = parseCookies();
      const userDataCookie = cookies.userData;
      
      if (!userDataCookie) {
        console.error('No user data found in the cookie');
        return;
      }

      const userData = JSON.parse(decodeURIComponent(userDataCookie));

      const response = await fetch('http://localhost:8080/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userData.token}`
        },
        body: JSON.stringify({ email: userData.email })
      });

      if (response.ok) {
        destroyCookie(null, 'userData');
        window.location.href = '/login';
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="bg-black text-white absolute top-0 left-0 w-full">
      <div className="flex justify-between items-center px-4">
        <div className="text-left">USD</div>
        <div className="text-center">FREE SHIPPING ON ALL HERMAN MILLER! FEB. 25–28</div>
        <div className="text-right">Support</div>
      </div>
      <div className="bg-white text-black flex justify-between items-center px-4 py-2">
      <div className=" hidden lg:block font-bold">Tech Trend Emporium</div>
        <button className="hidden lg:block">Shop List</button>
        <button className="hidden lg:block">Wishlist</button>
        <div className="relative hidden lg:block">
          <FaSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
          <input type="text" placeholder="Search" className="pl-10 pr-4 rounded-full border border-gray-300 bg-transparent focus:outline-none focus:border-black w-36 sm:w-48 md:w-60 lg:w-72" />
        </div>
        <div className="hidden lg:block font-bold">{userName}</div>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="bg-white text-black px-4 py-2 hidden lg:block">Logout</button>
        ) : (
          <a href="/login" className="bg-white text-black px-4 py-2 hidden lg:block">Login</a>
        )}
      </div>
      <NavMobile />
    </div>
  );
}

export default TopBar;
