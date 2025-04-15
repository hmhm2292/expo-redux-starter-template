import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CounterState } from './types';

const initialState: CounterState = {
  value: 0,
  loading: false,
  error: null,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    fetchCounterStart: state => {
      state.loading = true;
      state.error = null;
    },
    fetchCounterSuccess: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchCounterFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  fetchCounterStart,
  fetchCounterSuccess,
  fetchCounterFailure,
} = counterSlice.actions;

export default counterSlice.reducer;
