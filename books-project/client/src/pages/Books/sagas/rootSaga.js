import { all } from 'redux-saga/effects';
import {
  watcherGetBooksSaga,
  watcherGetBookSaga,
  watcherAddBookSaga,
  watcherDeleteBookSaga,
  watcherEditBookSaga,
  watcherGetBookModalDataSaga,
} from './booksSagas';

export default function* rootSaga() {
  // eslint-disable-next-line max-len
  yield all([watcherGetBooksSaga(), watcherGetBookSaga(), watcherAddBookSaga(), watcherDeleteBookSaga(), watcherEditBookSaga(), watcherGetBookModalDataSaga()]);
}
