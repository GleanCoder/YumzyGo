import React from "react";
import { CiShoppingCart } from "react-icons/ci";
const yumzyLogo = new URL("../assets/YumzyGo.png", import.meta.url);
const NavBar = () => {
  return (
    <nav className="w-full px-20 py-6 flex justify-between items-center bg-[#E7F8ED]">
      <img src={yumzyLogo} alt="YumzyGo Logo" className="h-10 cursor-pointer" />

      <ul className="hidden md:flex gap-10 font-medium text-[#222]">
        <li className="hover:text-[#23A455] cursor-pointer">Home</li>
        <li className="hover:text-[#23A455] cursor-pointer">Menu</li>
        <li className="hover:text-[#23A455] cursor-pointer">About</li>
        <li className="hover:text-[#23A455] cursor-pointer">Contact</li>
      </ul>

      <div className="flex items-center gap-6">
        <CiShoppingCart className="text-2xl text-[#23A455] cursor-pointer" />
        <button className="border border-[#23A455] text-[#23A455] px-6 py-2 rounded-full hover:bg-[#23A455] hover:text-white transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
