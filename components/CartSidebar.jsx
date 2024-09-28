import { useContext } from "react";
import { CartContext } from "@/Context";
import { IoClose } from "react-icons/io5";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { HiStar } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";
import Link from "next/link";

const CartSidebar = ({ cartSidebar, setCartSidebar }) => {
  const { cartProducts } = useContext(CartContext);

  const calculateTotalPrice = () => {
    return cartProducts.reduce((total, product) => {
      const price = product.discount ? product.discount : product.price; // Use discount price if available
      return total + price;
    }, 0);
  };

  return (
    <>
      {cartSidebar && (
        <div
          onClick={() => setCartSidebar(false)}
          className="bg-black/80 fixed inset-0 z-[99]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col bg-white w-2/3 md:w-96 h-full overflow-y-scroll ml-auto"
          >
            <div className="flex items-center justify-between border-b px-3 md:px-4 py-4 md:py-6">
              <h1 className="text-sm md:text-xl font-bold">Shopping cart</h1>
              <button
                onClick={() => setCartSidebar(false)}
                className="flex items-center gap-1 text-gray-500 text-xs md:text-sm"
              >
                <IoClose />
                Close
              </button>
            </div>
            <div className="h-full overflow-y-scroll px-3">
              {cartProducts?.length > 0 ? (
                <div className="h-full flex flex-col gap-3 py-9">
                  {cartProducts.map((cartProduct) => (
                    <div key={cartProduct?._id} className="flex items-center py-5">
                      <div className="relative w-28 h-28">
                        <Image
                          src={cartProduct?.images[0]}
                          alt="product"
                          layout="fill"
                          objectFit="contain"
                          className="rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-black text-sm font-semibold uppercase line-clamp-1">
                          {cartProduct?.title}
                        </p>
                        <div className="flex items-center text-yellow-500">
                          <HiStar />
                          <HiStar />
                          <HiStar />
                          <HiStar />
                          <HiStar />
                        </div>
                        <p className="text-deepBlue font-semibold">
                          &#8358; {formatPrice(cartProduct?.price)}
                        </p>
                        <button className="flex items-center gap-2 text-red-500 text-xs mr-auto mt-1">
                          <HiOutlineTrash />
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center">
                  <MdOutlineRemoveShoppingCart
                    size={80}
                    className="text-gray-200"
                  />
                  <p className="text-sm font-bold mt-10">
                    No products in the cart
                  </p>
                  <button
                    onClick={() => setCartSidebar(false)}
                    className="bg-deepBlue text-white text-sm font-semibold rounded-lg px-4 py-2 mt-5"
                  >
                    Return To Shop
                  </button>
                </div>
              )}
            </div>
            <div className="w-full flex flex-col">
              <div className="flex items-center justify-between border-y px-3 py-5">
                <p className="text-lg font-bold">Subtotal:</p>
                <p className="text-deepBlue text-lg font-bold">
                  &#8358; {formatPrice(calculateTotalPrice())}
                </p>
              </div>
              <div className="w-full flex flex-col gap-3 px-4 py-4">
                <Link
                  href={"/cart"}
                  className="bg-deepBlue/15 text-deepBlue font-semibold rounded-lg w-full flex items-center justify-center py-3"
                >
                  View Cart
                </Link>
                <Link
                  href={"/cart"}
                  className="bg-deepBlue text-white font-semibold rounded-lg w-full flex items-center justify-center py-3"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartSidebar;
