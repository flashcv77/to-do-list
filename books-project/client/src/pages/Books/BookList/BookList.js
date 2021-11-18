import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Spin, Button } from "antd";
import BookItem from "./BookItem"
import BookAddModal from "../BookAddModal";
import BookEditModal from "../BookEditModal/BookEditModal";
import BookDeleteModal from "../BookDeleteModal/BookDeleteModal";
import { getBooksThunk, updateBookThunk, updateGetBookThunk, deleteBookThunk } from "../thunks/booksThunk"
import { deleteBookGetDataAction, deleteHideModalAction, hideModalAction, addShowModalAction, updateShowModalAction, deleteShowModalAction } from '../actions/books.actions';

export class BookList extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }

    handleAddShowModal = () => {
        this.props.addShowModal();
    }

    handleHideModal = () => {
        this.props.hideModal();
    }

    handleUpdateShowModal = () => {
        this.props.updateShowModal();
    }

    // handleUpdateHideModal = () => {
    //     this.props.updateHideModal();
    // }

    handleDeleteShowModal = () => {
        this.props.deleteShowModal();
    }

    // handleDeleteHideModal = () => {
    //     this.props.deleteHideModal();
    // }

    render() {
        const { bookList, loadingAdd, visibleAdd, loadingUpdate, visibleUpdate, updateGetBook, book, updateBook, visibleDelete, loadingDelete, deleteBookId, deleteGetBook, deleteBook } = this.props;
        return (
            <div className="site-card-wrapper">
                <h1>Books</h1>
                <Button type="primary" onClick={this.handleAddShowModal} >
                    Create book
                </Button>
                <Row className="flexWrapWrap flexJustifyCenter">
                    {/* {loadingAdd && <Spin size="large" />} */}
                    {bookList.map((book) => (
                        <BookItem
                            handleUpdateShowModal={this.handleUpdateShowModal}
                            handleDeleteShowModal={this.handleDeleteShowModal}
                            key={book.uuid}
                            id={book.uuid}
                            title={book.name}
                            author={book.author}
                            description={book.description.slice(0, 120)}
                            updateGetBook={updateGetBook}
                            deleteBookId={deleteBookId}
                            deleteGetBook={deleteGetBook}
                            deleteBook={deleteBook}
                        />
                    ))}
                </Row>
                <BookAddModal
                    loading={loadingAdd}
                    visible={visibleAdd}
                    hideModal={this.hideModal}
                />
                <BookEditModal
                    loading={loadingUpdate}
                    visible={visibleUpdate}
                    hideModal={this.hideModal}
                    initialValue={book}
                    updateBook={updateBook}
                />
                <BookDeleteModal
                    visible={visibleDelete}
                    loading={loadingDelete}
                    hideModal={this.hideModal}
                    deleteBook={deleteBook}
                    deleteBookId={deleteBookId}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    bookList: state.booksReducer.books,
    visibleAdd: state.modalReducer.visible,
    loadingAdd: state.modalReducer.loading,
    visibleUpdate: state.bookUpdateReducer.visible,
    loadingUpdate: state.bookUpdateReducer.loading,
    visibleDelete: state.bookDeleteReducer.visible,
    loadingDelete: state.bookDeleteReducer.loading,
    deleteBookId: state.bookDeleteReducer.book,
    book: state.bookUpdateReducer.book
});

const mapDispatchToProps = {
    fetchBooks: getBooksThunk,
    addShowModal: addShowModalAction,
    addHideModal: hideModalAction,
    updateShowModal: updateShowModalAction,
    deleteShowModal: deleteShowModalAction,
    hideModal: hideModalAction,
    updateGetBook: updateGetBookThunk,
    updateBook: updateBookThunk,
    deleteGetBook: deleteBookGetDataAction,
    deleteBook: deleteBookThunk,
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);