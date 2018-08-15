import React, {Component} from 'react';
import Header from './Header/Header';
import Writing from './Writing/Writing';

class Home extends Component{
    componentWillMount() {
        document.title = 'Shakil Ahmed - Web Developer';
      }
    render(){
        return(
            <div>
                <Header />
                {/* <Writing /> */}
            </div>
        )
    }
}

export default Home;