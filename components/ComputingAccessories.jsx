import Image from "next/image";
import IMac from "@/assets/iMac.png";
import Printer from "@/assets/printer.png";
import Monitor from "@/assets/monitor.png";
import PrinterBanner from "@/assets/printer-banner.jpg";
import PIXMA from "@/assets/canon-printer.png";
import Canon from "@/assets/canon-logo.png";
import { FaKeyboard } from "react-icons/fa";
import { BsMouseFill } from "react-icons/bs";
import { FaHeadphones } from "react-icons/fa6";
import Link from "next/link";

const ComputingAccessories = () => {
  return (
    <div className="grid grid-cols-3 gap-6 px-4 py-4 md:px-10">
      <div className="col-span-3 xl:col-span-2">
        <div className="bg-white flex flex-col lg:flex-row items-center lg:items-start gap-14 rounded-xl p-16">
          <div className="flex-shrink-0">
            <Image
              src={IMac}
              alt="Computing Accessories"
              height={300}
              width={300}
            />
          </div>
          <div className="">
            <h1 className="text-3xl font-bold text-center lg:text-start">
              Computing Accessories
            </h1>
            <p className="text-gray-500 text-center lg:text-start mt-6">
              Personalize your Surface Pro with Microsoft branded accessories.{" "}
              <br className="hidden lg:block" /> In the presence of many colors
              for every taste.
            </p>
            <div className="flex items-center justify-center flex-wrap gap-3 mt-10">
              <div className="bg-gray-100 text-gray-700 text-sm font-medium flex items-center gap-3 rounded-lg px-4 py-2">
                <FaKeyboard className="text-gray-500" />
                Keyboards
              </div>
              <div className="bg-gray-100 text-gray-700 text-sm font-medium flex items-center gap-3 rounded-lg px-4 py-2">
                <BsMouseFill className="text-gray-500" />
                Mices
              </div>
              <div className="bg-gray-100 text-gray-700 text-sm font-medium flex items-center gap-3 rounded-lg px-4 py-2">
                <FaHeadphones className="text-gray-500" />
                Headphones
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-7">
          <div className="col-span-2 lg:col-span-1">
            <div className="printer flex flex-col sm:flex-row items-center justify-between gap-8 rounded-xl px-5 py-10">
              <div className="flex flex-col items-center sm:items-start">
                <h1 className="text-white text-lg font-bold">
                  Upgrade Your Office
                </h1>
                <p className="text-white text-sm text-center sm:text-start mt-2 mb-5">
                  We&apos;ve got the perfect match for all your printing needs
                </p>
                <Link
                  href={"/"}
                  className="border border-white text-white text-xs font-semibold rounded-lg px-4 py-2"
                >
                  Shop Now
                </Link>
              </div>
              <Image src={Printer} height={180} width={180} alt="Printer" />
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="monitor flex flex-col sm:flex-row items-center justify-between gap-8 rounded-xl px-5 py-10">
              <div className="flex flex-col items-center sm:items-start">
                <h1 className="text-white text-lg font-bold">
                  Enhance Your View
                </h1>
                <p className="text-white text-sm text-center sm:text-start mt-2 mb-5">
                  Elevate your workspace with the latest screen technology
                </p>
                <Link
                  href={"/"}
                  className="border border-white text-white text-xs font-semibold rounded-lg px-4 py-2"
                >
                  Shop Now
                </Link>
              </div>
              <Image src={Monitor} height={148} width={148} alt="Printer" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 lg:col-span-1 block lg:hidden xl:block">
        <div className="relative h-full w-full flex flex-col items-center justify-center gap-5 lg:gap-10 bg-red-300 rounded-xl overflow-hidden py-8">
          <div className="flex flex-col items-center">
            <Image
              src={Canon}
              className="relative z-10"
              height={80}
              width={80}
              alt="Canon"
            />
            <h1 className="relative z-10 text-white text-2xl font-bold mt-2">
              PIXMA G3730
            </h1>
            <p className="relative z-10 text-white text-sm font-light mt-1">
              Prints with peace of mind at low running cost
            </p>
          </div>
          <Image
            src={PIXMA}
            className="relative z-10 scale-75"
            alt="PIXMA G3730"
          />
          <Link
            href={"/"}
            className="relative z-10 border border-white text-white text-lg font-medium rounded-lg px-6 py-3"
          >
            Shop Now
          </Link>
          <Image src={PrinterBanner} layout="fill" objectFit="fill" />
        </div>
      </div>
    </div>
  );
};

export default ComputingAccessories;
