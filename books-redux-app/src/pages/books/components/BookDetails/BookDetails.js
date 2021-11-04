import React from "react";
import { getDetails } from "../../../../api/books";
import { Link } from 'react-router-dom';
import { Jumbotron, Button, Container } from 'reactstrap';
import { Spinner } from "reactstrap";

export class BookDetails extends React.Component {
    state = {
        bookList: [],
        loading: true,
        error: false,
    }

    componentDidMount() {
        const { params } = this.props.match;
        console.log(params.id);
        getDetails(params.id).then((response) => {
            this.setState({ loading: false, bookList: response.data });

        });
    }

    render() {
        const { title, description, excerpt } = this.state.bookList;
        console.log(this.state.bookList);
        return (!this.state.loading &&
            < Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">{title}</h1>
                    <p className="lead">{description}</p>
                    <hr className="my-2" />
                    <p>{excerpt}</p>
                    <Link to={"/booklist"}>
                        <Button>Go back</Button>
                    </Link>
                    {this.state.loading && <Spinner color="secondary" children="" />}
                </Container>
            </Jumbotron >
        )
    }
}

export default BookDetails;