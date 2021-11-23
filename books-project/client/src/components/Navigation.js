import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, ReadOutlined, BarChartOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import booksLogo from '../assets/images/logo11.png';
import { StyledLogoBlock } from './styled';

class Navigation extends React.Component {
  render() {
    return (
      <div className="flexDisplayFlex">
        {/* <NavLink
          key="homelogo"
          exact
          to="/"
        > */}
        <StyledLogoBlock>
          <img src={booksLogo} alt="Books" height={52} />
          <span className="paddingLeft10px">Books Library</span>
        </StyledLogoBlock>
        {/* </NavLink> */}

        <Menu
          mode="horizontal"
          // selectable={false}
          selectable
          theme="dark"
          onClick={this.handleClick}
          className="flexJustifyEnd flexFlex1"
          defaultSelectedKeys={['1']}
        >

          <Menu.Item
            key="1"
            icon={<HomeOutlined />}
          >
            <NavLink
              key="home"
              exact
              to="/"
            // activeClassName="activeNavLink"
            >
              Home
            </NavLink>
          </Menu.Item>

          <Menu.Item
            key="2"
            icon={<ReadOutlined />}
          >
            <NavLink
              key="books"
              to="/books"
            // activeClassName="activeNavLink"
            >
              Books
            </NavLink>
          </Menu.Item>

          <Menu.Item
            key="3"
            icon={<BarChartOutlined />}
          >
            <NavLink
              key="statistic"
              to="/statistic"
            // activeClassName="activeNavLink"
            >
              Statistic
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Navigation;
