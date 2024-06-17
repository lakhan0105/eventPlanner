import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import productsReducer from "./features/products/productsSlice";
import bookingsReducer from "./features/bookings/bookingsSlice";

const store = configureStore({
  reducer: { authReducer, productsReducer, bookingsReducer },
});

export default store;
