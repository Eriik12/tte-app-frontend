import { useState, useRef, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { FaSearch } from "react-icons/fa";
import { useClickAway } from "react-use"; // Importa useClickAway desde react-use
import { useRouter } from 'next/navigation';
import { destroyCookie, parseCookies } from 'nookies';
import { jwtDecode } from "jwt-decode";

export const NavMobile = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  useEffect(() => {
    const cookies = parseCookies();
    const userDataCookie = cookies.userData;
    if (userDataCookie) {
      setIsLoggedIn(true);
      const userData = JSON.parse(decodeURIComponent(userDataCookie));
      setUserName(userData.username);
      const tokenPayload: { roles?: string[] } = jwtDecode(userData.token);
      const roles = tokenPayload.roles && tokenPayload.roles.length > 0 ? tokenPayload.roles[0] : null;
      setUserRole(roles);
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
        router.push('/login');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const redirectToEmployeeMenu = () => {
    router.push('/EmployeePortal');
  };

  return (
    <div className="lg:hidden">
<div className=" bg-gray-100 py-2">
      <div className="lg:hidden flex justify-between items-center">
        <div className=" lg:hidden justify-left font-bold text-black">Tech Trend Emporium</div>
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} rounded color="#000" />
      </div>
      {isOpen && (
        <div ref={ref} className="fixed left-0 right-0 top-[7rem] bg-neutral-950 border-b border-b-white/20 z-20">
          <div className="flex flex-col justify-center items-center h-full">
            <div className="relative py-4">
              <FaSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
              <input type="text" placeholder="Search" className="pl-10 pr-4 rounded-full border border-gray-300 bg-transparent focus:outline-none focus:border-black w-48 sm:w-64 md:w-80 lg:w-96" />
            </div>
            {isLoggedIn ? (
              <>
                <button onClick={handleLogout} className="text-white py-4">Logout</button>
                {userRole === 'EMPLOYEE' && (
                  <button onClick={redirectToEmployeeMenu} className="bg-black text-white px-3 py-2">Employee Portal</button>
                )}
              </>
            ) : (
              <a href="/login" className="text-white py-4">Login</a>
            )}
            <button className="text-white py-4">Wishlist</button>
            <button className="text-white py-4">Shop List</button>
          </div>
        </div>
      )}
    </div>
    </div>
    
  );
};