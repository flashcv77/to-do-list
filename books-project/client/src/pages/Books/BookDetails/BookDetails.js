import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getBookDetailsThunk } from "../thunks/bookThunk";
import { Button } from "antd";

class BookDetails extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getBookDetails(id);
    }

    render() {
        const { book } = this.props.bookData;
        return (
            <>
                <Link to={"/books"}>
                    <Button className="margin30px" type="primary">Go back</Button>
                </Link>
                <h1>{book.name}</h1>
                <p>{book.description}</p>
                <hr />
                <p>{book.author}</p>

            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bookData: state.bookDetailsReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBookDetails: (id) => { dispatch(getBookDetailsThunk(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);