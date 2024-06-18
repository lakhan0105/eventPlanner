import React, { useEffect, useState } from "react";
import { BlogImg, FormSelect, SelectDate } from "../Components/index";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../features/products/productsSlice";
import { checkAvl } from "../features/bookings/bookingsSlice";
import { addToCart } from "../features/cart/cartSlice";

// TODO: when the page loads set the isAvailable to false for each and every page.

function SingleProduct() {
  const { allProducts } = useSelector((state) => state?.productsReducer);
  const { isAvailable, isLoading } = useSelector(
    (state) => state?.bookingsReducer
  );

  const param = useParams();
  const dispatch = useDispatch();

  const [singleProduct, setSingleProduct] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  // useEffect to load the single product details
  useEffect(() => {
    // on page refresh, allProducts was setting back to null, so i wrote the below code
    if (!allProducts) {
      dispatch(getAllProducts());
    }

    // find the single product in allPproducts array
    const findProduct = allProducts?.find((product) => {
      if (product?.id === param.id) {
        return product;
      }
    });

    if (findProduct) {
      setSingleProduct(findProduct);
    }
  }, [allProducts, singleProduct]);

  // handleFormSelect
  function handleFormSelect(e) {
    setSelectedQuantity(Number(e.target.value));
  }

  // handleCheckAvl
  function handleCheckAvl(e) {
    e.preventDefault();

    // check for empty inputs
    if (
      selectedQuantity < 1 ||
      selectedStartDate === null ||
      selectedEndDate === null
    ) {
      alert("please fill all the details ");
      return;
    }

    const obj = {
      productId: singleProduct?.id,
      selectedQuantity,
      selectedStartDate,
      selectedEndDate,
    };

    dispatch(checkAvl(obj));
  }

  // handleAddToCart
  function handleAddToCart(e) {
    const cartItem = {
      productId: singleProduct?.id,
      productName: singleProduct?.name,
      productImg: singleProduct?.img,
      productPrice: singleProduct?.price,
      selectedQuantity,
      selectedStartDate,
      selectedEndDate,
    };

    dispatch(addToCart(cartItem));
  }

  return (
    <section className="page-center ">
      {/* SINGLE PRODUCT */}
      <div className="flex items-start gap-8 pt-5">
        {/* PRODUCT IMAGE */}
        <div className="img-container h-[400px] max-w-[600px] rounded overflow-hidden">
          {singleProduct?.img ? (
            <BlogImg imgId={singleProduct?.img} />
          ) : (
            <h2>No image present</h2>
          )}
        </div>

        {/* PRODUCT INFO */}
        <div className="flex flex-col items-start">
          <h3 className="text-2xl capitalize">{singleProduct?.name}</h3>
          <p>
            ₹<span className="font-bold text-2xl">{singleProduct?.price}</span>
            /day
          </p>
          <p className="text-sm mt-2 max-w-[90%]">{singleProduct?.desc}</p>

          <form
            className="border inline-block p-2 rounded mt-5"
            onSubmit={handleCheckAvl}
          >
            {/* select quantity */}
            <FormSelect
              productId={singleProduct?.id}
              handleFormSelect={handleFormSelect}
              defaultVal={selectedQuantity}
            />

            {/* fill the dates  */}
            <div className="text-sm flex gap-5">
              <SelectDate
                label={"start date"}
                setState={setSelectedStartDate}
              />
              <SelectDate label={"end date"} setState={setSelectedEndDate} />
            </div>

            {/* check avl btn */}
            <button
              type="submit"
              className="mt-5 border rounded text-sm capitalize p-2 bg-white"
            >
              check availability
            </button>
          </form>

          {/* show the cart btn if the product is available and not null else show msg that its not available  */}
          {isAvailable !== null &&
            (isAvailable ? (
              <button
                className="border mt-5 rounded px-2"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
            ) : (
              "product is not available for the selected date :("
            ))}
        </div>
      </div>

      {/* REVIEWS */}
    </section>
  );
}

export default SingleProduct;
