import {
    BOOKS_FETCH_SUCCESS,
    BOOKS_FETCH_IN_PROGRESS,
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
        default:
            return state;
    }
}

export default booksReducer;