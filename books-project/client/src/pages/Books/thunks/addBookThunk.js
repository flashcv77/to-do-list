import { addBook } from "../../../api/books"
import { addBookAction, addBookInProgressAction } from "../actions/books.actions"
import { getBooksThunk } from "./getBooksThunk"

export const addBookThunk = (bookObj) => {

    return (dispatch) => {
        dispatch(
            addBookInProgressAction()
        )
        addBook(bookObj)
            .then(() => {
                dispatch(
                    addBookAction()
                );
                dispatch(getBooksThunk())
            }
            )


    }
}