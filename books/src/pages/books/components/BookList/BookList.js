import React from "react";
import { Container, Row } from "reactstrap";
import BookItem from "../BookItem"
import { getBooks } from "../../../../api/books";
import { Spinner } from "reactstrap";

export class BookList extends React.Component {
    state = {
        bookList: [],
        loading: true,
        error: false,
    }

    componentDidMount() {
        getBooks().then((response) => {
            // console.log(response.data);
            this.setState({ loading: false, bookList: response.data });
        });
    }

    render() {
        const booksJsx = !this.state.loading && this.state.bookList.map((book) => (
            <>
                <BookItem
                    id={book.id}
                    title={book.title}
                    description={book.description.slice(0,120)+"..."}
                />
            </>
        ))
        return (
            <Container>
                <h1>Books</h1>
                {this.state.loading && <Spinner color="secondary"  children=""/> }
                <Row>
                    {booksJsx} 
                </Row>
            </Container>
        )
    }
}

export default BookList;
