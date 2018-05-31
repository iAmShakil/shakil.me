import React, {Component} from 'react';
import ArticleLoop from './Article-Loop/ArticleLoop';
import './Writings.css';

class Writings extends Component{
    render(){
        return(
            <div className="Writings">
                <h2 className="Writings-Heading">Writings</h2>
                <ArticleLoop />
            </div>
        )
    }
}

export default Writings;