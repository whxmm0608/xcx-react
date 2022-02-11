import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

//NavLink可以实现高亮效果
export default class MyNavLink extends Component {
    render () {
        return (
            <NavLink className={({ isActive }) => isActive ? 'active-nav-item nav-item' : 'nav-item'} {...this.props} />
        );
    }
}