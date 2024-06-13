import React, { useEffect, useState } from "react";
import CardsContainer from "../Components/CardsContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  genFilteredProducts,
  genFilteredProductsByPrice,
  getAllProducts,
} from "../features/products/productsSlice";
import FilterComponent from "../Components/FilterComponent";

function AllProducts() {
  const dispatch = useDispatch();
  const { allProducts, filteredProducts, filteredProductsByPrice, maxPrice } =
    useSelector((state) => state?.productsReducer);

  const [products, setProducts] = useState(allProducts);
  const [rangeVal, setRangeVal] = useState(maxPrice || "");

  // fetch all the products on page load
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  // set the products state to the allProducts which is fetched from the server
  useEffect(() => {
    setProducts(allProducts);
  }, [dispatch, allProducts]);

  // set the filtredProducts and the filteredProductsByPrice
  useEffect(() => {
    setProducts(filteredProducts);
    setProducts(filteredProductsByPrice);
  }, [filteredProducts, filteredProductsByPrice]);

  // useEffect to set the value of rangeVal on page load
  useEffect(() => {
    setRangeVal(maxPrice || "");
  }, [maxPrice]);

  // handleCategoryFilter
  function handleCategoryFilter(e) {
    const btnName = e.target.name;
    if (btnName === "all") {
      setProducts(allProducts);
      setRangeVal(maxPrice); // also set the range val to default
    } else {
      dispatch(genFilteredProducts(btnName));
    }
  }

  // handleRangeFilter
  function handleRangeFilter(e) {
    const value = e.target.value;
    setRangeVal(value); // when range is changed by user change the rangeVal state
    dispatch(genFilteredProductsByPrice(Number(value))); // call the filter func
  }

  return (
    <div className="page-center p-5 w-full flex gap-10 ">
      {/* FILTER SECTION */}
      <FilterComponent
        allProducts={allProducts}
        handleCategoryFilter={handleCategoryFilter}
        rangeVal={rangeVal}
        handleRangeFilter={handleRangeFilter}
      />

      {/* CARDS CONTAINER (PRODUCTS) */}
      <div className="w-full">
        <CardsContainer data={products} title={"All products"} />
      </div>
    </div>
  );
}

export default AllProducts;
