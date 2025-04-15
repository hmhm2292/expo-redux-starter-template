import { RootState } from '../../index';

export const selectCounter = (state: RootState) => state.counter;
export const selectCounterValue = (state: RootState) => state.counter.value;
export const selectCounterLoading = (state: RootState) => state.counter.loading;
export const selectCounterError = (state: RootState) => state.counter.error;
