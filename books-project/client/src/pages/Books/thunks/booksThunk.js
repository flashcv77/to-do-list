import { message } from "antd"
import { addBook, deleteBook, getBookDetails, getBooks, updateBook } from "../../../api/books"
import { BOOKS_FETCH_SUCCESS, DELETE_BOOK_SUCCESS } from "../action-types/books.action-types"
import { addBookSuccessAction, addBookInProgressAction, deleteBookGetDataAction, updateBookInProgressAction, updateBookSuccessAction, updateBookGetDataAction, modalBookShowAction, modalBookProgressAction, modalBookSuccessAction, getBookForEditAction } from "../actions/books.actions"
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
        dispatch(modalBookProgressAction());
        addBook(bookObj)
            .then(() => {
                dispatch(modalBookSuccessAction());
                message.success('The book has been created', 3);
                setTimeout(() => {
                    dispatch(getBooksThunk());
                }, 1000)
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


  
      
