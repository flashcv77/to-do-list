import { addBook } from "../../../api/books"
import { addBookSuccessAction, addBookInProgressAction } from "../actions/books.actions"
import { getBooksThunk } from "./getBooksThunk"

export const addBookThunk = (bookObj) => {

    return (dispatch) => {
        dispatch(addBookInProgressAction());
        addBook(bookObj)
            .then(() => {
                dispatch(addBookSuccessAction());
                setTimeout(() => {
                    dispatch(getBooksThunk());
                }, 4000)
            });
    }
}