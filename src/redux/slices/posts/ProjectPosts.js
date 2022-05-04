import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

//create post Action functions

export const createPostAction = createAsyncThunk(
    "post/create",
    async (projectPost, { rejectWithValue, getState, dispatch }) => {
        const user = getState()?.user;
        const { userAuth } = user;
        const config = {
          headers: {
            Authorization: `Bearer ${userAuth?.token}`,
          },
        };
        
        try {
            const { data } = await axios.post(`${baseUrl}/api/projects`,projectPost,config);
            return data;
          } catch (error) {
            if (!error?.response) {
              throw error;
            }
            return rejectWithValue(error?.response?.data);
          }
        
    }
)

//Slices
const projectPostSlices = createSlice({
    name: "projectPost",
    initialState: {},
    extraReducers: builder => {
        builder.addCase(createPostAction.pending, (state, action) => {
          state.loading = true;
        });
        builder.addCase(createPostAction.fulfilled, (state, action) => {
          state.loading = false;
          state.projectPost = action?.payload;
          state.appErr = undefined;
          state.serverErr = undefined;
        });
        builder.addCase(createPostAction.rejected, (state, action) => {
          state.loading = false;
          state.appErr = action?.payload?.message;
          state.serverErr = action?.error?.message;
        });
    }
})

export default projectPostSlices.reducer;
