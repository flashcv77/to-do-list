import React from "react";
import { Container, Row, Col } from "reactstrap";
import BookItem from "../BookItem"
import Pagination from "../Pagination";
import { getBooks } from "../../../../api/books";
import { Spinner } from "reactstrap";

const POSTS_PER_PAGE = 15;
export class BookList extends React.Component {
    state = {
        bookList: [],
        loading: true,
        error: false,
        currentPageNumber: 1,
    }

    componentDidMount() {
        getBooks()
            .then((response) => {
                // console.log(response.data);
                this.setState({ loading: false, bookList: response.data });
            })
            .catch((rej) => {
                console.log("Error in parsing module", rej);
                this.setState({ error: true });
            });
    }

    handler = (number) => {
        this.setState({
            currentPageNumber: number,
        });
    }

    render() {
        const { loading, bookList, currentPageNumber } = this.state;
        const indexOfLastPost = this.state.currentPageNumber * POSTS_PER_PAGE;
        const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
        const currentPosts = bookList.slice(indexOfFirstPost, indexOfLastPost);
        return (
            <Container>
                <h1>Books</h1>
                {loading && <Spinner color="secondary" children="" />}
                <Row>
                    {!loading && currentPosts.map((book) => (
                        <BookItem
                            id={book.id}
                            title={book.title}
                            description={book.description.slice(0, 120) + "..."}
                        />
                    ))}
                </Row>
                <div className="pagination-container">
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            {!loading && <Pagination
                                dataPerPage={POSTS_PER_PAGE}
                                totalDataCount={bookList.length}
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

export default BookList;
