import React from 'react';
import fb from '../images/social/facebook.svg';
import twitter from '../images/social/twitter.svg';
import github from '../images/social/github.svg';
import linkedin from '../images/social/linkedin.svg';
import mailer from '../images/social/minutemailer.svg';
import wordpress from '../images/social/wordpress.svg';
import quora from '../images/social/quora.svg';

const FooterRight = () => {
    return (
        <div className="Footer-Right">
            <ul>
                <li><a href="https://github.com/iAmShakil/" target="_blank" rel="noopener noreferrer"> <img src={github} alt="github" /> </a></li>

                <li><a href="https://www.linkedin.com/in/shakil-ahmed-53305aaa/" target="_blank" rel="noopener noreferrer"> <img src={linkedin} alt="linkedin" /> </a></li>

                <li><a href="https://jashakil.wordpress.com" target="_blank" rel="noopener noreferrer"> <img src={wordpress} alt="wordpress" /> </a></li>                

                <li><a href="https://twitter.com/maverickshak" target="_blank" rel="noopener noreferrer"> <img src={twitter} alt="twitter" /> </a></li>

                <li><a href="https://www.quora.com/profile/Shakil-Ahmed-9" target="_blank" rel="noopener noreferrer"> <img src={quora} alt="Quora" /> </a> </li>

                <li><a href="https://facebook.com/imskl" target="_blank" rel="noopener noreferrer"> <img src={fb} alt="facebook" /> </a> </li>

                <li><a href="mailto:hi@shakil.me" target="_blank" rel="noopener noreferrer"> <img src={mailer} alt="email" /> </a></li>
            </ul>
        </div>
    )
}

export default FooterRight;