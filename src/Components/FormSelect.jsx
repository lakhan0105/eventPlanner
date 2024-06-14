import React, { useState } from "react";
import { useSelector } from "react-redux";

function FormSelect({ productId, handleFormSelect }) {
  const { allProducts } = useSelector((state) => state.productsReducer);

  // Find the product
  const product = allProducts.find((product) => {
    if (product.id === productId) {
      return product;
    }
  });

  // Create an array of quantity numbers
  const quantityArray = [];
  if (product?.quantity) {
    for (let i = 1; i <= product?.quantity; i++) {
      quantityArray.push(i);
    }
  }

  return (
    <div className="mt-5">
      <label htmlFor="select" className="mr-2 text-sm">
        Quantity
      </label>

      <select
        className="text-sm border rounded"
        id="select"
        onChange={handleFormSelect}
      >
        {quantityArray?.map((value) => {
          return <option value={value}>{value}</option>;
        })}
      </select>
    </div>
  );
}

export default FormSelect;
