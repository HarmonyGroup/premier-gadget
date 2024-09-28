"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMinus, FiPlus } from "react-icons/fi";

const CategorySidebarItem = ({ category }) => {
  const [showCategories, setShowCategories] = useState(false);

  const categoryName = encodeURIComponent(category.name.replace(/ /g, "-"));
  if (category.children.length > 0) {
    return (
      <div>
        <div className="flex items-center justify-between">
          <Link
            href={`/category/${categoryName}`}
            className="text-[16px] font-medium outline-none"
          >
            {category.name}
          </Link>
          <button
            onClick={() => setShowCategories(!showCategories)}
            className="text-[15px] outline-none"
          >
            {showCategories ? <FiMinus /> : <FiPlus />}
          </button>
        </div>
        {showCategories && (
          <div className="flex flex-col gap-6 mt-6">
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
        href={`/category/${categoryName}`}
        key={category._id}
        className="text-[16px] font-medium outline-none"
      >
        {category.name}
      </Link>
    );
  }
};

export default CategorySidebarItem;
