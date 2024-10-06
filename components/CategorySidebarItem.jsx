"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMinus, FiPlus } from "react-icons/fi";

const CategorySidebarItem = ({ category, setShowCategories }) => {
  const [showSubCategories, setShowSubCategories] = useState(false);

  const categoryName = encodeURIComponent(category.name.replace(/ /g, "-"));
  if (category.children.length > 0) {
    return (
      <div>
        <div className="flex items-center justify-between">
          <Link
            onClick={() => setShowCategories(false)}
            href={`/category/${categoryName}`}
            className="text-sm md:text-[16px] font-medium outline-none"
          >
            {category.name}
          </Link>
          <button
            onClick={() => setShowSubCategories(!showSubCategories)}
            className="text-[15px] outline-none"
          >
            {showSubCategories ? <FiMinus /> : <FiPlus />}
          </button>
        </div>
        {showSubCategories && (
          <div className="flex flex-col gap-8 mt-8">
            {category.children.map((child) => (
              <CategorySidebarItem key={child._id} category={child} />
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <Link
        onClick={() => setShowCategories(false)}
        href={`/category/${categoryName}`}
        key={category._id}
        className="text-sm md:text-[16px] font-medium outline-none"
      >
        {category.name}
      </Link>
    );
  }
};

export default CategorySidebarItem;
