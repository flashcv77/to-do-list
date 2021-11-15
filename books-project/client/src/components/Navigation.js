import React from 'react'
import { Menu } from 'antd';
import { HomeOutlined, ReadOutlined, BarChartOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import booksLogo from '../assets/images/logo11.png'
import { StyledLogoBlock } from "./styled"

class Navigation extends React.Component {
    // state = {
    //     current: 'home',
    // };

    // handleClick = event => {

    //     // console.log('click ', event);
    //     this.setState({ current: event.key });
    // };

    render() {
        // const { current } = this.state;
        return (
            <div className="flexDisplayFlex" >
                <NavLink
                    // key="home"
                    exact to="/" >
                    <StyledLogoBlock>
                        <img src={booksLogo} alt={'Books'} height={52} />
                        <span className="paddingLeft10px">Books Library</span>
                    </StyledLogoBlock>
                </NavLink>

                <Menu
                    mode="horizontal"
                    selectable={false}
                    theme="dark"
                    onClick={this.handleClick}
                    // selectedKeys={[current]}
                    style={{ marginLeft: "auto" }}
                >
                    <NavLink exact to="/" activeClassName="activeNavLink">
                        <Menu.Item
                            // key="home"
                            icon={<HomeOutlined />}>
                            Home
                        </Menu.Item>
                    </NavLink>

                    <NavLink to="/books" activeClassName="activeNavLink">
                        <Menu.Item
                            // key="books"
                            icon={<ReadOutlined />}>
                            Books
                        </Menu.Item>
                    </NavLink>

                    <NavLink to="/statistic" activeClassName="activeNavLink">
                        <Menu.Item
                            // key="statistic"
                            icon={<BarChartOutlined />}>
                            Statistic
                        </Menu.Item>
                    </NavLink>
                </Menu>
            </div>
        )
    }
}

export default Navigation;
