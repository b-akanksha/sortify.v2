import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alogrithms: [
    { id: "bubbleSort", name: "Bubble Sort" },
    { id: "selectionSort", name: "Selection Sort" },
  ],
  selected: null,
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setAlgorithm: (state, { payload }) => {
      state.selected = payload;
    },
    resetAlgorithm: (state) => {
      state.selected = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAlgorithm, resetAlgorithm } = sortSlice.actions;

export default sortSlice.reducer;
