import React, { useEffect, useState } from "react";
import { BlogImg, FilterSection, FormSelect } from "../Components/index";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { allProducts } = useSelector((state) => state.productsReducer);
  const param = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(null);

  // useEffect to load the single product details
  useEffect(() => {
    const findProduct = allProducts?.find((product) => {
      if (product.id === param.id) {
        return product;
      }
    });

    if (findProduct) {
      setSingleProduct(findProduct);
    }
  }, []);

  // handleFormSelect
  function handleFormSelect(e) {
    console.log(e.target.value);
    setSelectedQuantity(Number(e.target.value));
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
        <div>
          <h3 className="text-2xl capitalize">{singleProduct?.name}</h3>
          <p>
            ₹<span className="font-bold text-2xl">{singleProduct?.price}</span>
            /day
          </p>
          <p className="text-sm mt-2 max-w-[90%]">{singleProduct?.desc}</p>

          <FormSelect
            productId={singleProduct?.id}
            handleFormSelect={handleFormSelect}
          />
        </div>
      </div>

      {/* REVIEWS */}
    </section>
  );
}

export default SingleProduct;
