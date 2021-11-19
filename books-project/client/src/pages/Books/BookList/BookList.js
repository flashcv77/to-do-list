import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Spin, Button, Empty } from "antd";
import BookItem from "./BookItem"
import BookAddModal from "../BookAddModal";
import BookEditModal from "../BookEditModal/BookEditModal";
import BookDeleteModal from "../BookDeleteModal/BookDeleteModal";
import { getBooksThunk, updateBookThunk, updateGetBookThunk, deleteBookThunk, getBookListThunk, deleteBookByIdThunk, editBookThunk, createBookThunk, getBookForEditThunk } from "../thunks/booksThunk"
import { deleteBookGetDataAction, deleteHideModalAction, hideModalAction, addShowModalAction, updateShowModalAction, deleteShowModalAction, modalBookShowAction, modalBookCloseAction, closeBooks } from '../actions/books.actions';

export class BookList extends Component {
    componentDidMount() {
        this.props.getData()
    }

    componentWillUnmount() {
        this.props.closeBooks();
    }

    handleSubmit = (editValues) => {
        const book = {
            name: editValues.name,
            author: editValues.author,
            description: editValues.description,
        };
        this.props.handleSubmitEdit(book, editValues.uuid);
    };

    // handleAddShowModal = () => {
    //     this.props.addShowModal();
    // }

    // handleHideModal = () => {
    //     this.props.hideModal();
    // }

    // handleUpdateShowModal = () => {
    //     this.props.updateShowModal();
    // }

    // handleUpdateHideModal = () => {
    //     this.props.updateHideModal();
    // }

    // handleDeleteShowModal = () => {
    //     this.props.deleteShowModal();
    // }

    // handleDeleteHideModal = () => {
    //     this.props.deleteHideModal();
    // }

    render() {
        const { type, loading, books, bookEdit, id, loadingModal } = this.props;
        console.log(books);
        // const { bookList, loadingAdd, visibleAdd, loadingUpdate, visibleUpdate, updateGetBook, book, updateBook, visibleDelete, loadingDelete, deleteBookId, deleteGetBook, deleteBook } = this.props;
        return (
            <div className="site-card-wrapper">
                <h1>Books</h1>
                <Button type="primary" onClick={() => this.props.showModal("create")}>
                    Create book
                </Button>
                <Row className="flexWrapWrap flexJustifyCenter">
                    {/* {loadingAdd && <Spin size="large" />} */}
                    {/* {(!books.length && !loading) && <Empty />} */}
                    {books.map((book) => (
                        <BookItem
                            key={book.uuid}
                            id={book.uuid}
                            title={book.name}
                            author={book.author}
                            description={book.description.slice(0, 120)}
                            showModalDelete={this.props.showModal}
                            getBook={this.props.getBook}

                        />
                    ))}
                </Row>
                {loading && <div><Spin /> Loading book list...</div>}
                {type === "create" && (
                    <BookAddModal
                        visible={true}
                        closeModal={this.props.closeModal}
                        handleSubmitCreate={this.props.handleSubmitCreate}
                        loading={loadingModal}
                    />
                )}
                {/* <BookAddModal
                    loading={loadingAdd}
                    visible={visibleAdd}
                    hideModal={this.hideModal}
                /> */}
                {type === "edit" && (
                    <BookEditModal
                        visible={true}
                        closeModal={this.props.closeModal}
                        bookEdit={bookEdit}
                        handleSubmitEdit={this.handleSubmit}
                        loading={loadingModal}
                    />
                )}
                {/* <BookEditModal
                    loading={loadingUpdate}
                    visible={visibleUpdate}
                    hideModal={this.hideModal}
                    initialValue={book}
                    updateBook={updateBook}
                /> */}
                {type === "delete" && (
                    <BookDeleteModal
                        id={id}
                        visible={true}
                        handleDelete={this.props.handleDelete}
                        closeModal={this.props.closeModal}
                        loading={loadingModal}
                    />
                )}
                {/* <BookDeleteModal
                    visible={visibleDelete}
                    loading={loadingDelete}
                    hideModal={this.hideModal}
                    deleteBook={deleteBook}
                    deleteBookId={deleteBookId}
                /> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        type: state.modalReducer.type,
        books: state.booksReducer.bookList,
        loading: state.booksReducer.isLoading,
        bookEdit: state.modalReducer.data,
        id: state.modalReducer.data.id,
        loadingModal: state.modalReducer.loading
    }
};

const mapDispatchToProps = {
    getData: getBookListThunk,
    showModal: modalBookShowAction,
    handleDelete: deleteBookByIdThunk,
    closeModal: modalBookCloseAction,
    handleSubmitEdit: editBookThunk,
    handleSubmitCreate: createBookThunk,
    getBook: getBookForEditThunk,
    closeBooks: closeBooks,
};







// const mapStateToProps = (state) => ({
//     bookList: state.booksReducer.books,
//     visibleAdd: state.modalReducer.visible,
//     loadingAdd: state.modalReducer.loading,
//     visibleUpdate: state.bookUpdateReducer.visible,
//     loadingUpdate: state.bookUpdateReducer.loading,
//     visibleDelete: state.bookDeleteReducer.visible,
//     loadingDelete: state.bookDeleteReducer.loading,
//     deleteBookId: state.bookDeleteReducer.book,
//     book: state.bookUpdateReducer.book
// });

// const mapDispatchToProps = {
//     fetchBooks: getBooksThunk,
//     addShowModal: addShowModalAction,
//     addHideModal: hideModalAction,
//     updateShowModal: updateShowModalAction,
//     deleteShowModal: deleteShowModalAction,
//     hideModal: hideModalAction,
//     updateGetBook: updateGetBookThunk,
//     updateBook: updateBookThunk,
//     deleteGetBook: deleteBookGetDataAction,
//     deleteBook: deleteBookThunk,
// }

export default connect(mapStateToProps, mapDispatchToProps)(BookList);