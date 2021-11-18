import {
    DELETE_BOOK_HIDE_MODAL,
    DELETE_BOOK_IN_PROGRESS,
    DELETE_BOOK_SHOW_MODAL,
    DELETE_BOOK_SUCCESS,
    DELETE_BOOK_ERROR,
    DELETE_BOOK_GET_DATA_ACTION
} from "../action-types/books.action-types";

const deleteState = {
    loading: true,
    error: '',
    visible: false,
    book: {}
}

const bookDeleteReducer = (state = deleteState, action) => {
    switch (action.type) {
        case DELETE_BOOK_SUCCESS: {
            return { ...state, loading: false, visible: false, error: '' }
        }
        case DELETE_BOOK_ERROR: {
            return { ...state, loading: false }
        }
        case DELETE_BOOK_SHOW_MODAL: {
            return { ...state, loading: false, visible: true }
        }
        case DELETE_BOOK_HIDE_MODAL: {
            return { ...state, loading: false, visible: false }
        }
        case DELETE_BOOK_IN_PROGRESS: {
            return { ...state, loading: true }
        }
        case DELETE_BOOK_GET_DATA_ACTION: {
            return {...state, book: action.payload}
        }
        default:
            return state;
    }
}

export default bookDeleteReducer;