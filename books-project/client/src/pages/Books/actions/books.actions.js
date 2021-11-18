import {
    MODAL_BOOK_IN_PROGRESS,
    MODAL_BOOK_CLOSE,
    MODAL_BOOK_SUCCESS,
    GET_BOOK_FOR_EDIT,
    MODAL_BOOK_SHOW,
    BOOK_DETAIL_SHOW,
    BOOK_DETAIL_CLOSE,
    BOOK_DETAIL_IN_PROGRESS,
    BOOK_DETAIL_SUCCESS,
    GET_ALL_BOOKS,
    GET_ALL_BOOKS_IN_PROGRESS,
    CLOSE_ALL_BOOKS
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

export const editBookSuccessAction = (payload) => ({
    type: GET_BOOK_FOR_EDIT,
    payload,
});

export const getBookByIdShowAction = () => ({
    type: BOOK_DETAIL_SHOW,
});

export const getBookByIdCloseAction = () => ({
    type: BOOK_DETAIL_CLOSE,
});

export const getBookByIdProgressAction = () => ({
    type: BOOK_DETAIL_IN_PROGRESS,
});

export const getBookByIdSuccessAction = (payload) => ({
    type: BOOK_DETAIL_SUCCESS,
    payload,
});

export const getBooksAction = (payload) => ({ type: GET_ALL_BOOKS, payload });

export const getBooksInProgressAction = () => ({
    type: GET_ALL_BOOKS_IN_PROGRESS,
});

export const closeBooks = () => ({ type: CLOSE_ALL_BOOKS });















// export const booksFetchInProgress = () => ({
//     type: BOOKS_FETCH_IN_PROGRESS
// });





// export const addBookSuccessAction = () => ({
//     type: ADD_BOOK_SUCCESS,
// });

// export const addBookInProgressAction = () => ({
//     type: ADD_BOOK_IN_PROGRESS,
// });

// export const hideModalAction = () => ({
//     type: HIDE_MODAL
// });

// export const showModalAction = () => ({
//     type: ADD_BOOK_SHOW_MODAL,
// });

// export const deleteBookSuccessAction = () => ({
//     type: DELETE_BOOK_SUCCESS,
// });

// export const deleteBookInProgressAction = () => ({
//     type: DELETE_BOOK_IN_PROGRESS,
// });

// export const updateBookInProgressAction = () => ({
//     type: UPDATE_BOOK_IN_PROGRESS,
// });

// export const updateBookSuccessAction = () => ({
//     type: UPDATE_BOOK_SUCCESS,
// });

// export const updateBookGetDataAction = (book) => ({
//     type: UPDATE_BOOK_GET_DATA_ACTION,
//     payload: book
// });
// export const deleteBookGetDataAction = (book) => ({
//     type: DELETE_BOOK_GET_DATA_ACTION,
//     payload: book
// });

// export const updateShowModalAction = () => ({
//     type: UPDATE_BOOK_SHOW_MODAL,
// });


// export const deleteShowModalAction = () => ({
//     type: DELETE_BOOK_SHOW_MODAL,
// });

// export const deleteHideModalAction = () => ({
    //     type: DELETE_BOOK_HIDE_MODAL,
    // })

    // export const updateHideModalAction = () => ({
    //     type: UPDATE_BOOK_HIDE_MODAL,
    // });
