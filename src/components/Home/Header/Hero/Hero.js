import React, {Component} from 'react';
import './Hero.css';

class Hero extends Component{
    render(){
        return (
            <div className="Hero">
                <div className="Hero-Greet">
                Good Morning,
                </div>
                <div className="Hero-Intro">
                I'm Shakil Ahmed, a fullstack web developer and a UX designer.</div>
            <div className="Hero-Second">
                I'm proficient in <span className="Keyword">WordPress</span>, <span className="Keyword">JavaScript</span>, <span className="Keyword">ReactJs</span>, <span className="Keyword">NodeJs</span>, <span className="Keyword">PHP</span>. I love learning new technologies and usually 
                prefer working on challenging projects. Send me an email.
            </div>
            </div>
        )
    }
}

export default Hero;