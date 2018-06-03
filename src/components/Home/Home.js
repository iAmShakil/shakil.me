import React, {Component} from 'react';
import Header from './Header/Header';
import Projects from './projects/Projects';
import Writings from './Writings/Writings';

class Home extends Component{
    render(){
        return(
            <div>
                <Header />
                {/* <Projects /> */}
                <Writings/>
            </div>
        )
    }
}

export default Home;