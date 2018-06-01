import React, { Component } from 'react';
import BookLoop from './Books/BooksLoop';
import './Reading.css';

class Reading extends Component {
    render () {
        return (
            <div className="Reading-Wrapper">
                <div className="Reading-Heading">A list of
                    books I have read in past few years, sorted in chronological order.
                </div>
                <BookLoop />
            </div>
        )
    }
}

export default Reading;