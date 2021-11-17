import React from "react";
import { Card, Avatar, Button, Menu, Dropdown, message } from 'antd';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import cardIcon from '../../../../assets/images/card_icon.png'
import { updateBookThunk } from "../../thunks/updateBookThunk";
import { UserOutlined } from '@ant-design/icons';
import deleteBookThunk from "../../thunks/deleteBookThunk";
import BookDeleteModal from "../../BookDeleteModal/BookDeleteModal";
import { StyledAvatarWrapper, StyledButtonWrapper } from "./styled";

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
    console.log('id', id)
    this.props.deleteBook(id);
    setTimeout(() => {
      message.success('Item has been removed')
    }, 2000)
  }

  render() {
    const { id, title, description, author, handleUpdateShowModal, handleDeleteShowModal, handleDeleteHideModal, updateGetBook } = this.props;
    // console.log(updateGetBook(id), id);

    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1" >
          <NavLink to={`/books/${id}`}>
            Open
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2" onClick={() => {
          handleUpdateShowModal();
          updateGetBook(id)
        }}>
          Edit
        </Menu.Item>
        <Menu.Item key="3" onClick={() => handleDeleteShowModal()}>
          Delete
        </Menu.Item>
      </Menu>

    );

    return (
      <>
        <Card
          className="margin30px boxShadow"
          style={{
            width: 350,
            minHeight: 200
          }}
        >
          <StyledButtonWrapper>
            <Dropdown.Button
              style={{
                position: "absolute",
                top: "16px",
                right: "-15px",
                fontWeight: "bold",
                transform: "rotate(270deg)",
              }}
              onClick={this.handleButtonClick} overlay={menu} placement={"topLeft"}>
            </Dropdown.Button>
          </StyledButtonWrapper>
          <Meta
            avatar={
              <StyledAvatarWrapper>
                <Avatar src={cardIcon} />
              </StyledAvatarWrapper>
            }
            title={title}
            description={description}
            style={{
              // border: "1px solid black",
              minHeight: 140,
            }}
          />
          <div>{author}</div>
          <NavLink to={`/books/${id}`}>
            <Button type="default">Details</Button>
          </NavLink>
          <BookDeleteModal
            visible={this.props.visibleDelete}
            loading={this.props.loadingDelete}
            handleDeleteHideModal={handleDeleteHideModal}
            handleDeleteBook={() => this.handleDeleteBook(id)}
          // id={id}
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