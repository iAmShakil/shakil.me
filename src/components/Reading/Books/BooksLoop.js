import React, { Component } from 'react';
import Book from './Book';
import './Books.css';

class BooksLoop extends Component {
    render () {
        return (
            <div className="grid-x">
                <Book />   
                <Book /> 
                <Book /> 
                <Book />              
            </div>
        )
    }
}

export default BooksLoop;