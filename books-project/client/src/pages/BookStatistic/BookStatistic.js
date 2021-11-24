import React from 'react';

import { Table } from 'antd';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
// import { getBooksThunk } from '../Books/thunks/booksThunk';
import { booksFetchStartAction } from '../Books/actions/books.actions';

class BookStatistic extends React.Component {
  componentDidMount() {
    const { fetchBooks } = this.props;
    fetchBooks();
  }

  render() {
    const { bookList, loadingList } = this.props;
    const books = bookList;
    const loading = loadingList;
    const columns = [

      {
        title: 'Name',
        dataIndex: 'name',
        key: 'nameTable',
        sorter: {
          compare: (a, b) => a.name - b.name,
          multiple: 1,
        },
      },
      {
        title: 'Author',
        key: 'authorTable',
        dataIndex: 'author',
        sorter: {
          compare: (a, b) => a.author - b.author,
          multiple: 2,
        },
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'descriptionTable',
        sorter: {
          compare: (a, b) => a.descruption - b.description,
          multiple: 3,
        },
      },
      {
        title: 'Date of create',
        key: 'createDateTable',
        dataIndex: 'createDate',
        sorter: {
          compare: (a, b) => a.createDate - b.createDate,
          multiple: 4,
        },
        render: (text) => (moment(text).format('ll')),
      },

    ];

    return (
      <Table
        rowKey={(books) => books.uuid}
        columns={columns}
        dataSource={books}
        loading={loading}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  bookList: state.booksReducer.books,
  loadingList: state.booksReducer.loading,
});

const mapDispatchToProps = {
  // fetchBooks: getBooksThunk,
  fetchBooks: booksFetchStartAction,
};

BookStatistic.propTypes = {
  bookList: PropTypes.arrayOf(PropTypes.object),
  loadingList: PropTypes.bool.isRequired,
  fetchBooks: PropTypes.func.isRequired,
};
BookStatistic.defaultProps = {
  bookList: [],
};
export default connect(mapStateToProps, mapDispatchToProps)(BookStatistic);
