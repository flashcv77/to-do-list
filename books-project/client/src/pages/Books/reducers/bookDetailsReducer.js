import { BOOK_DETAILS_FETCH_SUCCESS } from "../action-types/books.action-types";

const detailsState = {
    book: {},
    loading: true,
    error: '',
}

const bookDetailsReducer = (state = detailsState, action) => {
    switch (action.type) {
        case BOOK_DETAILS_FETCH_SUCCESS: {
            return {
                book: action.payload,
                loading: false,
                error: '',
            }
        }
        default:
            return state;
    }
}

export default bookDetailsReducer;