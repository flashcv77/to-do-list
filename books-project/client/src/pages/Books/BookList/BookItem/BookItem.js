/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import {
  Card, Avatar, Button, Menu, Dropdown,
} from 'antd';
import { NavLink } from 'react-router-dom';
import {
  DeleteOutlined, FolderOpenOutlined, EditOutlined, DownOutlined,
} from '@ant-design/icons';
import moment from 'moment';
import PropTypes from 'prop-types';
import cardIcon from '../../../../assets/images/card_icon.png';
import { StyledAvatarWrapper, StyledDropDownWrapper } from './styled';
import dropDownImg from '../../../../assets/images/dropdownImg.png';

const { Meta } = Card;

export const BookItem = (props) => {
  const {
    id, title, description, author, date, showModal,
  } = props;
  return (
    <Card
      className="margin30px boxShadow"
      style={{
        width: 350,
        minHeight: 200,
      }}
    >
      <StyledDropDownWrapper
        style={{
          position: 'absolute',
          right: 5,
          top: 5,
        }}
      >
        <Dropdown
          overlay={(
            <Menu>
              <Menu.Item
                key="1"
                icon={<FolderOpenOutlined />}
              >
                <NavLink to={`/books/${id}`}>
                  Open
                </NavLink>
              </Menu.Item>
              <Menu.Item
                key="2"
                onClick={() => { showModal('edit', id); }}
                icon={<EditOutlined />}
              >
                Edit
              </Menu.Item>
              <Menu.Item
                key="3"
                onClick={() => showModal('delete', id)}
                icon={<DeleteOutlined />}
              >
                Delete
              </Menu.Item>
            </Menu>
          )}
          trigger={['click']}
        >
          <div
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
            role="button"
            tabIndex={0}
          >
            <img src={dropDownImg} width="15" alt="dropdown" />
            <DownOutlined />
          </div>
        </Dropdown>
      </StyledDropDownWrapper>
      <Meta
        avatar={(
          <StyledAvatarWrapper>
            <Avatar src={cardIcon} />
          </StyledAvatarWrapper>
        )}
        title={title}
        description={description}
        style={{
          minHeight: 140,
        }}
      />
      <div>{author}</div>
      <div>{moment(date).format('ll')}</div>
      <NavLink to={`/books/${id}`}>
        <Button type="default">Details</Button>
      </NavLink>
    </Card>
  );
};

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default BookItem;
