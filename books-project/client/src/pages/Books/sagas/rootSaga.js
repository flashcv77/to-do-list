import { all } from 'redux-saga/effects';
import watcherGetBookSaga from './bookSaga';
import {
  watcherGetBooksSaga,
  watcherAddBookSaga,
  watcherDeleteBookSaga,
  watcherEditBookSaga,
  watcherGetBookModalDataSaga,
} from './booksSagas';

export default function* rootSaga() {
  yield all([
    watcherGetBooksSaga(),
    watcherGetBookSaga(),
    watcherAddBookSaga(),
    watcherDeleteBookSaga(),
    watcherEditBookSaga(),
    watcherGetBookModalDataSaga(),
  ]);
}
