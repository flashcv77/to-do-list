import { createSelector } from 'reselect';
import moment from "moment";

const selectModal = (state) => state.modal;
export const selectModalId = createSelector(
    selectModal,
    (modal) => modal.id
);

export const selectModalLoading = createSelector(
    selectModal,
    (modal) => modal.loading
);

export const selectModalData = createSelector(
    selectModal,
    (modal) => modal.data
);

export const selectModalType = createSelector(
    selectModal,
    (modal) => modal.type
);

const selectBooks = (state) => state.books;

export const selectBooksData = createSelector(
    selectBooks,
    (books) => books.data
);

export const selectBooksLoading = createSelector(
    selectBooks,
    (books) => books.loading
);

export const selectBooksWithFormattedData = createSelector(
    selectBooks,
    (books) =>
        books.data.map((item) => {
            const obj = Object.assign({}, item);
            obj["createDate"] = moment(obj["createDate"]).format("ll");
            return obj;
        })
);