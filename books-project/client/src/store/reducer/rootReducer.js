import { combineReducers } from 'redux';
import booksReducer from '../../pages/Books/reducers/booksReducer';
import modalReducer from '../../pages/Books/reducers/modalReducer';
import bookReducer from '../../pages/Books/reducers/bookReducer';

export const rootReducer = combineReducers({
  booksReducer,
  modalReducer,
  bookReducer,
});

export default rootReducer;
