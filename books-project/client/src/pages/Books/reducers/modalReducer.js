import {
    GET_BOOK_FOR_EDIT,
    MODAL_BOOK_CLOSE,
    MODAL_BOOK_IN_PROGRESS,
    MODAL_BOOK_SHOW,
    MODAL_BOOK_SUCCESS
} from "../action-types/books.action-types";

const initialState = {
    loading: false,
    data: {},
    type: "",
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case MODAL_BOOK_SHOW:
            return {
                ...state,
                loading: false,
                type: action.payload.type,
                data: { id: action.payload.id },
            };
        case MODAL_BOOK_IN_PROGRESS:
            return { ...state, loading: true };
        case MODAL_BOOK_SUCCESS:
            return initialState;
        case MODAL_BOOK_CLOSE:
            return initialState;
        case GET_BOOK_FOR_EDIT:
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        default:
            return state;
    }
}

export default modalReducer;