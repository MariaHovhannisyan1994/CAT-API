import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./slices/items";
import categoriesReducer from "./slices/categories";

const store = configureStore({
  reducer: {
    items: itemsReducer,
    category: categoriesReducer,
  },
});

export default store;
