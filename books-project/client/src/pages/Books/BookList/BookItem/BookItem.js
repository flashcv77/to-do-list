import React from "react";
import { Card, Avatar, Button, Menu, Dropdown } from 'antd';
import { NavLink } from "react-router-dom";
import cardIcon from '../../../../assets/images/card_icon.png'
import { StyledAvatarWrapper, StyledButtonWrapper } from "./styled";
import { DeleteOutlined, FolderOpenOutlined, EditOutlined, DownOutlined } from '@ant-design/icons';

const { Meta } = Card;

export class BookItem extends React.Component {

  handleUpdateBook = (id, bookObj) => {
    this.props.updateBook(id, bookObj);
  }

  handleMenuClick = (event) => {
  }

  // handleButtonClick = (event) => {
  // }


  render() {
    const { id, title, description, author, handleUpdateShowModal, handleDeleteShowModal, updateGetBook, deleteGetBook } = this.props;
    // console.log(updateGetBook(id), id);

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

            {/* <Dropdown.Button
              arrow
              placement="topLeft"
              overlay={
                <Menu onClick={this.handleMenuClick}>
                  <Menu.Item key="1"
                    icon={<FolderOpenOutlined />} >
                    <NavLink to={`/books/${id}`}>
                      Open
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="2" onClick={() => {
                    handleUpdateShowModal();
                    updateGetBook(id)
                  }} icon={<EditOutlined />}>
                    <EditOutlined />
                    Edit
                  </Menu.Item>
                  <Menu.Item key="3" onClick={() => {
                    console.log("ID for delete ", id)
                    handleDeleteShowModal();
                    deleteGetBook(id)
                  }}
                    icon={<DeleteOutlined />}
                  >
                    Delete
                  </Menu.Item>

                </Menu>
              }
              trigger={['click']}
              style={{
                position: "absolute",
                top: "22px",
                right: "-15px",
                fontWeight: "bold",
                transform: "rotate(270deg)",
              }}
            >
              <DownOutlined />
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              
              </a> 
            </Dropdown.Button> */}
            <Dropdown.Button
              style={{
                position: "absolute",
                top: "16px",
                right: "-15px",
                fontWeight: "bold",
                transform: "rotate(270deg)",
              }}
              onClick={this.handleButtonClick}
              overlay={(

                <Menu onClick={this.handleMenuClick}>
                  <Menu.Item key="1"
                    icon={<FolderOpenOutlined />} >
                    <NavLink to={`/books/${id}`}>
                      Open
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="2" onClick={() => {
                    handleUpdateShowModal();
                    updateGetBook(id)
                  }} icon={<EditOutlined />}>
                    {/* <EditOutlined /> */}
                    Edit
                  </Menu.Item>
                  <Menu.Item key="3" onClick={() => {
                    console.log("ID for delete ", id)
                    handleDeleteShowModal();
                    deleteGetBook(id)
                  }}
                    icon={<DeleteOutlined />}
                  >
                    Delete
                  </Menu.Item>

                </Menu>

              )}
              placement={"topLeft"}>
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
              minHeight: 140,
            }}
          />
          <div>{author}</div>
          <NavLink to={`/books/${id}`}>
            <Button type="default">Details</Button>
          </NavLink>

        </Card>

      </>
    )
  }

}

export default BookItem;