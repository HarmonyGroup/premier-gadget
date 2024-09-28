"use client";

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { GoPerson } from "react-icons/go";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import { ImSearch } from "react-icons/im";
import AuthModal from "./AuthModal";
import { AuthModalContext, CartContext } from "@/Context";
import { useSession } from "next-auth/react";
import CategoriesSidebar from "./CategoriesSidebar";
import { formatPrice } from "@/lib/utils";
import CartSidebar from "./CartSidebar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  const { authModal, setAuthModal, toggleAuthModal, authModalAnimation } =
    useContext(AuthModalContext);
  const { cartProducts } = useContext(CartContext);
  const { data: session, status, update } = useSession();
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [cartSidebar, setCartSidebar] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("/api/parent-categories");
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  // const totalPrice = cartProducts.reduce((accumulator, item) => {
  //   return accumulator + product.price;
  // }, 0);

  const calculateTotalPrice = () => {
    return cartProducts.reduce((total, product) => {
      const price = product.discount ? product.discount : product.price; // Use discount price if available
      return total + price;
    }, 0);
  };

  return (
    <>
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
        <div className="hidden lg:flex items-center gap-5">
          <button
            onClick={() => setShowCategories(!showCategories)}
            className="bg-white flex items-center gap-2.5 rounded-full text-sm font-medium pl-2 pr-5 py-2"
          >
            <span className="bg-deepBlue rounded-full p-1.5">
              <IoMenu size={16} color="white" />
            </span>
            All Categories
          </button>
          <Link
            href={"/"}
            className={`animation text-sm font-medium px-5 py-2.5 hover:bg-deepBlue hover:text-white hover:rounded-full ${
              path === "/"
                ? "bg-deepBlue text-white font-bold rounded-full"
                : ""
            }`}
          >
            Home
          </Link>
          {/* <Link
            href={"/"}
            className={`text-sm font-medium px-5 py-2.5 hover:bg-deepBlue hover:text-white hover:font-bold hover:rounded-full ${
              path === "/"
                ? "bg-deepBlue text-white font-bold rounded-full"
                : ""
            }`}
          >
            About
          </Link> */}
          <Link
            href={"/contacts"}
            className={`animation text-sm font-medium px-5 py-2.5 hover:bg-deepBlue hover:text-white hover:rounded-full ${
              path === "/contacts"
                ? "bg-deepBlue text-white font-bold rounded-full"
                : ""
            }`}
          >
            Contacts
          </Link>
          <Link
            href={"/"}
            className={`animation text-sm font-medium px-5 py-2.5 hover:bg-deepBlue hover:text-white hover:rounded-full ${
              path === "/contacts"
                ? "bg-deepBlue text-white font-bold rounded-full"
                : ""
            }`}
          >
            Outlets
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-5">
          {status === "authenticated" ? (
            <Link
              href={"/account"}
              className="bg-white flex items-center justify-center rounded-full h-12 w-12"
            >
              <GoPerson size={24} />
            </Link>
          ) : (
            <button
              onClick={() => setAuthModal(!authModal)}
              className="bg-white flex items-center justify-center rounded-full h-12 w-12"
            >
              <GoPerson size={24} />
            </button>
          )}
          <div
            onClick={() => setCartSidebar(!cartSidebar)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <button className="bg-deepBlue text-white flex items-center justify-center rounded-full h-12 w-12">
              <PiShoppingCartSimpleBold size={20} />
            </button>
            <span className="text-sm font-medium">
              &#8358;{formatPrice(calculateTotalPrice())}
            </span>
          </div>
        </div>
      </div>
      {authModal && <AuthModal />}
      <CategoriesSidebar
        categories={categories}
        showCategories={showCategories}
        setShowCategories={setShowCategories}
      />
      <CartSidebar cartSidebar={cartSidebar} setCartSidebar={setCartSidebar} />
    </>
  );
};

export default Navbar;
