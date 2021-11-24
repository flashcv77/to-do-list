import {
  BOOKS_FETCH_IN_PROGRESS,
  BOOKS_FETCH_SUCCESS,
  BOOK_DETAILS_FETCH_SUCCESS,
  BOOK_DETAILS_FETCH_IN_PROGRESS,
  GET_BOOK_FOR_EDIT,
  MODAL_BOOK_SHOW,
  MODAL_BOOK_CLOSE,
  MODAL_BOOK_IN_PROGRESS,
  MODAL_BOOK_SUCCESS,
  DELETE_BOOK_GET_DATA_ACTION,
  BOOKS_FETCH_START,
  BOOKS_FETCH_ERROR,
  BOOK_DETAILS_FETCH_START,
  BOOK_DETAILS_FETCH_ERROR,
  BOOK_DETAILS_FETCH_RESET,
  MODAL_BOOK_ERROR,
  ADD_BOOK_START,
  DELETE_BOOK_START,
  EDIT_BOOK_START,
  GET_BOOK_FOR_EDIT_START,

} from '../action-types/books.action-types';

// GET BOOKS //////////////////////////////////////
export const booksFetchStartAction = () => ({
  type: BOOKS_FETCH_START,
});

export const booksFetchInProgressAction = () => ({
  type: BOOKS_FETCH_IN_PROGRESS,
});

export const booksFetchSuccessAction = (payload) => ({
  type: BOOKS_FETCH_SUCCESS,
  payload,
});

export const booksFetchErrorAction = (error) => ({
  type: BOOKS_FETCH_ERROR,
  payload: error,
});

// GET BOOKS DETAILS //////////////////////////////
export const bookDetailsFetchStartAction = (id) => ({
  type: BOOK_DETAILS_FETCH_START,
  payload: id,
});

export const bookDetailsFetchSuccesAction = (payload) => ({
  type: BOOK_DETAILS_FETCH_SUCCESS,
  payload,
});

export const bookDetailsFetchInProgressAction = () => ({
  type: BOOK_DETAILS_FETCH_IN_PROGRESS,
});

export const bookDetailsFetchError = (error) => ({
  type: BOOK_DETAILS_FETCH_ERROR,
  payload: error,
});

export const bookDetailsFetchReset = () => ({
  type: BOOK_DETAILS_FETCH_RESET,
});

// GET BOOK FOR EDIT///////////////////////////////
export const getBookForEditAction = (payload) => ({
  type: GET_BOOK_FOR_EDIT,
  payload,
});

// MODAL ACTIONS//////////////////////////////////
export const modalBookShowAction = (type, id) => ({
  type: MODAL_BOOK_SHOW,
  payload: { type, id },
});

export const modalBookCloseAction = () => ({
  type: MODAL_BOOK_CLOSE,
});

export const modalBookProgressAction = () => ({
  type: MODAL_BOOK_IN_PROGRESS,
});

export const modalBookSuccessAction = () => ({
  type: MODAL_BOOK_SUCCESS,
});

export const modalBookErrorAction = (error) => ({
  type: MODAL_BOOK_ERROR,
  payload: error,
});

// DELETE BOOK//////////////////////////////////
export const deleteBookGetDataAction = (book) => ({
  type: DELETE_BOOK_GET_DATA_ACTION,
  payload: book,
});

export const addBookStartAction = (book) => ({
  type: ADD_BOOK_START,
  payload: book,
});

export const deleteBookStartAction = (id) => ({
  type: DELETE_BOOK_START,
  payload: id,
});

export const editBookStartAction = (id, data) => ({
  type: EDIT_BOOK_START,
  payload: { id, data },
});

export const getBookForEditStartAction = (book) => ({
  type: GET_BOOK_FOR_EDIT_START,
  payload: book,
});
