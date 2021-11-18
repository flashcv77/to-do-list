import { getBookDetails, updateBook } from "../../../api/books";
import { updateBookGetDataAction, updateBookInProgressAction, updateBookSuccessAction } from "../actions/books.actions";
import { getBooksThunk } from "./getBooksThunk";

export const updateBookThunk = (id, bookObj) => {
    return (dispatch) => {
        dispatch(updateBookInProgressAction(), );
        updateBook(id, bookObj)
            .then(() => {
                dispatch(updateBookSuccessAction());
                setTimeout(() => {
                    dispatch(getBooksThunk());
                }, 2000)
            })
    }
}

export const updateGetBookThunk = (id) => {
    return (dispatch) => {
        getBookDetails(id).then((response) => {
            console.log(response);
            dispatch(updateBookGetDataAction(response));
        });
    }
}