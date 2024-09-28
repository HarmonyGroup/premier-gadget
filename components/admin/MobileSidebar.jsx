"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { RxDashboard } from "react-icons/rx";
import { FiShoppingBag } from "react-icons/fi";
import { VscTag } from "react-icons/vsc";
import { BsPerson } from "react-icons/bs";
import { VscGraphLine } from "react-icons/vsc";
import { CiMoneyBill } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { SlLogout } from "react-icons/sl";
import Logo from "@/assets/premier-gadgets-logo.png";

const MobileSidebar = () => {
  const path = usePathname();

  const { data: session, status, update } = useSession();
  const { user } = session || {};

  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger>
          <IoMenu className="text-[20px]" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-white flex flex-col border-none p-0"
        >
          {/* Sidebar Header */}
          <div className="overflow-x-hidden relative flex items-center justify-between lg:justify-start gap-2 p-4">
            <Link href={"/admin"}>
              <Image src={Logo} alt="logo" height={110} width={110} />
            </Link>
          </div>

          {/* Sidebar Body */}
          <div className="flex flex-col gap-4 px-6 mt-4">
            <Link
              href={"/admin"}
              className={`hover:bg-gray-200 text-[13px] font-normal rounded-lg px-2 py-3 ${
                path === "/admin" ? "bg-gray-200" : ""
              }`}
            >
              <SheetClose className="w-full flex items-center gap-2 outline-none">
                <span className="text-[19px]">
                  <RxDashboard />
                </span>
                Dashboard
              </SheetClose>
            </Link>
            <Link
              href={"/admin/orders"}
              className={`hover:bg-gray-200 text-[13px] font-normal rounded-lg px-2 py-3 ${
                path.includes("/admin/orders") ? "bg-gray-200" : ""
              }`}
            >
              <SheetClose className="w-full flex items-center gap-2">
                <span className="text-[18px]">
                  <FiShoppingBag />
                </span>
                Orders
              </SheetClose>
            </Link>
            <Link
              href={"/admin/categories"}
              className={`hover:bg-gray-200 text-[13px] font-normal rounded-lg px-2 py-3 ${
                path.includes("/admin/categories") ? "bg-gray-200" : ""
              }`}
            >
              <SheetClose className="w-full flex items-center gap-2">
                <span className="text-[19px]">
                  <VscTag />
                </span>
                Categories
              </SheetClose>
            </Link>
            <Link
              href={"/admin/products"}
              className={`hover:bg-gray-200 text-[13px] font-normal rounded-lg px-2 py-3 ${
                path.includes("/admin/products") ? "bg-gray-200" : ""
              }`}
            >
              <SheetClose className="w-full flex items-center gap-2">
                <span className="text-[19px]">
                  <VscTag />
                </span>
                Products
              </SheetClose>
            </Link>
            <Link
              href={"/admin/customers"}
              className={`hover:bg-gray-200 text-[13px] font-normal rounded-lg px-2 py-3 ${
                path.includes("/admin/customers") ? "bg-gray-200" : ""
              }`}
            >
              <SheetClose className="w-full flex items-center gap-2">
                <span className="text-[20px]">
                  <BsPerson />
                </span>
                Customers
              </SheetClose>
            </Link>
            <Link
              href={"/admin/coupons"}
              className={`hover:bg-gray-200 text-[13px] font-normal rounded-lg px-2 py-3 ${
                path.includes("/admin/coupons") ? "bg-gray-200" : ""
              }`}
            >
              <SheetClose className="w-full flex items-center gap-2">
                <span className="text-[23.5px]">
                  <CiMoneyBill />
                </span>
                Coupons
              </SheetClose>
            </Link>
            <Link
              href={"/admin/admins"}
              className={`hover:bg-gray-200 text-[13px] font-normal rounded-lg px-2 py-3 ${
                path.includes("/admin/admins") ? "bg-gray-200" : ""
              }`}
            >
              <SheetClose className="w-full flex items-center gap-2">
                <span className="text-[20px]">
                  <IoSettingsOutline />
                </span>
                Admins
              </SheetClose>
            </Link>
            <button
              onClick={() => signOut()}
              className="hover:bg-gray-200 text-[13px] font-normal rounded-lg px-2 py-3"
            >
              <SheetClose className="w-full flex items-center gap-2">
                <span className="text-[19px]">
                  <SlLogout />
                </span>
                Sign Out
              </SheetClose>
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
