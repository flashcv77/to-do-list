import { message } from "antd"
import { addBook, deleteBook, getBookDetails, getBooks, updateBook } from "../../../api/books"
import { BOOKS_FETCH_SUCCESS } from "../action-types/books.action-types"
import { modalBookProgressAction, modalBookSuccessAction, getBookForEditAction, booksFetchInProgressAction } from "../actions/books.actions"
// import { getBooksThunk } from "./getBooksThunk"

export const getBooksThunk = () => {
    return (dispatch) => {
        dispatch(booksFetchInProgressAction());
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
            });
        // dispatch(booksFetchSuccessAction());
    }
}


export const addBookThunk = (bookObj) => {

    return (dispatch) => {
        dispatch(modalBookProgressAction());
        addBook(bookObj)
            .then(() => {
                dispatch(modalBookSuccessAction());
                message.success('The book has been created', 3);
                dispatch(getBooksThunk());
            });
    }
}

export const deleteBookByIdThunk = (id) => {
    return (dispatch) => {
        dispatch(modalBookProgressAction());
        deleteBook(id).then(() => {
            dispatch(modalBookSuccessAction());
            message.success("The book has been deleted");
            dispatch(getBooksThunk());
        });
    };
};

export const updateBookThunk = (id, bookObj) => {
    return (dispatch) => {
        dispatch(modalBookProgressAction());
        updateBook(id, bookObj)
            .then(() => {
                dispatch(modalBookSuccessAction());
                message.success('The book has been edited', 3);
                setTimeout(() => {
                    dispatch(getBooksThunk());
                }, 2000)
            });
    }
}

export const getBookModalDataThunk = (id) => {
    return (dispatch) => {
        dispatch(modalBookProgressAction());
        getBookDetails(id)
            .then((bookData) => {
                dispatch(getBookForEditAction(bookData));
            })
            .catch((error) => {
                console.error(error)
            })
    }

}




