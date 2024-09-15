import Image from "next/image";
import React from "react";
import Logo from "@/assets/premier-gadgets-logo.png";
import { BiSupport } from "react-icons/bi";
import { FiTruck } from "react-icons/fi";
import { ImSearch } from "react-icons/im";
import { IoMenu } from "react-icons/io5";
import { GoPerson } from "react-icons/go";

const Header = () => {
  return (
    <div className="flex items-center justify-between gap-10 px-4 py-4 md:px-10">
      <button className="block lg:hidden text-deepBlue">
        <IoMenu size={24} />
      </button>
      <Image src={Logo} height={130} width={130} alt="premier-gadgets" />
      <form className="w-full relative hidden lg:block">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full border border-deepBlue/25 rounded-full placeholder:text-deepBlue placeholder:text-sm p-3.5 outline-none"
        />
        <button className="bg-deepBlue absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full p-3">
          <ImSearch size={18} color="white" />
        </button>
      </form>
      <div className="hidden lg:flex items-center gap-12">
        <div className="flex items-center gap-3">
          <BiSupport size={40} />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium whitespace-nowrap">
              24/7 Support
            </p>
            <p className="text-sm text-deepBlue">08173630234</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FiTruck size={40} />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium whitespace-nowrap">Nationwide</p>
            <p className="text-sm text-deepBlue whitespace-nowrap">
              Fast delivery
            </p>
          </div>
        </div>
      </div>
      <button className="block lg:hidden text-deepBlue">
        <GoPerson size={24} />
      </button>
    </div>
  );
};

export default Header;
