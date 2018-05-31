import React, {Component} from 'react';
import ArticleLink from './ArticleLink';

class ArticleLoop extends Component{
    render(){
        return (
            <div>
                <ul>
                    <li><a href="/a">How fast is the web changing.</a><span className="Loop-Date">10 FEB 2018</span></li>
                    <li><a href="/a">Use WordPress as the back-end of a react app.</a><span className="Loop-Date">10 FEB 2018</span></li>
                    <li><a href="/a">Does WebAssembly pose any threat to JavaScript.</a><span className="Loop-Date">10 FEB 2018</span></li>                                   
                </ul>
            </div>
        )
    }
}
export default ArticleLoop;