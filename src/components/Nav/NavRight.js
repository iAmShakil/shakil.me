import React from 'react';
import {NavLink} from 'react-router-dom';
import './Nav-Right.css';

const NavRight = () => {
    return (
        <div className="Nav-Right">
            <ul className="Nav-List">
            <li><NavLink to="/writings">Writings</NavLink></li>
            <li><NavLink to="/reading">Reading</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default NavRight;