import Image from "next/image";
import Logo from "@/assets/premier-gadgets-logo.png";
import Payments from "@/assets/payments.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white px-4 pt-14 md:px-10">
      <div className="flex flex-col lg:flex-row items-start gap-10">
        <div className="flex-1">
          <Image src={Logo} height={180} width={180} alt="Premier Gadgets" />
          <p className="text-gray-500 text-sm mt-6 max-w-lg">
            Our ecommerce store offers a vast selection of high-quality gadgets
            that cater to every need and lifestyle. We provide top-tier
            technology at prices that won&apos;t break the bank.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-24">
          <div className="">
            <h1 className="text-lg font-bold">Categories</h1>
            <div className="flex flex-col gap-4 text-gray-500 text-sm mt-8">
              <Link href={"/"}>Smartphones</Link>
              <Link href={"/"}>Laptops</Link>
              <Link href={"/"}>Tablets</Link>
              <Link href={"/"}>Computing</Link>
              <Link href={"/"}>Gaming</Link>
              <Link href={"/"}>Accessories</Link>
            </div>
          </div>
          <div className="">
            <h1 className="text-lg font-bold whitespace-nowrap">Quick Links</h1>
            <div className="flex flex-col gap-4 text-gray-500 text-sm mt-8">
              <Link href={"/"}>Home</Link>
              {/* <Link href={"/"}>About</Link> */}
              <Link href={"/"}>Contacts</Link>
              <Link href={"/"}>Outlets</Link>
              <Link href={"/"}>Support</Link>
            </div>
          </div>
          <div className="">
            <h1 className="text-lg font-bold whitespace-nowrap">Quick Links</h1>
            <div className="flex flex-col gap-4 text-gray-500 text-sm mt-8">
              <Link href={"/"}>Account</Link>
              <Link href={"/"}>Cart</Link>
              <Link href={"/"} className="whitespace-nowrap">
                Delivery & Returns
              </Link>
              {/* <Link href={"/"} className="whitespace-nowrap">
                Privacy Policy
              </Link> */}
              <Link href={"/"} className="whitespace-nowrap">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-6" />
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between py-6">
        <p className="text-gray-500 text-sm">
          <span className="text-black font-semibold">Premier Gadgets NG</span>{" "}
          Copyright © 2024
        </p>
        <Image src={Payments} className="scale-75" alt="Payment options" />
      </div>
    </div>
  );
};

export default Footer;
