import { createSlice } from "@reduxjs/toolkit";

const initialData = [];

const categorySlice = createSlice({
  name: "category",
  initialState: initialData,
  reducers: {
    setCategoryData(state, action) {
      return action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;
