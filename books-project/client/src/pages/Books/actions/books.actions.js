import {
    ADD_BOOK_IN_PROGRESS,
    ADD_BOOK_SUCCESS,
    ADD_BOOK_HIDE_MODAL,
    ADD_BOOK_SHOW_MODAL,
    DELETE_BOOK_SUCCESS,
    DELETE_BOOK_IN_PROGRESS,
    DELETE_BOOK_GET_DATA_ACTION,
    UPDATE_BOOK_IN_PROGRESS,
    UPDATE_BOOK_SUCCESS,
    UPDATE_BOOK_SHOW_MODAL,
    UPDATE_BOOK_HIDE_MODAL,
    DELETE_BOOK_SHOW_MODAL,
    DELETE_BOOK_HIDE_MODAL,
    UPDATE_BOOK_GET_DATA_ACTION
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

export const updateBookGetDataAction = (book) => ({
    type: UPDATE_BOOK_GET_DATA_ACTION,
    payload: book
});
export const deleteBookGetDataAction = (book) => ({
    type: DELETE_BOOK_GET_DATA_ACTION,
    payload: book
});

export const updateShowModalAction = () => ({
    type: UPDATE_BOOK_SHOW_MODAL,
});

export const updateHideModalAction = () => ({
    type: UPDATE_BOOK_HIDE_MODAL,
});

export const deleteShowModalAction = () => ({
    type: DELETE_BOOK_SHOW_MODAL,
});

export const deleteHideModalAction = () => ({
    type: DELETE_BOOK_HIDE_MODAL,
})

