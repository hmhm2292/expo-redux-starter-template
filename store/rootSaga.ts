import { all } from 'redux-saga/effects';
import counterSaga from './features/counter/saga';

export default function* rootSaga() {
  yield all([counterSaga()]);
}
