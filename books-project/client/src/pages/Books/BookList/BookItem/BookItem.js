import React from "react";
import { Card, Avatar, Button, Menu, Dropdown } from 'antd';
import { EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import cardIcon from '../../../../assets/images/card_icon.png'
import { updateBookThunk } from "../../thunks/updateBookThunk";
import { UserOutlined } from '@ant-design/icons';
import deleteBookThunk from "../../thunks/deleteBookThunk";
import BookDeleteModal from "../../BookDeleteModal/BookDeleteModal";

const { Meta } = Card;

export class BookItem extends React.Component {


  handleUpdateBook = (id, bookObj) => {
    this.props.updateBook(id, bookObj);
  }

  handleMenuClick = (event) => {
  }

  handleButtonClick = (event) => {
  }


  handleDeleteBook = (id) => {
    this.props.deleteBook(id);
  }

  render() {
    const { id, title, description, author, handleUpdateShowModal, handleDeleteShowModal, updateGetBook } = this.props;
    console.log(updateGetBook(id), id);
    const newObj = {
      name: "newBook",
      author: "newAuthor",
      description: "newDescription"
    }

    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">
          <NavLink to={`/books/${id}`}>
            <Button>Open</Button>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <Button
            type="danger"
            onClick={() => handleDeleteShowModal()}
          // onClick={() => this.handleDeleteBook(id)}
          >Delete</Button>
        </Menu.Item>
        <Menu.Item key="3">
          <Button type="dashed" onClick={() => { handleUpdateShowModal(); updateGetBook(id) }}>Edit</Button>
          {/* <Button type="dashed" onClick={() => this.handleUpdateBook(id, newObj)}>Edit</Button> */}
        </Menu.Item>
      </Menu>

    );


    return (
      <>

        <Card
          className="margin30px boxShadow"
          style={{ width: 350 }}
        >
          <Dropdown.Button onClick={this.handleButtonClick} overlay={menu} placement={"topLeft"}>

          </Dropdown.Button>
          <Meta
            avatar={<Avatar src={cardIcon} />}
            title={title}
            description={description}
          />
          <NavLink to={`/books/${id}`}>
            <Button>Details</Button>
          </NavLink>
          <BookDeleteModal
            visible={this.props.visibleDelete}
            // visible={this.props.visibleDelete}
            loading={this.props.loadingDelete}
            handleDeleteHideModal={this.handleDeleteHideModal}
            handleDeleteBook={() => this.handleDeleteBook(id)}
          />
        </Card>
      </>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    visibleDelete: state.bookDeleteReducer.visible,
    loadingDelete: state.bookDeleteReducer.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateBook: (id, bookObj) => { dispatch(updateBookThunk(id, bookObj)) },
    deleteBook: (id) => { dispatch(deleteBookThunk(id)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);