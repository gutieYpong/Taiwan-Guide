import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    cateSelector: "",
  },
  reducers: {
    setCateSelector: ( state, action ) => ({
      ...state,
      cateSelector: action.payload
    }),
  }
})

export const layoutInfo = state => state.layout;
export const { setCateSelector } = layoutSlice.actions;
export default layoutSlice.reducer;