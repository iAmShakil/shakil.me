import React, { Component } from 'react';
import BookLoop from './Books/BooksLoop';
import './Reading.css';

class Reading extends Component {
    componentWillMount() {
        document.title = 'Reading - Shakil Ahmed';
      }
    render () {
        return (
            <div className="Reading-Wrapper">
                <div className="Reading-Heading">A list of some of the
                    books I have read and recommend, sorted in chronological order.
                </div>
                <BookLoop />
            </div>
        )
    }
}

export default Reading;