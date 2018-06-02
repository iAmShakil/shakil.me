import React from 'react';

const Book = (props) => {
    return (
        <div className="Book cell medium-3">
            <div className="Book-Wrapper">
            <a href={props.link} target="_blank">
            <img src={props.imageUrl} alt={props.title}/>
            </a>
            <div className="Caption">
                <h6>{props.title}</h6>
                <div className="writer">{props.author}</div>
                <div className={`rating-static rating-${props.rating}`}></div>
            </div>
            </div>
        </div>
    );
}

export default Book;