import React, {Component} from 'react';
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';
import './Footer.css';

class Footer extends Component{
    render(){
        return (
            <footer className="clearfix">
                <FooterLeft />
                <FooterRight />
            </footer>
        )
    }
}

export default Footer;