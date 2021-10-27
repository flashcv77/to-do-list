import React from "react";
import { Container, Row } from "reactstrap";
import BookItem from "./BookItem";

export class BookList extends React.Component {
    state = {
        loading: true,
        books: [
            {
                "id": 0,
                "title": "A Song of Ice and Fire",
                "description": "A Song of Ice and Fire is a series of epic fantasy novels by the American novelist and screenwriter George R. R. Martin. He began the first volume of the series, A Game of Thrones, in 1991, and it was published in 1996. Martin, who initially envisioned the series as a trilogy, has published five out of a planned seven volumes. The fifth and most recent volume of the series, A Dance with Dragons, was published in 2011 and took Martin six years to write. He is currently writing the sixth novel, The Winds of Winter. A seventh novel, A Dream of Spring, is planned.",
                "pageCount": 421,
                "excerpt": "A Game of Thrones",
                "publishDate": "2021-10-26T10:49:38.100Z"
            },
            {
                "id": 1,
                "title": "The Lord of the Rings",
                "description": "The Lord of the Rings is an epic[1] high-fantasy novel[a] by English author and scholar J. R. R. Tolkien. Set in Middle-earth, intended to be Earth at some distant time in the past, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150 million copies sold.",
                "pageCount": 545,
                "excerpt": "The Fellowship of the Ring",
                "publishDate": "2021-10-26T10:49:38.100Z"
            },
            {
                "id": 2,
                "title": "To Kill a Mockingbird",
                "description": "To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. In the United States, it is widely read in high schools and middle schools. To Kill a Mockingbird has become a classic of modern American literature, winning the Pulitzer Prize. The plot and characters are loosely based on Lee's observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was ten.",
                "pageCount": 264,
                "excerpt": "To Kill a Mockingbird has been subject to campaigns for removal from public classrooms",
                "publishDate": "2021-10-26T10:49:38.100Z"
            },
        ]
    }

    // async componentDidMount() {
    //     const url = "";
    //     const response = await fetch(books);
    //     const data = await response.json();
    //     this.setState({ books: data.results, loading: false })
    // }
    render() {
        // if (this.state.loading) {
        //     return <div> loading...</div>
        // }

        // if (!this.state.books.length) {
        //     return <div>didn't get a book</div>
        // }
        const booksJsx = this.state.books.map((book) => (
            <BookItem
                id={book.id}
                title={book.title}
                excerpt={book.excerpt}
            />
        ))
        return (
            <Container>
                <Row>
                    {booksJsx}
                </Row>
            </Container>
        )
    }
}

export default BookList;
