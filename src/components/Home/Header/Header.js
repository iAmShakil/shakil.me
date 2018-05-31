import React, { Component } from 'react';
import Hero from './Hero/Hero';
import './Header.css';

class Header extends Component{
    render(){
        return (
            <div className="Header">
            <Hero />
            </div>
        );
    }
}

export default Header;