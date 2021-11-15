import { getBookDetails } from "../../../api/books";
import { BOOK_DETAILS_FETCH_SUCCESS } from "../action-types/books.action-types";

export const getBookDetailsThunk = (id) => {
    return (dispatch) => {
        getBookDetails(id)
            .then((response) => {
                console.log('response', response)
                let bookDetails = response;
                dispatch({
                    type: BOOK_DETAILS_FETCH_SUCCESS,
                    payload: bookDetails,
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }
}