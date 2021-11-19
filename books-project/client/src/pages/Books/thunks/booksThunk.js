import { message } from "antd"
import { addBook, deleteBook, getBookDetails, getBooks, updateBook } from "../../../api/books"
import { BOOKS_FETCH_SUCCESS, DELETE_BOOK_SUCCESS } from "../action-types/books.action-types"
import { addBookSuccessAction, addBookInProgressAction, deleteBookGetDataAction, updateBookInProgressAction, updateBookSuccessAction, updateBookGetDataAction, modalBookShowAction, modalBookProgressAction } from "../actions/books.actions"
// import { getBooksThunk } from "./getBooksThunk"

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
            });
    }
}


export const addBookThunk = (bookObj) => {

    return (dispatch) => {
        dispatch(addBookInProgressAction());
        addBook(bookObj)
            .then(() => {
                dispatch(addBookSuccessAction());
                message.success('The book has been created', 3);
                setTimeout(() => {
                    dispatch(getBooksThunk());
                }, 1000)
            });
    }
}

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
                        message.success("The book has been removed")
                    }, 2000));
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export const deleteGetBookThunk = (id) => {
    return (dispatch) => {
        getBookDetails(id)
            .then((response) => {
                dispatch(deleteBookGetDataAction(response));
            });
    }
}

export const updateBookThunk = (id, bookObj) => {
    return (dispatch) => {
        dispatch(updateBookInProgressAction());
        updateBook(id, bookObj)
            .then(() => {
                dispatch(updateBookSuccessAction());
                message.success('The book has been edited', 3);
                setTimeout(() => {
                    dispatch(getBooksThunk());
                }, 2000)
            });
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

export const getBookForEdit = (id) => {
    return (dispatch) => {
        dispatch(modalBookShowAction("edit"));
        dispatch(modalBookProgressAction());
        getBookDetails(id).then((response) => {
            dispatch(updateBookSuccessAction(response));
        });
    };
}