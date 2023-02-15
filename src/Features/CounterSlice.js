import { createSlice } from "@reduxjs/toolkit";

const count = parseInt(JSON.parse(localStorage.getItem("count")) || 50);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: count,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      localStorage.setItem("count", state.value);
    },
    decrement: (state) => {
      state.value -= 1;
      localStorage.setItem("count", state.value);
    },
  },
});

export const { incrementByAmount, decrement } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
