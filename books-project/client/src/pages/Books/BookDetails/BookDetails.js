import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Spin } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import { getBookDetailsThunk } from '../thunks/bookThunk';

class BookDetails extends React.Component {
  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const { getBookDetails } = this.props;
    getBookDetails(id);
  }

  render() {
    const { book, loading } = this.props;
    return (
      <Spin
        spinning={loading}
        tip="Loading..."
      >
        <Link to="/books">
          <Button className="margin30px" type="primary">Go back</Button>
        </Link>
        <h1>{book.name}</h1>
        <p>{book.description}</p>
        <hr />
        <p>{book.author}</p>
        <hr />
        <p>{moment(book.createDate).format('ll')}</p>
      </Spin>
    );
  }
}

const mapStateToProps = (state) => ({
  book: state.bookReducer.book,
  loading: state.bookReducer.loading,
});

const mapDispatchToProps = {
  getBookDetails: getBookDetailsThunk,
};

BookDetails.propTypes = {
  book: PropTypes.shape({
    uuid: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    createDate: PropTypes.string,
  }),
  getBookDetails: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

BookDetails.defaultProps = {
  book: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
