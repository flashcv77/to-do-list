import { getBooks } from '../src/api/books'
import { combineReducers } from 'redux'

export const INIT_BOOKLIST = "INIT_BOOKLIST";
export const BOOK_DETAILS = "BOOK_DETAILS";

export const getBooksThunk = () => {
    return (dispatch) => {
        getBooks()
            .then((books) => {
                dispatch({
                    type: INIT_BOOKLIST,
                    payload: books,
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }
}

export const booksReducer = (state = [], action) => {
    switch (action.type) {
        case INIT_BOOKLIST: {
            const items = action.payload
            return items
        }
        default:
            return state;
    }
}
export const rootReducer = combineReducers({
    books: booksReducer,
})