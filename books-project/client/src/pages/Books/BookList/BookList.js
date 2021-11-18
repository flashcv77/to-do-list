import React, { Component } from "react";
import BookItem from "./BookItem"
import { connect } from "react-redux";
import { getBooksThunk } from "../thunks/getBooksThunk";
import { Row, Spin, Button } from "antd";
import BookAddModal from "../BookAddModal";
import { deleteBookGetDataAction, deleteHideModalAction, deleteShowModalAction, hideModalAction, showModalAction, updateHideModalAction, updateShowModalAction } from '../actions/books.actions';
import BookEditModal from "../BookEditModal/BookEditModal";
import { updateBookThunk, updateGetBookThunk } from "../thunks/updateBookThunk";
import BookDeleteModal from "../BookDeleteModal/BookDeleteModal";
import { deleteBookThunk } from "../thunks/deleteBookThunk";

export class BookList extends Component {
    componentDidMount() {
        this.props.fetchBooks()
    }

    handleAddShowModal = () => {
        this.props.addShowModal();
    }

    handleAddHideModal = () => {
        this.props.addHideModal();
    }

    handleUpdateShowModal = () => {
        this.props.updateShowModal();
    }

    handleUpdateHideModal = () => {
        this.props.updateHideModal();
    }

    handleDeleteShowModal = () => {
        this.props.deleteShowModal();
    }

    handleDeleteHideModal = () => {
        this.props.deleteHideModal();
    }

    render() {
        // console.log(this.props.updateGetBook);
        const { bookList, loadingAdd, visibleAdd, loadingUpdate, visibleUpdate, updateGetBook, book, updateBook, visibleDelete, loadingDelete, deleteBookId, deleteGetBook, deleteBook } = this.props;
        // console.log(this.props.book)
        return (
            <div className="site-card-wrapper">
                <h1>Books</h1>
                <Button type="primary" onClick={this.handleAddShowModal} >
                    Create book
                </Button>
                <Row className="flexWrapWrap flexJustifyCenter">
                    {loadingAdd && <Spin size="large" />}
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
                <BookAddModal loading={loadingAdd} visible={visibleAdd} handleAddHideModal={this.handleAddHideModal} />
                <BookEditModal
                    loading={loadingUpdate}
                    visible={visibleUpdate}
                    handleUpdateHideModal={this.handleUpdateHideModal}
                    initialValue={book}
                    updateBook={updateBook}
                />
                <BookDeleteModal
                    visible={visibleDelete}
                    loading={loadingDelete}
                    handleDeleteHideModal={this.handleDeleteHideModal}
                    deleteBook={deleteBook}
                    deleteBookId={deleteBookId}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        bookList: state.booksReducer.books,
        visibleAdd: state.modalReducer.visible,
        loadingAdd: state.modalReducer.loading,
        visibleUpdate: state.bookUpdateReducer.visible,
        loadingUpdate: state.bookUpdateReducer.loading,
        visibleDelete: state.bookDeleteReducer.visible,
        loadingDelete: state.bookDeleteReducer.loading,
        deleteBookId: state.bookDeleteReducer.book,
        book: state.bookUpdateReducer.book
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBooks: () => dispatch(getBooksThunk()),
        addShowModal: () => { dispatch(showModalAction()) },
        addHideModal: () => { dispatch(hideModalAction()) },
        updateShowModal: () => { dispatch(updateShowModalAction()) },
        updateHideModal: () => { dispatch(updateHideModalAction()) },
        deleteShowModal: () => { dispatch(deleteShowModalAction()) },
        deleteHideModal: () => { dispatch(deleteHideModalAction()) },
        updateGetBook: (id) => { dispatch(updateGetBookThunk(id)) },
        updateBook: (id, bookObj) => { dispatch(updateBookThunk(id, bookObj)) },
        deleteGetBook: (id) => { dispatch(deleteBookGetDataAction(id)) },
        deleteBook: (id) => { dispatch(deleteBookThunk(id)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);