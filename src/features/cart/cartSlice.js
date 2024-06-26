import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToLS, getLS, removeLS } from "../../utilities/localStorage";

// initialState
const initialState = {
  isLoading: false,
  cartItems: getLS("cartItems") || [],
  cartTotal: getLS("cartTotal") || 0,
  tax: getLS("tax") || 0,
  orderTotal: getLS("orderTotal") || 0,
  shipping: 500,
};

// cartSlice
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      // find the item to check if it is already present in the cartItems state
      const findProduct = state.cartItems.find((item) => {
        if (item.productId === payload.productId) {
          return item;
        }
      });

      // if item with same quantity is already present, return a msg
      if (
        findProduct &&
        findProduct.selectedQuantity === payload.selectedQuantity
      ) {
        alert("item is already added to the cart!");
      }
      // if item with different quantity is already present, just update the quantity of the product in cartitems
      else if (
        findProduct &&
        findProduct.selectedQuantity !== payload.selectedQuantity
      ) {
        const editedCartItems = state.cartItems.map((item) => {
          if (item.productId === payload.productId) {
            return { ...item, selectedQuantity: payload.selectedQuantity };
          }
          return item;
        });
        // update the cartItems and localStorage
        state.cartItems = editedCartItems;
        state.cartTotal +=
          findProduct.productPrice *
          (payload.selectedQuantity - findProduct.selectedQuantity);
        state.tax = 0.1 * state.cartTotal;
        state.orderTotal = state.cartTotal + state.tax + state.shipping;
        addToLS("cartItems", state.cartItems);
        addToLS("tax", state.tax);
        addToLS("cartTotal", state.cartTotal);
        addToLS("orderTotal", state.orderTotal);
      }
      // otherwise just add the item
      else {
        state.cartItems.push(payload);
        state.cartTotal += payload.selectedQuantity * payload.productPrice;
        state.tax = 0.2 * state.cartTotal;
        state.orderTotal = state.cartTotal + state.tax + state.shipping;
        addToLS("cartItems", state.cartItems);
        addToLS("tax", state.tax);
        addToLS("cartTotal", state.cartTotal);
        addToLS("orderTotal", state.orderTotal);
      }
    },
    removeFrmCart: (state, { payload }) => {
      const productId = payload;
      const findProduct = state.cartItems.find((item) => {
        if (item.productId === productId) {
          return item;
        }
      });

      if (findProduct) {
        // remove the item from the cartItems state
        const editedCartItems = state.cartItems.filter((item) => {
          if (item.productId !== productId) {
            return item;
          }
        });

        state.cartItems = editedCartItems;
        state.cartTotal -=
          findProduct.productPrice * findProduct.selectedQuantity;
        state.tax = 0.2 * state.cartTotal;
        state.orderTotal = state.cartTotal + state.tax + state.shipping;
        addToLS("cartItems", editedCartItems);
        addToLS("tax", state.tax);
        addToLS("cartTotal", state.cartTotal);
        addToLS("orderTotal", state.orderTotal);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      removeLS(cartItems);
    },
  },
});

// export
export default cartSlice.reducer;
export const { addToCart, removeFrmCart } = cartSlice.actions;
