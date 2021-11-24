import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Row, Spin, Button, Empty,
} from 'antd';
import PropTypes from 'prop-types';
import BookItem from './BookItem';
import BookAddModal from '../BookAddModal';
import { BookEditModal } from '../BookEditModal/BookEditModal';
import { BookDeleteModal } from '../BookDeleteModal/BookDeleteModal';
// import {
//   // getBooksThunk,
//   // updateBookThunk,
//   // addBookThunk,
//   // deleteBookByIdThunk,
//   // getBookModalDataThunk,
// } from '../thunks/booksThunk';
import {
  addBookStartAction,
  booksFetchStartAction,
  deleteBookStartAction,
  editBookStartAction,
  getBookForEditStartAction,
  modalBookCloseAction,
  modalBookShowAction,
} from '../actions/books.actions';
import * as selectors from '../selectors/books.selectors';
import { MODAL_TYPES } from '../modal-types/books.modal-types';

export class BookList extends Component {
  componentDidMount() {
    const { fetchBooks } = this.props;
    fetchBooks();
  }

  render() {
    const {
      bookList,
      loadingList,
      type,
      loadingModal,
      id,
      bookEditData,
      addBook,
      deleteBook,
      updateBook,
      getBookData,
      showModal,
      closeModal,
    } = this.props;
    return (
      <div className="site-card-wrapper">
        <h1>Books</h1>
        <Button type="primary" onClick={() => showModal('create')}>
          Create book
        </Button>
        <Spin spinning={loadingList} tip="Loading...">
          <Row className="flexWrapWrap flexJustifyCenter">
            {!bookList.length && <Empty />}
            {bookList.map((book) => (

              <BookItem
                key={book.uuid}
                id={book.uuid}
                title={book.name}
                author={book.author}
                date={book.createDate}
                description={book.description !== undefined && book.description.slice(0, 120)}
                showModal={showModal}
              />
            ))}

          </Row>
          {type === MODAL_TYPES.CREATE && (
            <BookAddModal
              visible
              loading={loadingModal}
              addBook={addBook}
              closeModal={closeModal}
            />
          )}
          {type === MODAL_TYPES.EDIT && (
            <BookEditModal
              visible
              loading={loadingModal}
              id={id}
              updateBook={updateBook}
              getBookData={getBookData}
              bookEditData={bookEditData}
              closeModal={closeModal}
            />
          )}
          {type === MODAL_TYPES.DELETE && (
            <BookDeleteModal
              id={id}
              visible
              loading={loadingModal}
              closeModal={closeModal}
              deleteBook={deleteBook}
            />
          )}
        </Spin>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bookList: selectors.selectBookList(state),
  loadingList: selectors.selectBooksLoading(state),
  type: selectors.selectModalType(state),
  loadingModal: selectors.selectModalLoading(state),
  id: selectors.selectModalId(state),
  bookEditData: selectors.selectModalData(state),
});

const mapDispatchToProps = {
  // fetchBooks: getBooksThunk,
  fetchBooks: booksFetchStartAction,
  // addBook: addBookThunk,
  addBook: addBookStartAction,
  // deleteBook: deleteBookByIdThunk,
  deleteBook: deleteBookStartAction,
  // updateBook: updateBookThunk,
  updateBook: editBookStartAction,
  // getBookData: getBookModalDataThunk,
  getBookData: getBookForEditStartAction,
  showModal: modalBookShowAction,
  closeModal: modalBookCloseAction,
};

BookList.propTypes = {
  bookList: PropTypes.arrayOf(PropTypes.object),
  // bookList: PropTypes.shape({}),
  loadingList: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  loadingModal: PropTypes.bool.isRequired,
  id: PropTypes.string,
  bookEditData: PropTypes.shape({
    name: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  addBook: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
  updateBook: PropTypes.func.isRequired,
  getBookData: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  fetchBooks: PropTypes.func.isRequired,
};

BookList.defaultProps = {
  bookList: [],
  id: '',
};
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
