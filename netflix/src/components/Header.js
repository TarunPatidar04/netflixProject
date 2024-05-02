import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <div className="absolute z-10 flex w-[100vw] items-center justify-between bg-gradient-to-b from-black px-6">
      <img
        className="w-56"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="netflix-logo"
      />
      <div className="flex items-center">
        <IoIosArrowDropdown size="24px" className="text-white" />
        <h1 className="text-lg text-white font-medium">Tarun Patidar</h1>
        <div className="ml-4">
          <button className="bg-red-800 text-white px-4 py-2">Logout</button>
          <button className="bg-red-800 text-white px-4 py-2 ml-2">
            Search Movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
