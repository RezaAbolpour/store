import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ category, isActive, onClick }) {
  return (
    <div
      className={`p-4 border border-gray-300 cursor-pointer ${
        isActive ? "bg-gray-200" : ""
      } rounded-md border-solid border-2 border-gray-200 shadow-2xl hover:shadow-2xl hover:bg-gray-400`}
      onClick={() => onClick(category.id)}
    >
      <h2 className="text-sm _font-fat text-right">
        <Link to={`/product-categori/${category.id}`}>{category.name}</Link>
      </h2>
      {isActive && (
        <ul className="mt-1 list-disc">
          {/* {category.subcategories.map((item)=>(
                console.log(item)
            ))} */}
          {category.subcategories.map((item) => (
            <li
              key={item.id}
              className="text-white-600 text-right _font-medium hover:text-white list-none"
            >
              <Link to={`/product-subCategori/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoryCard;
