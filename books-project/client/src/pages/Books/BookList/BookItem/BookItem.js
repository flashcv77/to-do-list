import React from "react";
import { Card, Avatar, Button } from 'antd';
import { EditOutlined, EllipsisOutlined} from '@ant-design/icons';
import { NavLink } from "react-router-dom";

const { Meta } = Card;

export function BookItem({ id, title, description, author }) {
  return (
    <>

      {/* <div className="site-card-wrapper"> */}

      <Card
        className="margin30px boxShadow"
        style={{ width: 350 }}
        // cover={
        //   <img
        //     alt="example"
        //     src="https://cdn.picpng.com/book/book-illustration-30958.png"
        //   />
        // }
        actions={[
          // <SettingOutlined key="setting" />,
          // <EditOutlined key="edit" />,
          <EllipsisOutlined
          //  key="ellipsis" 
           />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://toppng.com/uploads/preview/logo-open-book-11549419459w468xc4rfg.png" />}
          title={title}
          description={description}
        />
        <NavLink to={`/books/${id}`}>
          <Button>Details</Button>
        </NavLink>
      </Card>

      {/* </div>, */}

    </>
  )
}

export default BookItem;