import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBookingsByDate,
  getBookingsByUser,
} from "../features/bookings/bookingsSlice";
import { BlogImg } from "../Components";
import { useNavigate } from "react-router-dom";

function MyOrders() {
  const dispatch = useDispatch();
  const { currUser } = useSelector((state) => state.authReducer);
  const { userBookings, bookingsByDate, isLoading } = useSelector(
    (state) => state.bookingsReducer
  );

  const navigate = useNavigate();

  useEffect(() => {
    // if the user has not loggedin, take him back to the home page
    if (!currUser) {
      navigate("/");
    } else {
      dispatch(getBookingsByUser(currUser?.userId));
    }
  }, [currUser, navigate]);

  useEffect(() => {
    if (userBookings) {
      dispatch(getBookingsByDate());
    }
  }, [userBookings]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  // if there are no orders
  if (userBookings?.length < 1) {
    return <h2>No orders to show! Go ahead and book now</h2>;
  }

  return (
    <div className="mt-16 max-w-[700px] mx-auto">
      <h2 className="font-bold text-2xl mb-2">My Orders</h2>
      {Object.keys(bookingsByDate).map((date) => {
        return (
          <div key={date} className="mb-10">
            <h2 className="mb-1">{date}</h2>
            {bookingsByDate[date].map((obj) => {
              const {
                productId,
                productImg,
                productName,
                productPrice,
                startDate,
                endDate,
                quantity,
                userId,
              } = obj;
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
        );
      })}
    </div>
  );
}

export default MyOrders;
