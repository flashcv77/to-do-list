import { updateBook } from "../../../api/books";
import { addBookSuccessAction, updateBookInProgressAction } from "../actions/books.actions";
import { getBooksThunk } from "./getBooksThunk";

export const updateBookThunk = (id, bookObj) => {
    return (dispatch) => {
        dispatch(updateBookInProgressAction());
        updateBook(id, bookObj)
            .then(() => {
                dispatch(addBookSuccessAction());
                setTimeout(() => {
                    dispatch(getBooksThunk());
                }, 4000)
            })
    }
}