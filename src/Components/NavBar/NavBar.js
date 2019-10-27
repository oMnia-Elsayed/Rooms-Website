import React, { Component } from 'react'
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import './NavBar.scss';
export default class NavBar extends Component {
    render() {
        return (
            <Menu mode="horizontal">
                <Menu.Item>
                    <img src={logo} alt="logo" />
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/">Home</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/rooms">Rooms</NavLink>
                </Menu.Item>
            </Menu>
        );
    }
}
