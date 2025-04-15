import { delay, put, takeLatest } from 'redux-saga/effects';
import { fetchCounterFailure, fetchCounterStart, fetchCounterSuccess } from './slice';
import { CounterResponse } from './types';

// Simulated API endpoint
const API_URL = 'https://api.example.com/counter';

function* fetchCounterSaga() {
  try {
    // Simulate API call
    yield delay(1000); // Simulate network delay

    // In a real app, you would use:
    // const response = yield call(axios.get, API_URL);
    // const data: CounterResponse = response.data;

    // For demo purposes, return mock data
    const mockData: CounterResponse = {
      value: 42,
      timestamp: new Date().toISOString(),
    };

    yield put(fetchCounterSuccess(mockData.value));
  } catch (error) {
    yield put(fetchCounterFailure(error.message || 'Failed to fetch counter'));
  }
}

export default function* counterSaga() {
  yield takeLatest(fetchCounterStart.type, fetchCounterSaga);
}
