import { message } from "antd";
import { deleteBook, getBookDetails } from "../../../api/books";
import { DELETE_BOOK_SUCCESS } from "../action-types/books.action-types";
import { deleteBookGetDataAction } from "../actions/books.actions";
import { getBooksThunk } from "./getBooksThunk";

export const deleteBookThunk = (id) => {
    return (dispatch) => {
        console.log('here', id);
        deleteBook(id)
            .then(() => {
                dispatch({
                    type: DELETE_BOOK_SUCCESS
                },
                    setTimeout(() => {
                        dispatch(getBooksThunk());
                        message.success("Item has been removed")
                    }, 1000));
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

// export default deleteBookThunk;
export const deleteGetBookThunk = (id) => {
    return (dispatch) => {
        getBookDetails(id)
            .then((response) => {
                dispatch(deleteBookGetDataAction(response));
            });
    }
}