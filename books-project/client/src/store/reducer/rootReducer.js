import { combineReducers } from "redux";
import booksReducer from "../../pages/Books/reducers/booksReducer";
import modalReducer from "../../pages/Books/reducers/modalReducer";

export const rootReducer = combineReducers({
    booksReducer,
    modalReducer
})
