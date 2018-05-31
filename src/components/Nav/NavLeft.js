import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLeft = (props) => {
    return (
        <div className="Nav-Left">
        <div><NavLink exact to="/"><img className="logo" src={props.logo} alt="Shakil Ahmed" /></NavLink></div>
        </div>
    )
}

export default NavLeft;