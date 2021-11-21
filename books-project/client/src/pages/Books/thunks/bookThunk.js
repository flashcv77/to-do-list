import { getBookDetails } from "../../../api/books";
import { bookDetailsFetchInProgressAction, bookDetailsFetchSuccesAction } from "../actions/books.actions";

export const getBookDetailsThunk = (id) => {
    return (dispatch) => {
        dispatch(bookDetailsFetchInProgressAction())
        getBookDetails(id)
            .then((response) => {
                let bookDetails = response;
                dispatch(bookDetailsFetchSuccesAction(bookDetails));
            })
            .catch((error) => {
                console.error(error)
            })
    }
}