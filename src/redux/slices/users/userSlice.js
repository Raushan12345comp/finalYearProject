import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {baseUrl} from '../../../utils/baseUrl'
//register Action

export const registerUserAction = createAsyncThunk(
  "user/register",
  async (user, { rejectWithValue, getState, dispatch }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
       ` ${baseUrl}/api/users/register`,
        user,
        config
      );
      return res.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Login
export const loginUserAction = createAsyncThunk(
    "user/login",
    async (userData, { rejectWithValue, getState, dispatch }) => {
        try {
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          const res = await axios.post(
            ` ${baseUrl}/api/users/login`,
            userData,
            config
          );
          // save user to localstorage
          localStorage.setItem('userInfo' , JSON.stringify(userData));
          return res.data;
        } catch (error) {
          if (!error?.response) {
            throw error;
          }
          return rejectWithValue(error?.response?.data);
        }
      }
)

//get user from local storage and place in stored

const userLoginFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

//Slices

const userSlices = createSlice({
  name: "user",
  initialState: {
    userAuth: userLoginFromStorage,
  },
  extraReducers: (builder) => {
    //register
    builder.addCase(registerUserAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.registered = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(registerUserAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //Login
    builder.addCase(loginUserAction.pending, (state, action) => {
        state.loading = true;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(loginUserAction.fulfilled, (state, action) => {
        state.userAuth = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(loginUserAction.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      });
  },
});

export default userSlices.reducer;
