import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";


interface CounterState {
  value: number
}

// const initialState: CounterState = { value: 50} ;

const initialValue = parseInt(localStorage.getItem("count") || "50", 10) ;

// parseInt function can parse strings as integers in different numeral systems (e.g., decimal, hexadecimal, octal). 
// By specifying 10 as the radix, you're explicitly telling parseInt to treat the string as a decimal number, regardless of its content.

const initialState: CounterState = { value: initialValue};


export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
      localStorage.setItem("count", state.value.toString());
    },
    decrement: (state) => {
      state.value -= 1;
      localStorage.setItem("count", state.value.toString());
    },
  },
});

export const { incrementByAmount, decrement } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
