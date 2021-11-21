import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getBookDetailsThunk } from "../thunks/bookThunk";
import { Button, Spin } from "antd";
import moment from "moment";
import PropTypes from 'prop-types';

class BookDetails extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getBookDetails(id);
    }

    render() {
        const { book, loading } = this.props.bookData;
        return (
            <>
                {<Spin spinning={loading} tip="Loading...">
                    <Link to={"/books"}>
                        <Button className="margin30px" type="primary">Go back</Button>
                    </Link>
                    <h1>{book.name}</h1>
                    <p>{book.description}</p>
                    <hr />
                    <p>{book.author}</p>
                    <hr />
                    <p>{moment(book.createDate).format('ll')}</p>
                </Spin>}
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    bookData: state.bookReducer,
    loading: state.bookReducer.loading
})

const mapDispatchToProps = {
    getBookDetails: getBookDetailsThunk
}

BookDetails.propTypes = {
    book: PropTypes.object,
    loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);