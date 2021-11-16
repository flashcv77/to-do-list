import { UPDATE_BOOK_SUCCESS } from "../action-types/books.action-types";

const updateState = {
    loading: true,
    error: '',
}

const bookUpdateReducer = (state = updateState, action) => {
    switch (action.type) {
        case UPDATE_BOOK_SUCCESS: {
            return {
                loading: false,
                error: '',
            }
        }
        default:
            return state;
    }
}

export default bookUpdateReducer;