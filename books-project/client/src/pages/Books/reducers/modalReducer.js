import {
    ADD_BOOK_SUCCESS,
    ADD_BOOK_ERROR,
    ADD_BOOK_SHOW_MODAL,
    ADD_BOOK_HIDE_MODAL,
    ADD_BOOK_IN_PROGRESS
} from "../action-types/books.action-types";

const initialState = {
    loading: false,
    error: '',
    visible: false
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK_SUCCESS: {
            return { loading: false, visible: false }
        }
        case ADD_BOOK_ERROR: {
            return { loading: false }
        }
        case ADD_BOOK_SHOW_MODAL: {
            return { loading: false, visible: true }
        }
        case ADD_BOOK_HIDE_MODAL: {
            return { loading: false, visible: false }
        }
        case ADD_BOOK_IN_PROGRESS: {
            return { loading: true }
        }
        default:
            return state;
    }
}

export default modalReducer;