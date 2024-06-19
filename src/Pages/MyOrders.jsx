import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookingsByUser } from "../features/bookings/bookingsSlice";
import { BlogImg } from "../Components";

function MyOrders() {
  const dispatch = useDispatch();
  const { currUser } = useSelector((state) => state.authReducer);
  const { userBookings } = useSelector((state) => state.bookingsReducer);

  useEffect(() => {
    dispatch(getBookingsByUser(currUser?.userId));
  }, [currUser]);

  return (
    <div className="page-center">
      <div className="orders-list max-w-[700px] mx-auto">
        <h2 className="text-2xl mt-1 font-bold mb-3">My Orders</h2>
        {userBookings?.map((order) => {
          const {
            productId,
            productName,
            productImg,
            productPrice,
            userId,
            startDate,
            endDate,
            quantity,
          } = order;

          return (
            <article
              key={productId}
              className="flex justify-between border bg-white w-full p-4 mb-5 rounded-md"
            >
              <div>
                <h3 className="font-bold capitalize text-xl mb-1">
                  {productName}
                </h3>
                <h2 className="">
                  Date: {startDate} to {endDate}
                </h2>
                <p className="">quantity: {quantity}</p>
                <p className="">₹{productPrice}</p>
                <p className="">product id: {productId}</p>
              </div>
              <div className="w-[200px]">
                <BlogImg imgId={productImg} />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default MyOrders;
