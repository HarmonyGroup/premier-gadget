import React, { useState, useEffect, useContext } from "react";
import { AuthModalContext } from "@/Context";
import { IoClose } from "react-icons/io5";
import AuthForm from "./AuthForm";

const AuthModal = () => {
  const { authModal, setAuthModal, toggleAuthModal, authModalAnimation } =
    useContext(AuthModalContext);
  const [type, setType] = useState("sign-in");

  return (
    <div
      onClick={() => {
        setAuthModal(false);
        setType("sign-in");
      }}
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-[999] px-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-full max-w-lg rounded-lg p-7"
      >
        <div className="">
          <h1 className="text-2xl text-center font-bold">Sign In</h1>
          <p className="text-gray-500 text-sm text-center mt-2">
            Enter your credentials to sign in
          </p>
          <div className="mt-10">
            <AuthForm
              type={type}
              setType={setType}
              setAuthModal={setAuthModal}
            />
          </div>
        </div>
        <button
          onClick={() => {
            setAuthModal(false);
            setType("sign-in");
          }}
          className="absolute top-3 right-3 text-gray-500 text-lg hover:bg-gray-100 rounded-full p-2"
        >
          <IoClose />
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
