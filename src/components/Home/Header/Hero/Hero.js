import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Hero.css';

class Hero extends Component{
    render(){
        return (
            <div className="Hero">
                <div className="Hero-Greet">
                Hello
                </div>
                <div className="Hero-Intro">
                I'm Shakil Ahmed, a Full-stack web developer and a UX designer.</div>
            <div className="Hero-Second">
                I'm proficient in <span className="Keyword">JavaScript</span>, <span className="Keyword">ReactJs</span>, <span className="Keyword">React Native</span>, <span className="Keyword">NodeJs</span>, <span className="Keyword">WordPress</span>, and <span className="Keyword">PHP</span>. As someone who loves solving problems, I usually prefer working on challenging projects. For anything, <Link to="/contact">send me an email</Link>.
            </div>
            </div>
        )
    }
}

export default Hero;