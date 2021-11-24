import { message } from 'antd';
import { getBookDetails } from '../../../api/books';
import { bookDetailsFetchInProgressAction, bookDetailsFetchReset, bookDetailsFetchSuccesAction } from '../actions/books.actions';

export const getBookDetailsThunk = (id) => (dispatch) => {
  dispatch(bookDetailsFetchReset());
  dispatch(bookDetailsFetchInProgressAction());
  getBookDetails(id)
    .then((response) => {
      const bookDetails = response;
      dispatch(bookDetailsFetchSuccesAction(bookDetails));
    })
    .catch((error) => {
      message.error(error);
    });
};

export default getBookDetailsThunk;
