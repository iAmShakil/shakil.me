import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Nav-Right.css';

class NavRight extends Component {

    constructor(props){
        super(props);
        this.navOpenHandler = this.navOpenHandler.bind(this);
        this.navCloseHandler = this.navCloseHandler.bind(this);        
        this.state = {
            navWidth : {
                width: '0px',
            },
            navState : 0,
        }
    }

    navOpenHandler(){
        this.setState({
            navRightStyle: {
                right: '0px',
            },
            navState: 1,
        });
    }

    navCloseHandler(){

        this.setState({
            navRightStyle: {
                right: '-300px',
            },
            navState: 0,
        });
    }

    render () {
        return (
        <div className="Nav-Float-Right">
        <div className="Nav-Right">
            <ul className="Nav-List">
            <li><NavLink exact to="/">Home</NavLink></li>            
            <li><a href="https://medium.com/@shakil" target="_blank" rel="nofollow">Blog</a></li>
            <li><NavLink to="/reading">Reading</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
        <div className="Nav-Right-Mobile" style= { this.state.navRightStyle } >
        <div className="Nav-Close-Icon" onClick={this.navCloseHandler} >X</div>
            <ul className="Nav-List" onClick={this.navCloseHandler}>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><a href="https://medium.com/@shakil" target="_blank" rel="nofollow">Blog</a></li>            
            <li><NavLink to="/reading">Reading</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
        <div className="Mobile-Nav-Icon" onClick={this.navOpenHandler} >
            <span></span>
            <span></span>
            <span></span>
        </div>
        </div>
        );
    }
}

export default NavRight;