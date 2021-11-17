import React, { Component } from "react";
import BookItem from "./BookItem"
import { connect } from "react-redux";
import { getBooksThunk } from "../thunks/getBooksThunk";
import { Row, Spin, Button } from "antd";
import BookAddModal from "../BookAddModal";
import { deleteHideModalAction, deleteShowModalAction, hideModalAction, showModalAction, updateHideModalAction, updateShowModalAction } from '../actions/books.actions';
import BookEditModal from "../BookEditModal/BookEditModal";
import { updateGetBookThunk } from "../thunks/updateBookThunk";

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
        const { bookList, loadingAdd, visibleAdd, loadingUpdate, visibleUpdate, updateGetBook, book } = this.props;
        // console.log(this.props.book)
        return (
            <div className="site-card-wrapper">
                {/* <Alert message="Success Text" type="success" />
                <Alert message="Info Text" type="info" />
                <Alert message="Warning Text" type="warning" /> */}
                {/* <Alert message="Error Text" type="error" /> */}
                <h1>Books</h1>
                <Button type="primary" onClick={this.handleAddShowModal} >
                    Create book
                </Button>
                <BookAddModal loading={loadingAdd} visible={visibleAdd} handleAddHideModal={this.handleAddHideModal} />
                <BookEditModal
                    loading={loadingUpdate}
                    visible={visibleUpdate}
                    handleUpdateHideModal={this.handleUpdateHideModal}
                    initialValue={book}
                />


                <Row className="flexWrapWrap flexJustifyCenter">
                    {loadingAdd && <Spin size="large" />}
                    {bookList.map((book) => (
                        <BookItem
                            handleUpdateShowModal={this.handleUpdateShowModal}
                            handleDeleteShowModal={this.handleDeleteShowModal}
                            handleDeleteHideModal={this.handleDeleteHideModal}

                            key={book.uuid}
                            id={book.uuid}
                            title={book.name}
                            author={book.author}
                            description={book.description.slice(0, 120)}
                            updateGetBook={updateGetBook}
                        // book={book}
                        />

                    ))}
                </Row>
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
        updateGetBook: (id) => { dispatch(updateGetBookThunk(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);