import { combineReducers } from "redux";
import { booksReducer, bookUpdateReducer,bookDeleteReducer  } from "../../pages/Books/reducers/booksReducer";
import modalReducer from "../../pages/Books/reducers/modalReducer";
import bookDetailsReducer from "../../pages/Books/reducers/booksReducer";

export const rootReducer = combineReducers({
    booksReducer,
    modalReducer,
    bookDetailsReducer,
    bookDeleteReducer,
    bookUpdateReducer
});
