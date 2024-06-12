import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Account, Client, ID } from "appwrite";
import constants from "../../utilities/constants";
import { addToLS, getLS, removeLS } from "../../utilities/localStorage";

// appwrite
const client = new Client()
  .setEndpoint(constants.appwriteEndpoint)
  .setProject(constants.appwriteProjectId);
const account = new Account(client);

// initialState
const initialState = {
  isLoading: false,
  currUser: getLS("currUser"),
};

// registerUser
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data, thunkAPI) => {
    console.log(data);
    try {
      const { userId, email, password } = data;
      const resp = await account.create(userId, email, password);
      thunkAPI.dispatch(loginUser(data));
      return resp;
    } catch (error) {
      if (error?.code === 409) {
        alert("user with same email/password already exists!");
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// loginUser
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, thunkAPI) => {
    const { email, password } = data;
    try {
      const resp = await account.createEmailPasswordSession(email, password);
      console.log(resp);
      return resp;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// logoutUser
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      const resp = await account.deleteSessions();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// authSlice
export const authSlice = createSlice({
  initialState,
  name: "authSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        alert(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        state.currUser = payload;
        addToLS("currUser", payload);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        // TODO: remove the currUser from localstorage
        state.currUser = null;
        removeLS("currUser");
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      });
  },
});

export default authSlice.reducer;
