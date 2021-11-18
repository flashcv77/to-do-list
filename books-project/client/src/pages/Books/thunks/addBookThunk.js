import { message } from "antd"
import { addBook } from "../../../api/books"
import { addBookSuccessAction, addBookInProgressAction } from "../actions/books.actions"
import { getBooksThunk } from "./getBooksThunk"

export const addBookThunk = (bookObj) => {

    return (dispatch) => {
        dispatch(addBookInProgressAction());
        addBook(bookObj)
            .then(() => {
                dispatch(addBookSuccessAction());
                message.success('Book has been created', 5);
                setTimeout(() => {
                    dispatch(getBooksThunk());
                }, 1000)
            });
    }
}