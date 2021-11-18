import {
    BOOKS_FETCH_IN_PROGRESS,
    BOOKS_FETCH_SUCCESS,

    BOOK_DETAILS_FETCH_SUCCESS,
    BOOK_DETAILS_FETCH_IN_PROGRESS,
    BOOK_DETAILS_FETCH_ERROR,

    BOOK_MODAL_SUCCESS,
    BOOK_MODAL_IN_PROGRESS,
    BOOK_MODAL_HIDE,
    BOOK_MODAL_SHOW,
    GET_BOOK_FOR_EDIT
} from "../action-types/books.action-types"


export const booksFetchInProgress = () => ({
    type: BOOKS_FETCH_IN_PROGRESS
});





export const addBookSuccessAction = () => ({
    type: ADD_BOOK_SUCCESS,
});

export const addBookInProgressAction = () => ({
    type: ADD_BOOK_IN_PROGRESS,
});

export const hideModalAction = () => ({
    type: HIDE_MODAL
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


export const deleteShowModalAction = () => ({
    type: DELETE_BOOK_SHOW_MODAL,
});

// export const deleteHideModalAction = () => ({
    //     type: DELETE_BOOK_HIDE_MODAL,
    // })

    // export const updateHideModalAction = () => ({
    //     type: UPDATE_BOOK_HIDE_MODAL,
    // });
