import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import productsReducer from "./features/products/productsSlice";
import bookingsReducer from "./features/bookings/bookingsSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: { authReducer, productsReducer, bookingsReducer, cartReducer },
});

export default store;
