import React from "react";
import { Link } from 'react-router-dom';
import { Jumbotron, Button, Container } from 'reactstrap';
import { Spinner } from "reactstrap";
import { getDetailsThunk } from "../../../../store";
import { connect } from "react-redux";

export class BookDetails extends React.Component {

    componentDidMount() {
        this.props.fetchDetails(this.props.match.params.id)
    }

    render() {
        const { title, description, excerpt } = this.props.bookList.books;
        const { loading } = this.props.bookList;
        return (
            < Jumbotron fluid>
                {loading &&
                    <Spinner color="secondary" children="" />}
                <Container fluid>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <hr />
                    <p>{excerpt}</p>
                    <Link to={"/booklist"}>
                        <Button>Go back</Button>
                    </Link>
                </Container>
            </Jumbotron >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bookList: state.bookDetailsReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetails: (id) => dispatch(getDetailsThunk(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);