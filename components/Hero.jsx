import Image from "next/image";
import React from "react";
import Apple from "@/assets/apple-products.webp";
import Link from "next/link";
import Grid1BG from "@/assets/grid-1-bg.jpg";
import Grid2BG from "@/assets/grid-2-bg.jpg";
import Grid22BG from "@/assets/grid-2-2-bg.jpg";
import Accessories from "@/assets/accessories-2.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-6 px-4 py-7 md:px-10">
      <div className="col-span-2 lg:col-span-1">
        <div className="relative h-[515px] flex flex-col items-center w-full rounded-xl px-6 py-12 overflow-hidden">
          <h1 className="text-white text-3xl lg:text-4xl text-center font-semibold z-10">
            Exciting Gadget <br className="block lg:hidden" /> Deals
          </h1>
          <p className="text-white text-sm text-center font-light mt-3 z-10">
            Shop great deals on laptops, tablets, phones and more
          </p>
          <Link
            href={"/"}
            className="bg-lightBlue text-white text-sm font-medium rounded-lg px-6 py-2.5 mt-8 z-10"
          >
            Shop Now
          </Link>
          <Image
            src={Apple}
            className="z-50"
            height={600}
            width={600}
            alt="Apple"
          />
          <Image src={Grid1BG} layout="fill" objectFit="fill" />
        </div>
      </div>
      <div className="col-span-2 lg:col-span-1">
        <div className="relative h-[515px] flex flex-col items-center w-full rounded-xl overflow-hidden px-6 py-12">
          <h1 className="text-white text-3xl lg:text-4xl text-center font-semibold z-10 relative">
            Accessories For <br className="block lg:hidden" /> Everyone
          </h1>
          <p className="text-white text-sm text-center font-light z-10 mt-3 relative">
            Exclusive offers on phone and laptop accessories
          </p>
          <Link
            href={"/"}
            className="bg-lightBlue text-white text-sm font-medium rounded-lg px-6 py-2.5 mt-8 z-10 relative"
          >
            Shop Now
          </Link>
          <Image
            src={Accessories}
            className="z-50 mt-[80px]"
            height={580}
            width={580}
            alt="Apple"
          />
          <Image src={Grid1BG} className="z-0" layout="fill" objectFit="fill" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
