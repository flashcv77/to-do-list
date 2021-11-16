import { deleteBook } from "../../../api/books";
import { DELETE_BOOK_SUCCESS } from "../action-types/books.action-types";
import { getBooksThunk } from "./getBooksThunk";

export const deleteBookThunk = (id) => {
    return (dispatch) => {
        deleteBook(id)
            .then(() => {
                console.log('Item has been removed');
                dispatch({
                    type: DELETE_BOOK_SUCCESS
                },
                    setTimeout(() => {
                        dispatch(getBooksThunk());
                    }, 1000));
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export default deleteBookThunk;