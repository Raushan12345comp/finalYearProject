import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import userReducer from "../slices/users/userSlice";
import categoryReducer from "../slices/catrgory/categorySlice";
import ProjectPost from "../slices/posts/ProjectPosts"
import PublicationPost from "../slices/posts/PunlicationPost"

export const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    ProjectPost,
    PublicationPost,
  },
});

setupListeners(store.dispatch);
