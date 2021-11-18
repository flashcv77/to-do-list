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
            return { ...state, data: action.payload, loading: false };
        default:
            return state;
    }
};

export default modalReducer;



// import {
//     ADD_BOOK_SHOW_MODAL,
//     UPDATE_BOOK_SHOW_MODAL,
//     DELETE_BOOK_SHOW_MODAL,
//     HIDE_MODAL,
//     UPDATE_BOOK_GET_DATA_ACTION,
// } from "../action-types/books.action-types";

// const initialState = {
//     visible: false,
//     loading: true,
//     error: '',
//     type: '',
//     book: {}
// };

// const modalReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_BOOK_SHOW_MODAL: {
//             return {
//                 ...state,
//                 loading: false,
//                 visible: true,
//                 type: "edit"
//             }
//         }
//         case UPDATE_BOOK_SHOW_MODAL: {
//             return {
//                 ...state,
//                 visible: true,
//                 type: "update"
//             }
//         }
//         case DELETE_BOOK_SHOW_MODAL: {
//             return {
//                 ...state,
//                 loading: true,
//                 visible: false,
//                 type: "delete"
//             }
//         }
//         case HIDE_MODAL: {
//             return {
//                 ...state,
//                 loading: true,
//                 visible: false
//             }
//         }
//         case UPDATE_BOOK_GET_DATA_ACTION: {
//             return {
//                 ...state,
//                 book: action.payload,
//                 loading: false,
//             }
//         }
//         default:
//             return state;
//     }
// }

// export default modalReducer;