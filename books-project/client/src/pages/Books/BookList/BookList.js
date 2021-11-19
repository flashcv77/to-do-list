import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Spin, Button, Empty } from "antd";
import BookItem from "./BookItem"
import BookAddModal from "../BookAddModal";
import BookEditModal from "../BookEditModal/BookEditModal";
import BookDeleteModal from "../BookDeleteModal/BookDeleteModal";
import { getBooksThunk, updateBookThunk, updateGetBookThunk, deleteBookThunk, getBookForEdit, addBookThunk, deleteBookByIdThunk } from "../thunks/booksThunk"
import { deleteBookGetDataAction, deleteHideModalAction, deleteShowModalAction, hideModalAction, modalBookCloseAction, modalBookShowAction, showModalAction, updateHideModalAction, updateShowModalAction } from '../actions/books.actions';

export class BookList extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }

    handleSubmit = (editValues) => {
        const book = {
            name: editValues.name,
            author: editValues.author,
            description: editValues.description,
        };
        this.props.handleSubmitEdit(book, editValues.uuid);
    };


    render() {
        const { type, loading, bookEdit, id, loadingModal, bookList, updateGetBook,
            book, updateBook, deleteBookId,
            deleteGetBook, deleteBook } = this.props;
        return (
            <div className="site-card-wrapper">
                <h1>Books</h1>
                <Button type="primary" onClick={() => this.props.showModal("create")} >
                    Create book
                </Button>
                <Row className="flexWrapWrap flexJustifyCenter">
                    {(!bookList.length && !loading) && <Empty />}
                    {!loading && bookList.map((book) => (
                        <BookItem
                            book={book}
                            key={book.uuid}
                            id={book.uuid}
                            title={book.name}
                            author={book.author}
                            description={book.description.slice(0, 120)}
                            updateGetBook={updateGetBook}
                            deleteBookId={deleteBookId}
                            deleteGetBook={deleteGetBook}
                            deleteBook={deleteBook}
                            showModalDelete={this.props.showModal}
                            getBook={this.props.getBook}
                        />
                    ))}
                </Row>
                {type === "create" && (
                    <BookAddModal
                        visible={true}
                        addBook={this.props.addBook}
                        closeModal={this.props.closeModal}
                        handleSubmitCreate={this.props.handleSubmitCreate}
                        loading={loadingModal}
                    />
                )}
                {type === "edit" && (
                    <BookEditModal
                        visible={true}
                        closeModal={this.props.closeModal}
                        bookEdit={bookEdit}  // <------
                        handleSubmitEdit={this.handleSubmit}
                        loading={loadingModal}
                        initialValue={book}
                        updateBook={updateBook}
                    />
                )}
                {type === "delete" && (
                    <BookDeleteModal
                        id={id}
                        visible={true}
                        loading={loadingModal}
                        handleDelete={this.props.handleDelete}
                        closeModal={this.props.closeModal}
                        deleteBook={deleteBook}
                        deleteBookId={deleteBookId}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    type: state.modalReducer.type,
    bookList: state.booksReducer.books,
    deleteBookId: state.booksReducer.book,
    book: state.booksReducer.book,
    id: state.modalReducer.data.id,
    loadingModal: state.modalReducer.loading,
    bookEdit: state.modalReducer.data,
});

const mapDispatchToProps = {
    fetchBooks: getBooksThunk,
    showModal: modalBookShowAction,
    closeModal: modalBookCloseAction,
    updateGetBook: updateGetBookThunk,
    updateBook: updateBookThunk,
    deleteGetBook: deleteBookGetDataAction,
    deleteBook: deleteBookByIdThunk,
    getBook: getBookForEdit,
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);