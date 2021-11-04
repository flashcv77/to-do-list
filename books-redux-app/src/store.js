import { getBooks, getDetails } from '../src/api/books'
import { combineReducers } from 'redux'

export const INIT_SUCCESS = "INIT_SUCCESS";
export const INIT_FAILURE = "INIT_FAILURE";
export const BOOK_DETAILS = "BOOK_DETAILS";

const initialState = {
    books: [],
    loading: true,
    error: '',
};

const detailsState = {
    books: [],
    loading: true,
    error: '',
}

export const getBooksThunk = () => {
    return (dispatch) => {
        getBooks()
            .then((response) => {
                // console.log('response:', response)
                let books = response.data;
                dispatch({
                    type: INIT_SUCCESS,
                    payload: books,
                })
                // console.log(books);
            })
            .catch((error) => {
                console.error(error)
            })
    }
}
export const getDetailsThunk = (id) => {
    return (dispatch) => {
        getDetails(id)
            .then((response) => {
                // console.log('response:', response)
                let bookDetails = response.data;
                dispatch({
                    type: BOOK_DETAILS,
                    payload: bookDetails,
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }
}

export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_SUCCESS: {
            return {
                books: action.payload,
                loading: false,
                error: '',
            }
        }
        case INIT_FAILURE: {
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

export const bookDetailsReducer = (state = detailsState, action) => {
    switch (action.type) {
        case BOOK_DETAILS: {
            return {
                books: action.payload,
                loading: false,
                error: '',
            }
        }
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    booksReducer, bookDetailsReducer
})