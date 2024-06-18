import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlogImg } from "../Components";
import { removeFrmCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, cartTotal, orderTotal, tax, shipping } = useSelector(
    (state) => state.cartReducer
  );
  const dispatch = useDispatch();

  // handleRemoveFrmCart
  function handleRemoveFrmCart(productId) {
    dispatch(removeFrmCart(productId));
  }

  if (cartItems.length < 1) {
    return (
      <div className="page-center mx-auto text-center">
        <h2 className="font-bold text-2xl">Cart is empty!</h2>
        <Link to={"/all-products"}>
          <button className="border text-sm capitalize px-2 rounded mt-2">
            add items
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="page-center flex justify-center items-start w-full gap-10 relative">
      {/* items container */}
      <div className="w-full max-w-[600px]">
        <h3 className="font-bold text-2xl text-left mb-4">Cart Items </h3>

        {cartItems?.map((item) => {
          // destructuring
          const {
            productId,
            productImg,
            productName,
            productPrice,
            selectedStartDate,
            selectedEndDate,
            selectedQuantity,
          } = item;

          return (
            <article
              key={productId}
              className="border rounded flex items-center justify-between gap-3 mb-4 p-2 bg-white"
            >
              {/* left */}
              <div className="flex gap-3">
                <div className="img-container w-[120px] rounded overflow-hidden">
                  <BlogImg imgId={productImg} />
                </div>
                <div>
                  <h3 className="font-bold capitalize">{productName}</h3>
                  <p className="text-gray-500 text-sm italic">
                    Quantity: {selectedQuantity}
                  </p>
                  <p className="text-gray-500 text-sm italic">
                    Date: {selectedStartDate} to {selectedEndDate}
                  </p>
                  <h3 className="text-sm mt-1">₹{productPrice}/day</h3>
                </div>
              </div>

              {/* right */}
              <div>
                <button
                  className="border px-2 text-sm rounded"
                  onClick={() => {
                    handleRemoveFrmCart(productId);
                  }}
                >
                  remove
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* other information container */}
      <div className="other-info-container">
        <div className="border rounded-md p-4 text-sm w-[250px] mt-12 bg-white shadow-sm">
          <h2 className="font-bold mb-1 text-xl">Cart Info</h2>

          <hr className="mb-3" />
          <p className="order-text-left">
            Total Items <span className="text-right">{cartItems.length}</span>
          </p>
          <p className="order-text-left">
            Cart total <span className="text-right">₹{cartTotal}</span>
          </p>
          <p className="order-text-left">
            Tax <span className="text-right">₹{tax}</span>
          </p>
          <p className="order-text-left">
            Shipping <span className="text-right">₹{shipping}</span>
          </p>

          <hr className="mt-2" />

          <p className="order-text-left mt-3 font-bold">
            Order Total <span className="">₹{orderTotal}</span>
          </p>
        </div>

        <div className="mt-3 w-full text">
          <button className="border w-[100%] rounded-md py-1">
            confirm and proceed
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
