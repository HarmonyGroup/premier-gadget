"use client";

import { createContext, useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import axios from "axios";

export const AuthModalContext = createContext({});
export const CartContext = createContext({});

export const AppProvider = ({ children }) => {
  const [authModal, setAuthModal] = useState(false);
  const [authModalAnimation, setAuthModalAnimation] = useState("");
  const [cartProducts, setCartProducts] = useState([]);
  const ls = typeof window !== "undefined" ? window.localStorage : null;

  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      const localCart = JSON.parse(ls.getItem("cart"));
      fetchUpdatedCartProducts(localCart);
    }
  }, []);

  const fetchUpdatedCartProducts = async (localCart) => {
    try {
      const response = await axios.get("/api/products");
      const allProducts = response.data;

      // Filter the products to include only those in the cart
      const newCartProducts = localCart.map((localProduct) => {
        const updatedProduct = allProducts.find(
          (p) => p._id === localProduct._id
        );
        return updatedProduct
          ? { ...localProduct, ...updatedProduct }
          : localProduct;
      });

      setCartProducts(newCartProducts);
      saveCartProductsToLocalStorage(newCartProducts);
    } catch (error) {
      console.error("Failed to fetch updated product details", error);
    }
  };

  const clearCart = () => {
    setCartProducts([]);
    saveCartProductsToLocalStorage([]);
  };

  const removeCartProduct = (indexToRemove) => {
    setCartProducts((prevCartProducts) => {
      const newCartProducts = prevCartProducts.filter(
        (v, index) => index !== indexToRemove
      );
      saveCartProductsToLocalStorage(newCartProducts);
      return newCartProducts;
    });
  };

  const saveCartProductsToLocalStorage = (cartProducts) => {
    if (ls) {
      ls.setItem("cart", JSON.stringify(cartProducts));
    }
  };

  const addToCart = (product) => {
    setCartProducts((prevProducts) => {
      const newProducts = [...prevProducts, { ...product }];
      saveCartProductsToLocalStorage(newProducts);
      return newProducts;
    });
  };

  const toggleAuthModal = () => {
    setAuthModal((prev) => {
      if (prev) {
        set("animate__fadeInUp");
      } else {
        setSearchBoxAnimation("animate__fadeInDown");
      }
      return !prev;
    });
  };

  return (
    <SessionProvider>
      <AuthModalContext.Provider
        value={{ authModal, setAuthModal, toggleAuthModal, authModalAnimation }}
      >
        <CartContext.Provider
          value={{
            cartProducts,
            setCartProducts,
            addToCart,
            removeCartProduct,
            clearCart,
          }}
        >
          {children}
        </CartContext.Provider>
      </AuthModalContext.Provider>
    </SessionProvider>
  );
};
