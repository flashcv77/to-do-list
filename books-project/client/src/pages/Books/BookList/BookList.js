import React, { Component } from "react";
import BookItem from "./BookItem"
import { connect } from "react-redux";
import { getBooksThunk } from "../thunks/getBooksThunk";
import { Row, Spin } from "antd";
import BookAddModal from "../BookAddModal";

export class BookList extends Component {
    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        const { books, loading } = this.props.bookList;
        console.log(this.props);
        // console.log(bookList)
        return (
            <div className="site-card-wrapper">
                <h1>Books</h1>
                    <BookAddModal />
                    <Row className="flexWrapWrap flexJustifyCenter">
                    {loading && <Spin size="large" />}
                        {books.map((book) => (
                            <BookItem
                                key={book.uuid}
                                id={book.uuid}
                                title={book.name}
                                description={book.description.slice(0, 120) + "..."}
                            />
                        ))}
                    </Row>
                {/* </Spin>} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bookList: state.booksReducer,
        // loading: state.booksReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBooks: () => dispatch(getBooksThunk())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);