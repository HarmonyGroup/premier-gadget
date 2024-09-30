"use client";

import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { RiStore2Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const path = usePathname();

  return (
    <div className="mobile-nav-shadow block lg:hidden fixed w-full bottom-0 bg-white py-2.5 z-[999999] border-t border-gray-100">
      <div className="grid grid-cols-4 text-gray-500">
        <Link
          href={"/"}
          className={`col-span-1 flex flex-col items-center gap-1.5 text-[12px] font-medium ${
            path === "/" ? "text-deepBlue font-semibold" : ""
          }`}
        >
          <RxDashboard size={18} />
          Home
        </Link>
        <Link
          href={"/"}
          className={`col-span-1 flex flex-col items-center gap-1.5 text-[12px] font-medium ${
            path.includes("cart") ? "text-deepBlue font-semibold" : ""
          }`}
        >
          <PiShoppingCartSimpleBold size={17} />
          Cart
        </Link>
        <Link
          href={"/account"}
          className={`col-span-1 flex flex-col items-center gap-1.5 text-[12px] font-medium ${
            path.includes("account") ? "text-deepBlue font-semibold" : ""
          }`}
        >
          <GoPerson size={18} />
          Account
        </Link>
        <Link
          href={"/contacts"}
          className={`col-span-1 flex flex-col items-center gap-1.5 text-[12px] font-medium ${
            path.includes("contacts") ? "text-deepBlue font-semibold" : ""
          }`}
        >
          <RiStore2Line size={18} />
          Outlets
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
