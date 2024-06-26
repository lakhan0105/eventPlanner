import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Client, Databases, Storage } from "appwrite";
import constants from "../../utilities/constants";

// appwrite
const client = new Client()
  .setEndpoint(constants.appwriteEndpoint)
  .setProject(constants.appwriteProjectId);
const databases = new Databases(client);
const storage = new Storage(client);

// initialState
const initialState = {
  isLoading: false,
  allProducts: null,
  categoriesArray: null,
  filteredProducts: null,
  filteredProductsByPrice: null,
  maxPrice: null,
};

// getAllProducts
export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, thunkAPI) => {
    try {
      const resp = await databases.listDocuments(
        constants.appwriteDatabaseId,
        constants.productsCollectionId
      );
      return resp;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

// getFilePreview
export const getPreview = (imgId) => {
  try {
    const resp = storage.getFilePreview(constants.imgBucketId, imgId);
    return resp;
  } catch (error) {
    console.log(error);
  }
};

// productsSlice
export const productsSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    genFilteredProducts: (state, { payload }) => {
      state.filteredProducts = state?.allProducts.filter((product) => {
        if (product.category.includes(payload)) {
          state.filteredProducts = product;
          return product;
        }
      });
    },
    genFilteredProductsByPrice: (state, { payload }) => {
      state.filteredProductsByPrice = state?.allProducts.filter((product) => {
        if (product.price <= payload) {
          return product;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.allProducts = payload.documents;

        // CREATE A CATEGORIES ARRAY
        state.categoriesArray = state.allProducts?.reduce(
          (acc, curr) => {
            curr.category.forEach((categoryName) => {
              if (!acc.includes(categoryName)) {
                acc.push(categoryName);
              }
            });
            return acc;
          },
          ["all"]
        );

        // CREATE MAX PRICE
        state.maxPrice = state?.allProducts?.reduce((acc, curr) => {
          if (curr.price > acc) {
            acc = curr.price;
          }
          return acc;
        }, 0);
      })
      .addCase(getAllProducts.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      });
  },
});

// export
export default productsSlice.reducer;
export const { genFilteredProducts, genFilteredProductsByPrice } =
  productsSlice.actions;
