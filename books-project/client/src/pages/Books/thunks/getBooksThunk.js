import { getBooks } from "../../../api/books"
import { BOOKS_FETCH_SUCCESS } from "../action-types/books.action-types";


export const getBooksThunk = () => {
    return (dispatch) => {
        getBooks()
            .then((response) => {
                let books = response.data;
                dispatch({
                    type: BOOKS_FETCH_SUCCESS,
                    payload: books,
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }
}



