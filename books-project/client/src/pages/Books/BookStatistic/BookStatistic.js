import React from 'react'

import { Table } from 'antd';

const BookStatistic = () => {
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      //   render: text => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Author',
      key: 'author',
      dataIndex: 'author',
      //   render: tags => (
      //     <>
      //       {tags.map(tag => {
      //         let color = tag.length > 5 ? 'geekblue' : 'green';
      //         if (tag === 'loser') {
      //           color = 'volcano';
      //         }
      //         return (
      //           <Tag color={color} key={tag}>
      //             {tag.toUpperCase()}
      //           </Tag>
      //         );
      //       })}
      //     </>
      //   ),
    },

  ];

  const data = [
    {
      key: '1',
      id: '1',
      name: 'The Da Vinci Code',
      description: 'New York No. 1 Lake Park',
      author: 'Dan Brown',
    },
    {
      key: '2',
      id: '2',
      name: 'A Song of Ice and Fire',
      description: 'London No. 1 Lake Park',
      author: 'George R.R. Margin',
    },
    {
      key: '3',
      id: '3',
      name: 'The Lord of the rings',
      description: 'Sidney No. 1 Lake Park',
      author: 'J. R. R. Tolkien',
    },
  ];
  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default BookStatistic;