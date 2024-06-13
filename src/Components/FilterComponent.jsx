import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function FilterComponent({
  handleCategoryFilter,
  rangeVal,
  handleRangeFilter,
}) {
  const { categoriesArray, maxPrice } = useSelector(
    (state) => state.productsReducer
  );

  return (
    <div className="border-r mt-10 w-[250px] hidden sm:block">
      {/* CATEGORY BUTTONS  */}
      <p className="font-bold text-lg capitalize mb-2">categories</p>
      {categoriesArray?.map((category) => {
        return (
          <button
            className="block text-sm mb-1 capitalize focus:underline"
            name={category}
            onClick={handleCategoryFilter}
            key={category}
          >
            {category}
          </button>
        );
      })}

      {/* PRICE FILTER */}
      <div className="mt-8">
        <h2 className="font-bold text-lg capitalize mb-2">price</h2>
        <input
          type="range"
          min={0}
          max={maxPrice || 0}
          value={rangeVal || ""}
          onChange={handleRangeFilter}
          className="mb-0"
        />
        <p className="text-sm">0 - ₹{rangeVal}</p>
      </div>
    </div>
  );
}

export default FilterComponent;
