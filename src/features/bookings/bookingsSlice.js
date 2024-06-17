import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Client, Databases, Query } from "appwrite";
import constants from "../../utilities/constants";

// appwrite
const client = new Client()
  .setEndpoint(constants.appwriteEndpoint)
  .setProject(constants.appwriteProjectId);
const databases = new Databases(client);

// initialState
const initialState = {
  isLoading: false,
  isAvailable: null,
};

// checkAvl
export const checkAvl = createAsyncThunk(
  "bookings/checkAvl",
  async ({ productId, selectedStartDate, selectedEndDate }, thunkAPI) => {
    // convert the dates provided as the input into time
    const startDate = new Date(selectedStartDate).getTime();
    const endDate = new Date(selectedEndDate).getTime();

    try {
      const { total, documents } = await databases.listDocuments(
        constants.appwriteDatabaseId,
        constants.bookingsCollectionId,
        [Query.equal("productId", [productId])]
      );

      if (total === 0) {
        return { available: true };
      }

      for (let i = 0; i <= documents.length - 1; i++) {
        const doc = documents[i];
        const existingBookingStart = new Date(doc.startDate).getTime();
        const existingBookingEnd = new Date(doc.endDate).getTime();

        if (
          (startDate >= existingBookingStart &&
            startDate <= existingBookingEnd) ||
          (endDate >= existingBookingEnd && endDate <= existingBookingEnd) ||
          (startDate <= existingBookingStart && endDate >= existingBookingEnd)
        ) {
          console.log("not available");
          return { available: false };
        }
      }

      return { available: true };
    } catch (error) {
      console.log(error);
    }
  }
);

// bookingSlice
export const bookingsSlice = createSlice({
  name: "bookingsSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(checkAvl.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAvl.fulfilled, (state, { payload }) => {
        const { available } = payload;
        state.isLoading = false;
        state.isAvailable = available;
      })
      .addCase(checkAvl.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      });
  },
});

export default bookingsSlice.reducer;
