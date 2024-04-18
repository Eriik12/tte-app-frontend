import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const FooterPage = () => {
  return (
    <footer className=" text-white py-8 border-t border-gray-400">
      <div className="md:flex md:justify-between md:items-center md:px-12 px-4">
        <div className=" md:w-2/5">
          <h1 className="lg:text-4x2 text-3xl font-bold text-black mb-6">
            Sign up for our newsletter
          </h1>
          <p className="text-black text-sm mb-6">
            Be the first to know about our special offers, news, and updates.
          </p>
          <div className="flex border border-black overflow-hidden bg-transparent ">
            <input
              type="text"
              placeholder="Email Address"
              className="text-gray-800 py-2.5 px-2 flex-grow focus:outline-none bg-transparent"
            />
            <button className=" px-5 py-2.5 text-black font-bold">
              Sign up
            </button>
          </div>
        </div>
        <div className="md:flex md:items-center mt-6 md:mt-0 text-black">
          <ItemsContainer />
        </div>
      </div>
      <div className=" absolute md:flex md:justify-center md:px-12 px-4 mt-8">
        <div className="text-white bg-black p-2 rounded">
          Copyrights site.com. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
