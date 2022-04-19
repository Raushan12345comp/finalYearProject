import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import userReducer from "../slices/users/userSlice";
import categoryReducer from "../slices/catrgory/categorySlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
  },
});

setupListeners(store.dispatch);
