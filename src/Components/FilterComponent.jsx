import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function FilterComponent({ allProducts, handleFilter }) {
  const dispatch = useDispatch();
  const { categoriesArray } = useSelector((state) => state.productsReducer);

  return (
    <div className="border-r mt-10 w-[250px] hidden sm:block">
      <h2 className="font-bold text-xl capitalize mb-5">filters</h2>

      {/* CATEGORY BUTTONS  */}
      <p className="font-bold capitalize underline mb-1">categories</p>
      {categoriesArray?.map((category) => {
        return (
          <button
            className="block capitalize"
            name={category}
            onClick={handleFilter}
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default FilterComponent;
