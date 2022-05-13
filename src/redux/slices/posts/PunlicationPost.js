import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

//create post Action functions

export const createPostAction = createAsyncThunk(
    "post/create",
    async (publicationPost, { rejectWithValue, getState, dispatch }) => {
        const user = getState()?.user;
        const { userAuth } = user;
        const config = {
          headers: {
            Authorization: `Bearer ${userAuth?.token}`,
          },
        };
        
        try {
            const { data } = await axios.post(`${baseUrl}/api/publications`,publicationPost,config);
            return data;
          } catch (error) {
            if (!error?.response) {
              throw error;
            }
            return rejectWithValue(error?.response?.data);
          }
        
    }
)

//fetch Post details
export const fetchPostDetailsAction = createAsyncThunk(
  "post/detail",
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`${baseUrl}/api/publications/${id}`);
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Fetch All Project Posts

export const fetchPaperPostsAction = createAsyncThunk(
  "post/list",
  async (Papercategory,{rejectWithValue, getState, dispatch }) => {
      try {
          const { data } = await axios.get(`${baseUrl}/api/publications?Papercategory=${Papercategory}`);
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
const publicationPostSlices = createSlice({
    name: "publicationPost",
    initialState: {},
    extraReducers: builder => {
        builder.addCase(createPostAction.pending, (state, action) => {
          state.loading = true;
        });
        builder.addCase(createPostAction.fulfilled, (state, action) => {
          state.loading = false;
          state.publicationPost = action?.payload;
          state.appErr = undefined;
          state.serverErr = undefined;
        });
        builder.addCase(createPostAction.rejected, (state, action) => {
          state.loading = false;
          state.appErr = action?.payload?.message;
          state.serverErr = action?.error?.message;
        });

        //Fetch all posts
        builder.addCase(fetchPaperPostsAction.pending, (state, action) => {
          state.loading = true;
        });
        builder.addCase(fetchPaperPostsAction.fulfilled, (state, action) => {
          state.postList = action?.payload;
          state.loading = false;
          state.appErr = undefined;
          state.serverErr = undefined;
        });
        builder.addCase(fetchPaperPostsAction.rejected, (state, action) => {
          state.loading = false;
          state.appErr = action?.payload?.message;
          state.serverErr = action?.error?.message;
        });

        //fetch post Details
    builder.addCase(fetchPostDetailsAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPostDetailsAction.fulfilled, (state, action) => {
      state.postDetails = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchPostDetailsAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
    }
})

export default publicationPostSlices.reducer;
