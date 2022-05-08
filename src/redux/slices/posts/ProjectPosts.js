import { createAsyncThunk, createSlice , createAction} from "@reduxjs/toolkit";
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

//Fetch All Project Posts

export const fetchProjectPostsAction = createAsyncThunk(
  "post/list",
  async (category,{rejectWithValue, getState, dispatch }) => {
      try {
          const { data } = await axios.get(`${baseUrl}/api/projects?category=${category}`);
          return data;
          
        } catch (error) {
          if (!error?.response) {
            throw error;
          }
          return rejectWithValue(error?.response?.data);
        }
      
  }
)

//Add Likes to post

export const toggleAddLikesToPost = createAsyncThunk(
  "post/like",
  async (postId, { rejectWithValue, getState, dispatch }) => {
    //get user token
    const user = getState()?.users;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    try {
      const { data } = await axios.put(
        `${baseUrl}/api/projects/likes`,
        postId,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Slices
const projectPostSlices = createSlice({
    name: "projectPost",
    initialState: {},
    extraReducers: builder => {
      //create posts
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


        //Fetch all posts
        builder.addCase(fetchProjectPostsAction.pending, (state, action) => {
          state.loading = true;
        });
        builder.addCase(fetchProjectPostsAction.fulfilled, (state, action) => {
          state.postList = action?.payload;
          state.loading = false;
          state.appErr = undefined;
          state.serverErr = undefined;
        });
        builder.addCase(fetchProjectPostsAction.rejected, (state, action) => {
          state.loading = false;
          state.appErr = action?.payload?.message;
          state.serverErr = action?.error?.message;
        });
    }
})

export default projectPostSlices.reducer;
