import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import productsReducer from "./features/products/productsSlice";

const store = configureStore({
  reducer: { authReducer, productsReducer },
});

export default store;
