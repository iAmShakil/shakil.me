import React, { Component } from 'react';
import BrickPhoto from '../../assets/images/photo-bricks.jpg';
import LakePhoto from '../../assets/images/meditating-on-lake.jpg';
import './About.css';
import './AboutResponseive.css';

class About extends Component {
    render () {
        return (
            <div>

            <div className="First-Row">
                <div className="grid-x">
                    <div className="cell large-6 medium-12 Flex-Center-Align"> <div className="First-Photo"><img src={BrickPhoto} alt="Shakil Ahmed Photo" /> </div></div>
                    <div className="cell large-6 medium-12 Flex-Center-Align"> <p className="First-Para">I'm a 
                        self-taught programmer learned my craft utilizing plethora of resources
                        available online. Every new day I'm learning something, 
                        whether it's understanding a complicated algorithm or a clever
                        design pattern for solving a specific problem. Over time, I have learned quite a few programming
                        languages such as C, C++, Go, Rust, JavaScript, PHP, Python. However, it's JavaScript
                        and its ecosystem that I have settled for recently. Nowadays I'm using NodeJs for 
                        almost all of my hobby projects. While I enjoy playing with
                        new techonologies and programming tools, I perfectly understand the importance
                        of maintaining and improving legacy code.
                        </p>
                        </div>   
                    </div>
                </div>
            <div className="Second-Row">
                
                    <div className="grid-x">
                    <div className="cell large-6 medium-12 Flex-Center-Align"><p className="Second-Para">
                        Philosophy is something that attracts me a lot. To me, it has 
                        something to offer absolutely everyone, not only as a means but as its own end. I posses a deep enthusiasm for the intersection between philosophy and programming. While building and learning things,
                        a key principle I adhere to is “Understand, not imitate”.
                         </p></div>
                    <div className="cell large-6 medium-12 Flex-Center-Align"><div className="Second-Photo"><img src={LakePhoto} alt="shakil ahmed photo" /></div></div>
                    </div>
                    </div>
           
            </div>
        )
    }
}

export default About;