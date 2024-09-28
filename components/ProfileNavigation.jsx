import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaAngleDown } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";
import { signOut } from "next-auth/react";

const ProfileNavigation = () => {
  const path = usePathname();

  return (
    <div>
      <div>
        <h3 className="text-lg font-bold border-b border-gray-300 py-2">
          MY ACCOUNT
        </h3>
        <div className="flex flex-col gap-7 font-medium mt-8">
          <Link
            href={"/account"}
            className={`${
              path === "/account" ? "bg-gray-200 px-3 py-2 rounded-lg" : "px-3"
            }`}
          >
            Account details
          </Link>
          <Link href={"/account/password-reset"} className={`${path.includes("password-reset") ? "bg-gray-200 px-3 py-2 rounded-lg" : "px-3"}`}>Password reset</Link>
          <Link href={"/account/orders"} className={`px-3`}>Orders</Link>
          <button onClick={() => signOut()} className="mr-auto px-3">
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileNavigation;
