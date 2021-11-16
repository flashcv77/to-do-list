import React from "react";
import { Card, Avatar, Button } from 'antd';
import { EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import { deleteBookThunk } from "../../thunks/deleteBookThunk"
import { connect } from "react-redux";
import cardIcon from '../../../../assets/images/card_icon.png'
import { updateBookThunk } from "../../thunks/updateBookThunk";
const { Meta } = Card;

export class BookItem extends React.Component {

  handleDeleteModal = (id) => {
    this.props.deleteBook(id);
  }

  handleUpdateBook = (id, bookObj) => {
    this.props.updateBook(id, bookObj);
  }

  render() {
    const { id, title, description, author } = this.props
    const newObj = {
      name: "newBook",
      author: "newAuthor",
      description: "newDescription"
    }
    console.log(this.props);
    return (
      <>

        <Card

          className="margin30px boxShadow"
          style={{ width: 350 }}
          actions={[
            // <SettingOutlined key="setting" />,
            // <EditOutlined key="edit" />,
            <EllipsisOutlined
            //  key="ellipsis" 
            />,
          ]}
        >
          <Meta
            avatar={<Avatar src={cardIcon} />}
            title={title}
            description={description}
          />
          <NavLink to={`/books/${id}`}>
            <Button>Details</Button>
          </NavLink>
          <Button type="danger" onClick={() => this.handleDeleteModal(id)}>Delete</Button>
          <Button type="dashed" onClick={() => this.handleUpdateBook(id, newObj)}>Edit</Button>


        </Card>
      </>
    )
  }

}

// const mapStateToProps = (state) => {
//   return {
//     bookData: state.deleteBookReducer
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBook: (id) => { dispatch(deleteBookThunk(id)) },
    updateBook: (id, bookObj) => { dispatch(updateBookThunk(id, bookObj)) }
  }
}

export default connect(null, mapDispatchToProps)(BookItem);