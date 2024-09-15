import Link from "next/link";
import React from "react";
import { GoPerson } from "react-icons/go";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import { ImSearch } from "react-icons/im";

const Navbar = () => {
  return (
    <div className="bg-deepBlue/20 flex items-center justify-between px-4 py-4 md:px-10">
      <form className="w-full relative block lg:hidden">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full border border-deepBlue/25 rounded-full placeholder:text-deepBlue placeholder:text-sm p-3 outline-none"
        />
        <button className="bg-deepBlue absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full p-2.5">
          <ImSearch size={15} color="white" />
        </button>
      </form>
      <div className="hidden lg:flex items-center gap-10">
        <button className="bg-white flex items-center gap-2.5 rounded-full text-sm font-medium pl-2 pr-5 py-2">
          <span className="bg-deepBlue rounded-full p-1.5">
            <IoMenu size={20} color="white" />
          </span>
          All Categories
        </button>
        <Link href={"/"} className="text-sm font-medium">
          Home
        </Link>
        <Link href={"/"} className="text-sm font-medium">
          About
        </Link>
        <Link href={"/"} className="text-sm font-medium">
          Contacts
        </Link>
        <Link href={"/"} className="text-sm font-medium">
          Outlets
        </Link>
      </div>
      <div className="hidden lg:flex items-center gap-5">
        <button className="bg-white flex items-center justify-center rounded-full h-12 w-12">
          <GoPerson size={24} />
        </button>
        <div className="flex items-center gap-2">
          <button className="bg-deepBlue text-white flex items-center justify-center rounded-full h-12 w-12">
            <PiShoppingCartSimpleBold size={20} />
          </button>
          <span className="text-sm font-medium">&#8358;0.00</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
