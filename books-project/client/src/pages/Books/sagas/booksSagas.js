import { message } from 'antd';
import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import {
  getBooks,
  getBookDetails,
  addBook,
  deleteBook,
  updateBook,
} from '../../../api/books';
import {
  ADD_BOOK_START,
  BOOKS_FETCH_START,
  BOOK_DETAILS_FETCH_START,
  DELETE_BOOK_START,
  EDIT_BOOK_START,
  GET_BOOK_FOR_EDIT_START,
} from '../action-types/books.action-types';
import {
  bookDetailsFetchError,
  bookDetailsFetchInProgressAction,
  bookDetailsFetchReset,
  bookDetailsFetchSuccesAction,
  booksFetchErrorAction,
  booksFetchInProgressAction,
  booksFetchSuccessAction,
  getBookForEditAction,
  modalBookErrorAction,
  modalBookProgressAction,
  modalBookSuccessAction,
} from '../actions/books.actions';

function* getBooksSaga() {
  try {
    yield put(booksFetchInProgressAction());
    const data = yield call(getBooks);
    yield put(booksFetchSuccessAction(data));
  } catch (error) {
    yield put(booksFetchErrorAction(error));
    yield call(message.error, 'Something went wrong');
  }
}

export function* watcherGetBooksSaga() {
  yield takeLatest(BOOKS_FETCH_START, getBooksSaga);
}

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

export function* watcherGetBookSaga() {
  yield takeLatest(BOOK_DETAILS_FETCH_START, getBookSaga);
}

export function* addBookSaga(action) {
  try {
    yield put(modalBookProgressAction());
    yield call(addBook, action.payload);
    yield put(modalBookSuccessAction());
    yield put({ type: BOOKS_FETCH_START });
  } catch (error) {
    yield put(modalBookErrorAction(error));
    yield call(message.error, 'Something went wrong');
  }
}

export function* watcherAddBookSaga() {
  yield takeLatest(ADD_BOOK_START, addBookSaga);
}

export function* deleteBookSaga(action) {
  try {
    yield put(modalBookProgressAction());
    yield call(deleteBook, action.payload);
    yield put(modalBookSuccessAction());
    yield put({ type: BOOKS_FETCH_START });
  } catch (error) {
    yield put(modalBookErrorAction(error));
    yield call(message.error, 'Something went wrong');
  }
}

export function* watcherDeleteBookSaga() {
  yield takeLatest(DELETE_BOOK_START, deleteBookSaga);
}

export function* editBookSaga(action) {
  try {
    yield put(modalBookProgressAction());
    yield call(updateBook, action.payload.id, action.payload.data);
    yield put(modalBookSuccessAction());
    yield put({ type: BOOKS_FETCH_START });
  } catch (error) {
    yield put(modalBookErrorAction(error));
    yield call(message.error, 'Something went wrong');
  }
}

export function* watcherEditBookSaga() {
  yield takeLatest(EDIT_BOOK_START, editBookSaga);
}

export function* getBookModalDataSaga(action) {
  try {
    yield put(modalBookProgressAction());
    const data = yield call(getBookDetails, action.payload);
    yield put(getBookForEditAction(data));
  } catch (error) {
    yield put(modalBookErrorAction(error));
    yield call(message.error, 'Something went wrong');
  }
}

export function* watcherGetBookModalDataSaga() {
  yield takeLatest(GET_BOOK_FOR_EDIT_START, getBookModalDataSaga);
}
