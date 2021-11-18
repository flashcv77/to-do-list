import {
    ADD_BOOK_SHOW_MODAL,
    UPDATE_BOOK_SHOW_MODAL,
    DELETE_BOOK_SHOW_MODAL,
    HIDE_MODAL,
    UPDATE_BOOK_GET_DATA_ACTION,
} from "../action-types/books.action-types";

const initialState = {
    visible: false,
    loading: true,
    error: '',
    type: '',
    book: {}
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK_SHOW_MODAL: {
            return {
                ...state,
                loading: false,
                visible: true,
                type: "edit"
            }
        }
        case UPDATE_BOOK_SHOW_MODAL: {
            return {
                ...state,
                visible: true,
                type: "update"
            }
        }
        case DELETE_BOOK_SHOW_MODAL: {
            return {
                ...state,
                loading: true,
                visible: false,
                type: "delete"
            }
        }
        case HIDE_MODAL: {
            return {
                ...state,
                loading: true,
                visible: false
            }
        }
        case UPDATE_BOOK_GET_DATA_ACTION: {
            return {
                ...state,
                book: action.payload,
                loading: false,
            }
        }
        default:
            return state;
    }
}

export default modalReducer;