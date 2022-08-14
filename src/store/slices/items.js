import { createSlice } from "@reduxjs/toolkit";

const initialData = [];

const pictureSlice = createSlice({
  name: "items",
  initialState: initialData,
  reducers: {
    setPicData(state, action) {
      const page = action.payload.page;
      const response = action.payload.response;
      return page === 1 ? response : [...state, ...response];
    },
  },
});

export const picActions = pictureSlice.actions;
export default pictureSlice.reducer;
