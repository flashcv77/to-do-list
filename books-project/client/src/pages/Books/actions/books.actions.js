import { ADD_BOOK_IN_PROGRESS, ADD_BOOK_SUCCESS, ADD_BOOK_HIDE_MODAL, ADD_BOOK_SHOW_MODAL } from "../action-types/books.action-types"

export const addBookAction = () => ({
    type: ADD_BOOK_SUCCESS,
})
export const addBookInProgressAction = () => ({
    type: ADD_BOOK_IN_PROGRESS,
})
export const hideModalAction = () => ({
    type: ADD_BOOK_HIDE_MODAL,
})
export const showModalAction = () => ({
    type: ADD_BOOK_SHOW_MODAL,
})

