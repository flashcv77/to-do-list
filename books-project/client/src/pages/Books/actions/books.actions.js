import {
    ADD_BOOK_IN_PROGRESS,
    ADD_BOOK_SUCCESS,
    DELETE_BOOK_SUCCESS,
    DELETE_BOOK_IN_PROGRESS,
    DELETE_BOOK_GET_DATA_ACTION,
    UPDATE_BOOK_IN_PROGRESS,
    UPDATE_BOOK_SUCCESS,
    UPDATE_BOOK_GET_DATA_ACTION,
    GET_BOOK_FOR_EDIT,
    MODAL_BOOK_SHOW,
    MODAL_BOOK_CLOSE,
    MODAL_BOOK_IN_PROGRESS,
    MODAL_BOOK_SUCCESS,
} from "../action-types/books.action-types"

export const getBookForEditAction = (payload) => ({
    type: GET_BOOK_FOR_EDIT,
    payload,
});

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

// CREATE /////////////////////////////////////////
export const addBookInProgressAction = () => ({
    type: ADD_BOOK_IN_PROGRESS,
});

export const addBookSuccessAction = () => ({
    type: ADD_BOOK_SUCCESS,
});
////////////////////////////////////////////////////

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


