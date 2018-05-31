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
                <li><a href="/"> <img src={github} /> </a></li>

                <li><a href="/"> <img src={linkedin} /> </a></li>

                <li><a href="/"> <img src={wordpress} /> </a></li>                

                <li><a href="/"> <img src={twitter} /> </a></li>

                <li><a href="/"> <img src={fb} /> </a> </li>

                <li><a href="/"> <img src={mailer} /> </a></li>
            </ul>
        </div>
    )
}

export default FooterRight;