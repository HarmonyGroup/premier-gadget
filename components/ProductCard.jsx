import Link from "next/link";
import Image from "next/image";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
import { formatPrice } from "@/lib/utils";
import { useContext } from "react";
import toast from "react-hot-toast";
import { HiStar } from "react-icons/hi2";

const ProductCard = ({ product, link }) => {
  const imageUrl =
    product?.images && product?.images?.length > 0
      ? product.images[0]
      : "/assets/iphone-sample.png";

  return (
    <div className="bg-white group w-full max-w-60 rounded-xl">
      <div className="relative p-7">
        <div className="relative h-24 md:h-28 mx-auto">
          {" "}
          {/* Adjusted dimensions for image container */}
          <Image
            src={imageUrl}
            alt="product"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 p-3">
        <div>
          <Link href={link} className="font-bold hover:underline underline-offset-1">
            <span className="line-clamp-2">{product?.title}</span>
          </Link>
          <p className="text-sm text-gray-500 mt-2">{product?.brand}</p>
        </div>
        <div className="flex items-center text-yellow-500">
          <HiStar />
          <HiStar />
          <HiStar />
          <HiStar />
          <HiStar />
        </div>
        {product?.availability === "Out of Stock" ? (
          <p className="text-xs text-red-600 font-semibold mt-2 ">
            {product.availability}
          </p>
        ) : (
          <div className="flex items-center gap-2">
            <BsCheckLg size={20} color="#438bc9" />
            <p className="text-sm font-bold">In Stock</p>
          </div>
        )}

        {product?.discount ? (
          <div className="flex items-center gap-3">
            <p className="text-deepBlue text-sm font-bold">
              &#8358; {formatPrice(product?.discount)}
            </p>
            <p className="text-xs text-gray-500 font-medium line-through    ">
              &#8358; {formatPrice(product?.price)}
            </p>
          </div>
        ) : (
          <p className="text-deepBlue text-sm font-bold">
            &#8358; {formatPrice(product?.price)}
          </p>
        )}

        <Link
          href={"/"}
          className="flex items-center justify-center bg-deepBlue text-white text-sm font-semibold p-2 rounded-lg"
        >
          Add To Cart
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
