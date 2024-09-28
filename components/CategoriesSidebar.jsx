import React from "react";
import { IoMenu } from "react-icons/io5";
import CategorySidebarItem from "./CategorySidebarItem";

const CategoriesSidebar = ({ categories, showCategories, setShowCategories }) => {
  return (
    <>
      {showCategories && (
        <div onClick={() => setShowCategories(false)} className="bg-black/80 fixed inset-0 z-[99]">
          <div onClick={(e) => e.stopPropagation()} className="relative bg-white w-56 md:w-80 h-full p-4 overflow-y-scroll">
            <div className="bg-deepBlue flex items-center gap-2.5 rounded-full px-5 py-3.5">
              <IoMenu color="white" size={20} />
              <h3 className="text-white font-semibold">All Categories</h3>
            </div>
            <div className="flex flex-col gap-7 mt-8 px-2">
                {categories.map((category, index) => (
                    <CategorySidebarItem key={index} category={category} />
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoriesSidebar;
