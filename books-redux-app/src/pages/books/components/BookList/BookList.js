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

    handler = (number) => {
        this.setState({
            currentPageNumber: number,
        });
    }

    render() {
        const books = this.props.bookList.booksReducer.books;
        const { loading, error } = this.props.bookList.booksReducer;
        // console.log('props: ', loading, '123', error);
        const { currentPageNumber } = this.state;
        const indexOfLastPost = this.state.currentPageNumber * POSTS_PER_PAGE;
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
                                handler={this.handler}
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
    // console.log(state);
    return {
        bookList: state
    }
}

const mapDispatchToProps = (dispatch) => {
    // console.log("check");
    return {
        fetchBooks: () => dispatch(getBooksThunk())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
