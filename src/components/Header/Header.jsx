import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <header className='header'>
            <div className='logo'>Online Work Board</div>
            <nav className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__item'><NavLink to="/">Главная</NavLink></li>
                <li className='navbar__item'><NavLink to="/about">О проекте</NavLink></li>
            </ul>
            </nav>
        </header>
    );
}

export default Header;