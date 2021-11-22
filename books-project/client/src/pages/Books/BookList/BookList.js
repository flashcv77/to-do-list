import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Spin, Button, Empty } from "antd";
import BookItem from "./BookItem"
import BookAddModal from "../BookAddModal";
import BookEditModal from "../BookEditModal/BookEditModal";
import BookDeleteModal from "../BookDeleteModal/BookDeleteModal";
import { getBooksThunk, updateBookThunk, addBookThunk, deleteBookByIdThunk, getBookModalDataThunk } from "../thunks/booksThunk"
import { modalBookCloseAction, modalBookShowAction } from '../actions/books.actions';
import PropTypes from 'prop-types';
import { createStructuredSelector } from "reselect";

export class BookList extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { bookList, loadingList, type, loadingModal, id, bookEditData, addBook, deleteBook, updateBook, getBookData, showModal, closeModal,
        } = this.props;
        return (
            <div className="site-card-wrapper">
                <h1>Books</h1>
                {/*TODO move create => MODAL_TYPES.CREATE
                const MODAL_TYPES = { 
                    CREATE: 'CREATE'
                 }
                */}
                <Button type="primary" onClick={() => showModal("create")} >
                    Create book
                </Button>
                {<Spin spinning={loadingList} tip="Loading...">
                    <Row className="flexWrapWrap flexJustifyCenter">
                        {!bookList.length && <Empty />}
                        {bookList.map((book) => (

                            <BookItem
                                loading={this.props.loadingDetails}
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
                    {type === "create" && (
                        <BookAddModal
                            visible={true}
                            loading={loadingModal}
                            addBook={addBook}
                            closeModal={closeModal}
                        />
                    )}
                    {type === "edit" && (
                        <BookEditModal
                            visible={true}
                            loading={loadingModal}
                            id={id}
                            updateBook={updateBook}
                            getBookData={getBookData}
                            bookEditData={bookEditData}
                            closeModal={closeModal}
                        />
                    )}
                    {type === "delete" && (
                        <BookDeleteModal
                            id={id}
                            visible={true}
                            loading={loadingModal}
                            closeModal={this.props.closeModal}
                            deleteBook={deleteBook}
                        />
                    )}
                </Spin>}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    bookList: state.booksReducer.books,
    loadingList: state.booksReducer.loading,
    type: state.modalReducer.type,
    loadingModal: state.modalReducer.loading,
    id: state.modalReducer.data.id,
    bookEditData: state.modalReducer.data,
    loadingDetails: state.bookReducer.loading
});
// const mapState = createStructuredSelector(selectors: {
//     selectModalLoading,

// })

const mapDispatchToProps = {
    fetchBooks: getBooksThunk,
    addBook: addBookThunk,
    deleteBook: deleteBookByIdThunk,
    updateBook: updateBookThunk,
    getBookData: getBookModalDataThunk,
    showModal: modalBookShowAction,
    closeModal: modalBookCloseAction,
}

BookList.propTypes = {
    bookList: PropTypes.array,
    loadingList: PropTypes.bool,
    type: PropTypes.string,
    loadingModal: PropTypes.bool,
    id: PropTypes.string,
    bookEditData: PropTypes.object,
    addBook: PropTypes.func,
    deleteBook: PropTypes.func,
    updateBook: PropTypes.func,
    getBookData: PropTypes.func,
    showModal: PropTypes.func,
    closeModal: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

