import { createSelector } from 'reselect';
import moment from 'moment';

const selectModal = (state) => state.modalReducer;
export const selectModalId = createSelector(
  selectModal,
  (modal) => modal.data.id,
);

export const selectModalLoading = createSelector(
  selectModal,
  (modal) => modal.loading,
);

export const selectModalData = createSelector(
  selectModal,
  (modal) => modal.data,
);

export const selectModalType = createSelector(
  selectModal,
  (modal) => modal.type,
);

const selectBooks = (state) => state.booksReducer;

export const selectBookList = createSelector(
  selectBooks,
  (books) => books.books,
);

export const selectBooksLoading = createSelector(
  selectBooks,
  (books) => books.loading,
);

export const selectBooksWithFormattedData = createSelector(
  selectBooks,
  (books) => books.books.map((item) => {
    const obj = { ...books, item };
    obj.createDate = moment(obj.createDate).format('ll');
    return obj;
  }),
);
