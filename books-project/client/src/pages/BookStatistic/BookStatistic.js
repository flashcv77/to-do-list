import React from 'react'

import { Table } from 'antd';
import { connect } from 'react-redux';
import { getBooksThunk } from '../Books/thunks/getBooksThunk';

class BookStatistic extends React.Component {
  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {
    const books = this.props.bookList;
    const columns = [

      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: {
          compare: (a, b) => a.name - b.name,
          multiple: 1,
        },
      },
      {
        title: 'Author',
        key: 'author',
        dataIndex: 'author',
        sorter: {
          compare: (a, b) => a.author - b.author,
          multiple: 2,
        },
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        sorter: {
          compare: (a, b) => a.descruption - b.description,
          multiple: 3,
        },
      },
      {
        title: 'Date of create',
        key: 'createDate',
        dataIndex: 'createDate',
        sorter: {
          compare: (a, b) => a.createDate - b.createDate,
          multiple: 4,
        },
      }

    ];

    return (
      <Table columns={columns} dataSource={books} />
    )

  }

}

const mapStateToProps = (state) => ({

  bookList: state.booksReducer.books,

});

const mapDispatchToProps = {

  fetchBooks: getBooksThunk,

}

export default connect(mapStateToProps, mapDispatchToProps)(BookStatistic);