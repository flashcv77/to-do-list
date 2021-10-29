import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import BookItem from "../BookItem"
import Pagination from "../Pagination";
import { getBooks } from "../../../../api/books";
import { Spinner } from "reactstrap";

const POSTS_PER_PAGE = 15;

const BookListHook = () => {
    const [bookList, setBookList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const indexOfLastPost = currentPageNumber * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    const currentPosts = bookList.slice(indexOfFirstPost, indexOfLastPost);


    useEffect(() => {
        getBooks()
            .then((response) => {
                setBookList(response.data);
                setLoading(false);
            })
            .catch(() => setError(true))
        console.log(bookList);

    })

    const handlerCurrentPage = ((number) => {
        setCurrentPageNumber(number);
    });
   
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
                            handler={handlerCurrentPage}
                            pageNumber={currentPageNumber}
                        />}
                    </Col>
                </Row>
            </div>
        </Container>
    )

}

export default BookListHook;
