import React, {Component} from 'react';
import Logo from '../images/logo.png';
import NavLeft from './NavLeft';
import NavRight from './NavRight';

class Nav extends Component{
    render(){
        return (
            <div>
            <NavLeft logo={Logo} />
            <NavRight />
            <div className="clearfix"></div>
            </div>
        )
    }
}

export default Nav;