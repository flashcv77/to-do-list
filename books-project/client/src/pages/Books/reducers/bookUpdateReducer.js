import {
    UPDATE_BOOK_ERROR,
    UPDATE_BOOK_GET_DATA_ACTION,
    UPDATE_BOOK_HIDE_MODAL,
    UPDATE_BOOK_IN_PROGRESS,
    UPDATE_BOOK_SHOW_MODAL,
    UPDATE_BOOK_SUCCESS
} from "../action-types/books.action-types"

const updateState = {
    loading: true,
    error: '',
    visible: false,
    book: {}
}

const bookUpdateReducer = (state = updateState, action) => {
    switch (action.type) {
        case UPDATE_BOOK_SUCCESS: {
            return { ...state, loading: false, visible: false, error: '', book: action.payload }
        }
        case UPDATE_BOOK_ERROR: {
            return {...state,  loading: false }
        }
        case UPDATE_BOOK_SHOW_MODAL: {
            return {...state,  loading: false, visible: true }
        }
        case UPDATE_BOOK_HIDE_MODAL: {
            return { ...state,  visible: false }
        }
        case UPDATE_BOOK_IN_PROGRESS: {
            return { ...state, loading: true }
        }
        case UPDATE_BOOK_GET_DATA_ACTION: {
            return {
                ...state,
                book: action.payload,
            }
        }
        default:
            return state;
    }
}

export default bookUpdateReducer;