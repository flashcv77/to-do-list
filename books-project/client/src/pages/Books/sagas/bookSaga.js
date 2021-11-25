import { call, put, takeLatest } from '@redux-saga/core/effects';
import { message } from 'antd';
import { getBookDetails } from '../../../api/books';
import { BOOK_DETAILS_FETCH_START } from '../action-types/books.action-types';
import {
  bookDetailsFetchError,
  bookDetailsFetchInProgressAction,
  bookDetailsFetchReset,
  bookDetailsFetchSuccesAction,
} from '../actions/books.actions';

function* getBookSaga(action) {
  try {
    yield put(bookDetailsFetchReset());
    yield put(bookDetailsFetchInProgressAction());
    const data = yield call(getBookDetails, action.payload);
    yield put(bookDetailsFetchSuccesAction(data));
  } catch (error) {
    yield put(bookDetailsFetchError(error));
    yield call(message.error, 'Something went wrong');
  }
}

export default function* watcherGetBookSaga() {
  yield takeLatest(BOOK_DETAILS_FETCH_START, getBookSaga);
}
