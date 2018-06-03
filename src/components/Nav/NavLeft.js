import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLeft = (props) => {
    return (
        <div className="Nav-Left">
        <div><NavLink exact to="/">Shakil Ahmed</NavLink></div>
        </div>
    )
}

export default NavLeft;