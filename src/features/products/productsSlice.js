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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.allProducts = payload.documents;
      })
      .addCase(getAllProducts.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      });
  },
});

// export
export default productsSlice.reducer;
