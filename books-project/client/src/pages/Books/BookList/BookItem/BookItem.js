import React from "react";
import { Card, Avatar, Button, Menu, Dropdown } from 'antd';
import { NavLink } from "react-router-dom";
import cardIcon from '../../../../assets/images/card_icon.png'
import { StyledAvatarWrapper, StyledDropDownWrapper } from "./styled";
import { DeleteOutlined, FolderOpenOutlined, EditOutlined, DownOutlined } from '@ant-design/icons';
import dropDownImg from '../../../../assets/images/dropdownImg.png'

const { Meta } = Card;

export class BookItem extends React.Component {

  handleUpdateBook = (id, bookObj) => {
    this.props.updateBook(id, bookObj);
  }

  handleMenuClick = (event) => {
  }

  render() {
    const { getBook, book, id, title, description, author, showModalDelete } = this.props;

    return (
      <>

        <Card
          className="margin30px boxShadow"
          style={{
            width: 350,
            minHeight: 200
          }}
        >
          <StyledDropDownWrapper
            style={{
              position: "absolute",
              right: 5,
              top: 5
            }}>
            <Dropdown
              overlay={
                <Menu
                  onClick={this.handleMenuClick}           >
                  <Menu.Item key="1"
                    icon={<FolderOpenOutlined />} >
                    <NavLink to={`/books/${id}`}>
                      Open
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="2" onClick={() => {
                    getBook('edit', book.uuid)

                  }} icon={<EditOutlined />}>
                    Edit
                  </Menu.Item>
                  <Menu.Item key="3"
                    onClick={() => showModalDelete("delete", book.uuid)}
                    icon={<DeleteOutlined />}
                  >
                    Delete
                  </Menu.Item>
                </Menu>
              }
              trigger={['click']}>
              <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <img src={dropDownImg} width="15" alt="dropdown" /> <DownOutlined />
              </div>
            </Dropdown>
          </StyledDropDownWrapper>
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