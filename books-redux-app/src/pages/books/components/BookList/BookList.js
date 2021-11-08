import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import BookItem from "../BookItem"
import Pagination from "../Pagination";
import { Spinner } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { getBooksThunk } from "../../../../store";

const POSTS_PER_PAGE = 15;
const BookList = () => {
    const dispatch = useDispatch();
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const { loading, books } = useSelector((state) => {
        console.log(state.booksReducer);

        return state.booksReducer
    });
    useEffect(() => {
        dispatch(getBooksThunk());
    }, [dispatch]);

    const handlerCurrentPage = ((number) => {
        setCurrentPageNumber(number);
    });

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
                            handler={handlerCurrentPage}
                            pageNumber={currentPageNumber}
                        />}
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default (BookList);
