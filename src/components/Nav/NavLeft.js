import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLeft = (props) => {
    return (
        <div className="Nav-Left">
        <div className="Logo-Holder"><NavLink exact to="/"> <span className="Logo-Dot"></span> <span className="Logo-Text">Shakil Ahmed</span> </NavLink></div>
        </div>
    )
}

export default NavLeft;