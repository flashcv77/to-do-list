import { combineReducers } from "redux";
import booksReducer from "../../pages/Books/reducers/booksReducer";
import modalReducer from "../../pages/Books/reducers/modalReducer";
import bookDetailsReducer from "../../pages/Books/reducers/bookDetailsReducer";
import bookDeleteReducer from "../../pages/Books/reducers/bookDeleteReducer";

export const rootReducer = combineReducers({
    booksReducer,
    modalReducer,
    bookDetailsReducer,
    bookDeleteReducer
});
