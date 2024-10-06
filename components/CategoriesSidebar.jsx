import React from "react";
import { IoMenu } from "react-icons/io5";
import CategorySidebarItem from "./CategorySidebarItem";

const CategoriesSidebar = ({ categories, showCategories, setShowCategories }) => {
  return (
    <>
      {showCategories && (
        <div onClick={() => setShowCategories(false)} className="bg-black/80 fixed inset-0 z-[9999999]">
          <div onClick={(e) => e.stopPropagation()} className="relative bg-white w-2/3 md:w-80 h-full px-4 py-6 overflow-y-scroll">
            <div className="bg-deepBlue flex items-center gap-2 rounded-full px-5 py-3 md:py-3.5">
              <IoMenu color="white" className="text-lg" />
              <h3 className="text-white text-sm md:text-[16px] font-semibold">All Categories</h3>
            </div>
            <div className="flex flex-col gap-8 mt-8 px-2">
                {categories.map((category, index) => (
                    <CategorySidebarItem key={index} category={category} setShowCategories={setShowCategories} />
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoriesSidebar;
