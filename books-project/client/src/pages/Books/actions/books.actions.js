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

} from "../action-types/books.action-types"

// GET BOOKS //////////////////////////////////////
export const booksFetchInProgressAction = () => ({
    type: BOOKS_FETCH_IN_PROGRESS,
});

export const booksFetchSuccessAction = (payload) => ({
    type: BOOKS_FETCH_SUCCESS,
    payload
});
///////////////////////////////////////////////////


// GET BOOKS DETAILS //////////////////////////////
export const bookDetailsFetchSuccesAction = (payload) => ({
    type: BOOK_DETAILS_FETCH_SUCCESS,
    payload
});

export const bookDetailsFetchInProgressAction = () => ({
    type: BOOK_DETAILS_FETCH_IN_PROGRESS
});
////////////////////////////////////////////////////


// GET BOOK FOR EDIT///////////////////////////////
export const getBookForEditAction = (payload) => ({
    type: GET_BOOK_FOR_EDIT,
    payload,
});
///////////////////////////////////////////////////


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
/////////////////////////////////////////////////


// DELETE BOOK//////////////////////////////////
export const deleteBookGetDataAction = (book) => ({
    type: DELETE_BOOK_GET_DATA_ACTION,
    payload: book
});
////////////////////////////////////////////////