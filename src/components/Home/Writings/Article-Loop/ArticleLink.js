import React, {Component} from 'react';

const ArticleLink = (props) => {
    return (
        <div>
            {props.name ? props.name : 'something'}
        </div>
    )
}

export default ArticleLink;