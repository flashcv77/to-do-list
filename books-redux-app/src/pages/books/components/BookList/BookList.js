import React from "react";
import { Container, Row, Col } from "reactstrap";
import BookItem from "../BookItem"
import Pagination from "../Pagination";
import { Spinner } from "reactstrap";
import { connect } from "react-redux";
import { getBooksThunk } from "../../../../store";

const POSTS_PER_PAGE = 15;
export class BookList extends React.Component {
    state = {
        currentPageNumber: 1,
    }

    componentDidMount() {
        this.props.fetchBooks()
    }

    handleCurrentPage = (number) => {
        this.setState({
            currentPageNumber: number,
        });
    }

    render() {
        const { books, loading } = this.props.bookList;
        const { currentPageNumber } = this.state;
        const indexOfLastPost = currentPageNumber * POSTS_PER_PAGE;
        const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
        const currentPosts = books.slice(indexOfFirstPost, indexOfLastPost);
        return (
            <Container>
                <h1>Books</h1>
                {loading && <Spinner color="secondary" children="" />}
                <Row>
                    {currentPosts.map((book) => (
                        <BookItem
                            key={book.id}
                            id={book.id}
                            title={book.title}
                            description={book.description.slice(0, 120) + "..."}
                        />
                    ))}
                </Row>
                <div className="pagination-container">
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            {<Pagination
                                dataPerPage={POSTS_PER_PAGE}
                                totalDataCount={books.length}
                                handler={this.handleCurrentPage}
                                pageNumber={currentPageNumber}
                            />}
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bookList: state.booksReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBooks: () => dispatch(getBooksThunk())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
