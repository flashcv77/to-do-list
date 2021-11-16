import {
    DELETE_BOOK_HIDE_MODAL,
    DELETE_BOOK_IN_PROGRESS,
    DELETE_BOOK_SHOW_MODAL,
    DELETE_BOOK_SUCCESS,
    DELETE_BOOK_ERROR
} from "../action-types/books.action-types";

const deleteState = {
    loading: true,
    error: '',
    visible: false,
}

const bookDeleteReducer = (state = deleteState, action) => {
    switch (action.type) {
        case DELETE_BOOK_SUCCESS: {
            return { loading: false, visible: false, error: '' }
        }
        case DELETE_BOOK_ERROR: {
            return { loading: false }
        }
        case DELETE_BOOK_SHOW_MODAL: {
            return { loading: false, visible: true }
        }
        case DELETE_BOOK_HIDE_MODAL: {
            return { loading: false, visible: false }
        }
        case DELETE_BOOK_IN_PROGRESS: {
            return { loading: true }
        }
        default:
            return state;
    }
}

export default bookDeleteReducer;