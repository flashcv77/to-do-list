import {
    ADD_BOOK_SUCCESS,
    ADD_BOOK_ERROR,
    ADD_BOOK_SHOW_MODAL,
    ADD_BOOK_HIDE_MODAL,
    ADD_BOOK_IN_PROGRESS
} from "../action-types/books.action-types";

const initialState = {
    loading: true,
    error: '',
    visible: false
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK_SUCCESS: {
            return { ...state, loading: false, visible: false }
        }
        case ADD_BOOK_ERROR: {
            return { ...state, loading: false }
        }
        case ADD_BOOK_SHOW_MODAL: {
            return { ...state, loading: false, visible: true }
        }
        case ADD_BOOK_HIDE_MODAL: {
            return { ...state, loading: true, visible: false }
        }
        case ADD_BOOK_IN_PROGRESS: {
            return { ...state, loading: true }
        }
        default:
            return state;
    }
}

export default modalReducer;