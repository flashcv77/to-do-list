import {
    BOOKS_FETCH_SUCCESS,
    BOOKS_FETCH_ERROR,
    UPDATE_BOOK_ERROR,
    UPDATE_BOOK_GET_DATA_ACTION,
    UPDATE_BOOK_IN_PROGRESS,
    UPDATE_BOOK_SUCCESS,
    ADD_BOOK_SUCCESS,
    ADD_BOOK_ERROR,
    ADD_BOOK_IN_PROGRESS,
    DELETE_BOOK_HIDE_MODAL,
    DELETE_BOOK_IN_PROGRESS,
    DELETE_BOOK_SHOW_MODAL,
    DELETE_BOOK_SUCCESS,
    DELETE_BOOK_ERROR,
    DELETE_BOOK_GET_DATA_ACTION,
    BOOKS_FETCH_IN_PROGRESS
} from "../action-types/books.action-types";

const initialState = {
    books: [],
    loading: true,
    error: '',
    book: {}
};

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKS_FETCH_SUCCESS: {
            return {
                books: action.payload,
                loading: false,
                error: '',
            }
        }
        case BOOKS_FETCH_IN_PROGRESS: {
            return {
                ...state, loading: true
            }
        }

        case BOOKS_FETCH_ERROR: {
            return {
                books: [],
                loading: true,
                error: action.payload,
            }
        }
        case ADD_BOOK_SUCCESS: {
            return { ...state, loading: false, visible: false }
        }
        case ADD_BOOK_ERROR: {
            return { ...state, loading: false }
        }
        case ADD_BOOK_IN_PROGRESS: {
            return { ...state, loading: true }
        }
        case UPDATE_BOOK_SUCCESS: {
            return initialState;
        }
        case UPDATE_BOOK_ERROR: {
            return { ...state, loading: false }
        }
        case UPDATE_BOOK_IN_PROGRESS: {
            return { ...state, loading: true }
        }
        case UPDATE_BOOK_GET_DATA_ACTION: {
            return {
                ...state,
                book: action.payload,
                loading: false,
            }
        }
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
            return { ...state, loading: true, visible: false }
        }
        case DELETE_BOOK_IN_PROGRESS: {
            return { ...state, loading: true }
        }
        case DELETE_BOOK_GET_DATA_ACTION: {
            return { ...state, book: action.payload }
        }
        default:
            return state;
    }
}

export default booksReducer;