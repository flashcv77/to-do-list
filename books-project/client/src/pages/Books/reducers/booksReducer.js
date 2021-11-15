import { BOOKS_FETCH_SUCCESS, BOOKS_FETCH_ERROR } from "../action-types/books.action-types";


const initialState = {
    books: [],
    loading: true,
    error: '',
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
        case BOOKS_FETCH_ERROR: {
            return {
                books: [],
                loading: true,
                error: action.payload,
            }
        }
        default:
            return state;
    }
}

export default booksReducer;