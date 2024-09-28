"use client";

import { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import { LoaderIcon } from "lucide-react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";
import { HiStar } from "react-icons/hi";
import { FaStore } from "react-icons/fa6";
import { CgFacebook } from "react-icons/cg";
import { BsTwitterX } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { FiInfo } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { formatPrice } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CartContext } from "@/Context";

const Page = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageDisplay, setImageDisplay] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        setLoading(true);
        try {
          const response = await fetch(`/api/product-page/${id}`);
          const productData = await response.json();
          setProduct(productData);
          setImageDisplay(productData.images[0]);
        } catch (error) {
          toast.error("Something went wrong!");
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <LoaderIcon size={40} className="animate-spin text-default" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <LoaderIcon size={40} className="animate-spin text-default" />
      </div>
    );
  }

  return (
    <div className="">
      <div className="bg-white grid grid-cols-2 gap-14 px-4 py-14 md:py-24 md:px-10">
        <div className="col-span-2 md:col-span-1">
          <div className="h-full w-full grid grid-cols-3 gap-4">
            <div className="col-span-3 md:col-span-1">
              <div className="flex md:flex-col gap-4 w-full overflow-x-scroll md:overflow-y-scroll md:h-full">
                {product?.images?.map((image, index) => (
                  <div
                    key={index}
                    className="relative w-32 md:w-full h-32 cursor-pointer overflow-hidden"
                    onClick={() => setImageDisplay(image)}
                  >
                    <Image
                      src={image}
                      alt="product"
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                      className="p-6" // Add padding around the image
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-3 md:col-span-2 -order-1 md:order-1">
              <div className="relative h-72 md:h-full w-full overflow-hidden">
                <Image
                  src={imageDisplay}
                  alt="product"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                  className="p-6 md:p-10" // Add padding around the image
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h1 className="text-2xl font-bold">{product?.title}</h1>
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-1 text-yellow-400">
              <HiStar size={23} />
              <HiStar size={23} />
              <HiStar size={23} />
              <HiStar size={23} />
              <HiStar size={23} />
            </div>
            <p className="text-gray-500 text-sm">(Customers review)</p>
          </div>
          <p className="text-deepBlue text-2xl font-bold mt-6">
            &#8358; {formatPrice(product?.price)}
          </p>
          <button
            onClick={() => {
              addToCart(product);
              toast.success("Added to cart!");
            }}
            className="w-full flex items-center justify-center gap-2 bg-deepBlue text-white font-bold rounded-md p-2.5 mt-6 hover:bg-deepBlue/90"
          >
            <HiOutlineShoppingCart />
            Add To Cart
          </button>
          <hr className="my-6" />
          <div className="flex flex-col gap-7 border border-gray-200 rounded-lg p-5 mt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <FaStore color="#438bc9" />
                  <h3 className="text-sm font-semibold">Pick up from store</h3>
                </div>
                <p className="text-gray-500 text-sm mt-2.5">
                  Custom pickup date
                </p>
              </div>
              <p className="text-sm font-semibold italic">Free</p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <FaStore color="#438bc9" />
                  <h3 className="text-sm font-semibold">Courier delivery</h3>
                </div>
                <p className="text-gray-500 text-sm mt-2.5">
                  1 - 5 days from purchase date
                </p>
              </div>
              <p className="text-sm font-semibold italic">Charges apply</p>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 mt-6">
            <p className="text-sm font-semibold">Share:</p>
            <div className="flex items-center gap-3 text-gray-500">
              <Link href={"/"}>
                <CgFacebook size={18} />
              </Link>
              <Link href={"/"}>
                <BsTwitterX size={13} />
              </Link>
              <Link href={"/"}>
                <BsPinterest size={15} />
              </Link>
              <Link href={"/"}>
                <BiLogoLinkedin size={20} />
              </Link>
              <Link href={"/"}>
                <FaTelegram size={17} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-10 py-4 md:py-10">
        <div className="bg-white rounded-lg p-4 md:p-6">
          <div className="flex items-center gap-3">
            <FiInfo size={19} color="#438bc9" />
            <h3 className="text-xl font-semibold">Description</h3>
          </div>
          <p className="text-gray-500 text-sm mt-5">{product?.description}</p>
        </div>
        <div className="bg-white rounded-lg p-4 md:p-6 mt-4 md:mt-10">
          <div className="flex items-center gap-3">
            <FiInfo size={19} color="#438bc9" />
            <h3 className="text-xl font-semibold">Specification</h3>
          </div>
          <Table className="border-none mt-6">
            <TableBody>
              {product?.properties?.map((property, index) => (
                <TableRow
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-gray-100 hover:bg-gray-100 border-none"
                      : "bg-white hover:bg-white border-none"
                  }
                >
                  <TableCell className="text-sm font-semibold uppercase py-4">
                    {property.name}
                  </TableCell>
                  <TableCell className="text-sm">
                    {property.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Page;
