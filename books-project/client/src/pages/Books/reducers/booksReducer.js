import {
  BOOKS_FETCH_SUCCESS,
  BOOKS_FETCH_IN_PROGRESS,
  BOOKS_FETCH_ERROR,
  BOOKS_FETCH_RESET,
} from '../action-types/books.action-types';

const initialState = {
  books: [],
  loading: true,
  error: '',
  book: {},
};

const booksReducer = (state = initialState, action = '') => {
  switch (action.type) {
    case BOOKS_FETCH_SUCCESS: {
      return {
        books: action.payload,
        loading: false,
        error: '',
      };
    }
    case BOOKS_FETCH_IN_PROGRESS: {
      return {
        ...state, loading: true,
      };
    }
    case BOOKS_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case BOOKS_FETCH_RESET: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default booksReducer;
