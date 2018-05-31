import React, {Component} from 'react';
import Heading from './Heading';
import ProjectGrid from './Project-Grid/Project-Grid';
import './Projects.css';

class Projects extends Component{
    render(){
        return (
            <div className="Projects">   
            <Heading />
            <ProjectGrid />
            </div>
        )
    }
}

export default Projects;