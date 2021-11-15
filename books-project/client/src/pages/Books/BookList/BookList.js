import React, { Component } from "react";
import BookItem from "./BookItem"
import { connect } from "react-redux";
import { getBooksThunk } from "../thunks/getBooksThunk";
import { Row, Spin, Button } from "antd";
import BookAddModal from "../BookAddModal";
import { hideModalAction, showModalAction } from '../actions/books.actions';

export class BookList extends Component {
    componentDidMount() {
        this.props.fetchBooks()
    }

    handleShowModal = () => {
        this.props.showModal();
    }

    handleHideModal = () => {
        this.props.hideModal();
    }

    render() {
        const { bookList, loading, visible } = this.props;
        // console.log(this.props);
        // console.log(bookList)
        return (
            <div className="site-card-wrapper">
                <h1>Books</h1>
                <Button type="primary" onClick={this.handleShowModal} >
                    Create book
                </Button>
                <BookAddModal loading={loading} visible={visible} handleHideModal={this.handleHideModal} />
                <Row className="flexWrapWrap flexJustifyCenter">
                    {loading && <Spin size="large" />}
                    {bookList.books.map((book) => (
                        <BookItem
                            key={book.uuid}
                            id={book.uuid}
                            title={book.name}
                            description={book.description.slice(0, 120) }
                        />

                    ))}
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bookList: state.booksReducer,
        visible: state.modalReducer.visible,
        loading: state.modalReducer.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBooks: () => dispatch(getBooksThunk()),
        showModal: () => { dispatch(showModalAction()) },
        hideModal: () => { dispatch(hideModalAction()) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);