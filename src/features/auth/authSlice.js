import { createSlice } from "@reduxjs/toolkit";

// registerUser
export const registerUser =
  ("auth/registerUser",
  async (data, thunkAPI) => {
    return data;
  });

// authSlice
export const authSlice = createSlice({
  initialState: {},
  name: "something",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, { payload }) => {});
  },
});

export default authSlice.reducer;
