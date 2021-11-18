import { getBookDetails } from "../../../api/books";
import { BOOK_DETAIL_SUCCESS } from "../action-types/books.action-types";

export const getBookDetailsThunk = (id) => {
    return (dispatch) => {
        getBookDetails(id)
            .then((response) => {
                console.log('response', response)
                let bookDetails = response;
                dispatch({
                    type: BOOK_DETAIL_SUCCESS,
                    payload: bookDetails,
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }
}