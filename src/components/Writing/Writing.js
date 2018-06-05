import React, { Component } from 'react';
import FullWriting from '../Home/Writing/Writing';
import './Writing.css';

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