import React from 'react';
import fb from '../images/social/facebook.svg';
import twitter from '../images/social/twitter.svg';
import github from '../images/social/github.svg';
import linkedin from '../images/social/linkedin.svg';
import mailer from '../images/social/minutemailer.svg';
import wordpress from '../images/social/wordpress.svg';

const FooterRight = () => {
    return (
        <div className="Footer-Right">
            <ul>
                <li><a href="https://github.com/iAmShakil/" target="_blank"> <img src={github} /> </a></li>

                <li><a href="https://www.linkedin.com/in/shakil-ahmed-53305aaa/" target="_blank"> <img src={linkedin} /> </a></li>

                <li><a href="https://jashakil.wordpress.com" target="_blank"> <img src={wordpress} /> </a></li>                

                <li><a href="https://twitter.com/maverickshak" target="_blank"> <img src={twitter} /> </a></li>

                <li><a href="https://facebook.com/imskl" target="_blank"> <img src={fb} /> </a> </li>

                <li><a href="mailto:hi@shakil.me" target="_blank"> <img src={mailer} /> </a></li>
            </ul>
        </div>
    )
}

export default FooterRight;