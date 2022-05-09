import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import userReducer from "../slices/users/userSlice";
import categoryReducer from "../slices/catrgory/categorySlice";
import papercategoryReducer from "../slices/catrgory/PaperCategory";
import courseCategoryReducer from "../slices/catrgory/courseCategory";
import ProjectPost from "../slices/posts/ProjectPosts"
import PublicationPost from "../slices/posts/PunlicationPost"
import comment from "../slices/Projectcomments/commentSlices";
import Courses from "../slices/posts/CoursePost";


export const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    Papercategory: papercategoryReducer,
    CourseCategory:courseCategoryReducer,
    ProjectPost,
    PublicationPost,
    comment,
    Courses,
  },
});

setupListeners(store.dispatch);
