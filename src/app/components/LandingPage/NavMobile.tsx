import { useState, useRef } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { FaSearch } from "react-icons/fa";
import { useClickAway } from "react-use"; // Importa useClickAway desde react-use

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div className="bg-white">
      <div className="lg:hidden flex justify-between items-center">
        <div className="justify-left font-bold text-black z-10">Tech Trend Emporium</div> {/* Aumentamos el z-index */}
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} rounded color="#000" />
      </div>
      {isOpen && (
        <div className="fixed left-0 right-0 top-[7rem] bg-neutral-950 border-b border-b-white/20 z-20"> {/* Aumentamos el z-index */}
          <div className="flex flex-col justify-center items-center h-full">
            <div className="relative py-4">
              <FaSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
              <input type="text" placeholder="Search" className="pl-10 pr-4 rounded-full border border-gray-300 bg-transparent focus:outline-none focus:border-black w-48 sm:w-64 md:w-80 lg:w-96" />
            </div>
            <a href="/login" className="text-white py-4">Login</a>
            <button className="text-white py-4">Wishlist</button>
            <button className="text-white py-4">Shop List</button>
          </div>
        </div>
      )}
    </div>
  );
};
