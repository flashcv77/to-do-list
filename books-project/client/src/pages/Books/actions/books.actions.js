import {
    ADD_BOOK_IN_PROGRESS,
    ADD_BOOK_SUCCESS,
    ADD_BOOK_HIDE_MODAL,
    ADD_BOOK_SHOW_MODAL,
    DELETE_BOOK_SUCCESS,
    DELETE_BOOK_IN_PROGRESS,
    UPDATE_BOOK_IN_PROGRESS,
    UPDATE_BOOK_SUCCESS
} from "../action-types/books.action-types"

export const addBookSuccessAction = () => ({
    type: ADD_BOOK_SUCCESS,
});

export const addBookInProgressAction = () => ({
    type: ADD_BOOK_IN_PROGRESS,
});

export const hideModalAction = () => ({
    type: ADD_BOOK_HIDE_MODAL,
});

export const showModalAction = () => ({
    type: ADD_BOOK_SHOW_MODAL,
});

export const deleteBookSuccessAction = () => ({
    type: DELETE_BOOK_SUCCESS,
});

export const deleteBookInProgressAction = () => ({
    type: DELETE_BOOK_IN_PROGRESS,
});

export const updateBookInProgressAction = () => ({
    type: UPDATE_BOOK_IN_PROGRESS,
});

export const updateBookSuccessAction = () => ({
    type: UPDATE_BOOK_SUCCESS,
});
