import { message } from 'antd';
import {
  addBook, deleteBook, getBookDetails, getBooks, updateBook,
} from '../../../api/books';
import {
  modalBookProgressAction,
  modalBookSuccessAction,
  getBookForEditAction,
  booksFetchInProgressAction,
  booksFetchSuccessAction,
} from '../actions/books.actions';

export const getBooksThunk = () => (dispatch) => {
  dispatch(booksFetchInProgressAction());
  return getBooks()
    .then((response) => {
      const books = response.data;
      dispatch(booksFetchSuccessAction(books));
    })
    .catch((error) => message.error(error));
};

export const addBookThunk = (bookObj) => (dispatch) => {
  dispatch(modalBookProgressAction());
  addBook(bookObj)
    .then(() => {
      dispatch(modalBookSuccessAction());
      message.success('The book has been created', 3);
      dispatch(getBooksThunk());
    });
};

export const deleteBookByIdThunk = (id) => (dispatch) => {
  dispatch(modalBookProgressAction());
  deleteBook(id).then(() => {
    dispatch(modalBookSuccessAction());
    message.success('The book has been deleted');
    dispatch(getBooksThunk());
  });
};

export const updateBookThunk = (id, bookObj) => (dispatch) => {
  dispatch(modalBookProgressAction());
  updateBook(id, bookObj)
    .then(() => {
      dispatch(modalBookSuccessAction());
      message.success('The book has been edited', 3);
      dispatch(getBooksThunk());
    });
};

export const getBookModalDataThunk = (id) => (dispatch) => {
  dispatch(modalBookProgressAction());
  getBookDetails(id)
    .then((bookData) => {
      dispatch(getBookForEditAction(bookData));
    })
    .catch((error) => message.error(error));
};
