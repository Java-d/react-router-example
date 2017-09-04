import React, { Component } from 'react'
import NavLink from '../../components/NavLink'

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <ul className='nav nav-pills'>\
                    <li><NavLink to='/'>Главная</NavLink></li>
                    <li><NavLink to='/admin'>Admin</NavLink></li>
                    <li><NavLink to='/genre'>Genre</NavLink></li>
                    <li><NavLink to='/login'>Войти</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}