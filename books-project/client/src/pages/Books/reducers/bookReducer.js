import {
  BOOK_DETAILS_FETCH_ERROR,
  BOOK_DETAILS_FETCH_IN_PROGRESS,
  BOOK_DETAILS_FETCH_RESET,
  BOOK_DETAILS_FETCH_SUCCESS,
} from '../action-types/books.action-types';

const detailsState = {
  book: {},
  loading: true,
  error: '',
};

const bookReducer = (state = detailsState, action = '') => {
  switch (action.type) {
    case BOOK_DETAILS_FETCH_SUCCESS: {
      return {
        book: action.payload,
        loading: false,
        error: '',
      };
    }
    case BOOK_DETAILS_FETCH_IN_PROGRESS: {
      return {
        ...state,
        loading: true,
      };
    }
    case BOOK_DETAILS_FETCH_RESET: {
      return {
        ...state,
      };
    }
    case BOOK_DETAILS_FETCH_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default bookReducer;
