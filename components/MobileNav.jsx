import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { RiStore2Line } from "react-icons/ri";

const MobileNav = () => {
  return (
    <div className="mobile-nav-shadow fixed w-full bottom-0 bg-white py-4 z-[999999] border-t border-gray-100">
      <div className="grid grid-cols-4">
        <Link href={"/"} className="col-span-1 flex flex-col items-center gap-1 text-sm">
          <IoMenu size={18} />
          Menu
        </Link>
        <Link href={"/"} className="col-span-1 flex flex-col items-center gap-1 text-sm">
          <PiShoppingCartSimpleBold size={17} />
          Cart
        </Link>
        <Link href={"/"} className="col-span-1 flex flex-col items-center gap-1 text-sm">
          <GoPerson size={18} />
          Account
        </Link>
        <Link href={"/"} className="col-span-1 flex flex-col items-center gap-1 text-sm">
          <RiStore2Line size={18} />
          Outlets
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
