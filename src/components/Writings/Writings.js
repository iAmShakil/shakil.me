import React, { Component } from 'react';
import FullWriting from '../Home/Writings/Writings';
import './Writings.css';

class Writings extends Component {
    componentWillMount() {
        document.title = 'Writings - Shakil Ahmed';
      }
    render () {
        return (
            <div>
              <FullWriting />  
            </div>
        )
    }
}

export default Writings;