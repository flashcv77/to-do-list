import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Spin, Button, Empty } from "antd";
import BookItem from "./BookItem"
import BookAddModal from "../BookAddModal";
import BookEditModal from "../BookEditModal/BookEditModal";
import BookDeleteModal from "../BookDeleteModal/BookDeleteModal";
import { getBooksThunk, updateBookThunk, getBookForEdit, addBookThunk, deleteBookByIdThunk, getBookModalDataThunk } from "../thunks/booksThunk"
import { deleteBookGetDataAction, modalBookCloseAction, modalBookShowAction, } from '../actions/books.actions';

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
        const { type, loading, bookEdit, id, loadingModal, bookList,
            book, updateBook, deleteBookId,
            deleteGetBook, deleteBook } = this.props;
        return (
            <div className="site-card-wrapper">
                <h1>Books</h1>
                {/*TODO move create => MODAL_TYPES.CREATE
                const MODAL_TYPES = { 
                    CREATE: 'CREATE'
                 }
                */}
                <Button type="primary" onClick={() => this.props.showModal("create")} >
                    Create book
                </Button>
                {<Spin spinning={this.props.loadingList} tip="Loading...">
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
                            id={id}
                            updateBook={updateBook}
                            getBookData={this.props.getBookData}
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
                </Spin>}
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
    loadingList: state.booksReducer.loading
});

const mapDispatchToProps = {
    fetchBooks: getBooksThunk,
    showModal: modalBookShowAction,
    closeModal: modalBookCloseAction,
    updateBook: updateBookThunk,
    deleteGetBook: deleteBookGetDataAction,
    deleteBook: deleteBookByIdThunk,
    getBook: modalBookShowAction,
    addBook: addBookThunk,
    getBookData: getBookModalDataThunk,

}



export default connect(mapStateToProps, mapDispatchToProps)(BookList);