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
        <NavLink
          exact
          to="/"
        >
          <StyledLogoBlock>
            <img src={booksLogo} alt="Books" height={52} />
            <span className="paddingLeft10px">Books Library</span>
          </StyledLogoBlock>
        </NavLink>

        <Menu
          mode="horizontal"
          selectable={false}
          theme="dark"
          onClick={this.handleClick}
          className="flexJustifyEnd flexFlex1"
        >
          <NavLink exact to="/" activeClassName="activeNavLink">
            <Menu.Item
              icon={<HomeOutlined />}
            >
              Home
            </Menu.Item>
          </NavLink>

          <NavLink to="/books" activeClassName="activeNavLink">
            <Menu.Item
              icon={<ReadOutlined />}
            >
              Books
            </Menu.Item>
          </NavLink>

          <NavLink to="/statistic" activeClassName="activeNavLink">
            <Menu.Item
              icon={<BarChartOutlined />}
            >
              Statistic
            </Menu.Item>
          </NavLink>
        </Menu>
      </div>
    );
  }
}

export default Navigation;
