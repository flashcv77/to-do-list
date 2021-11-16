import { DELETE_BOOK_SUCCESS } from "../action-types/books.action-types";

const deleteState = {
    loading: true,
    error: '',
}

const bookDeleteReducer = (state = deleteState, action) => {
    switch (action.type) {
        case DELETE_BOOK_SUCCESS: {
            return {
                loading: false,
                error: '',
            }
        }
        default:
            return state;
    }
}

export default bookDeleteReducer;