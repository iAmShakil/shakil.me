import React, { Component } from 'react';
import axios from 'axios';
import xmljs from 'xml-js';
import Book from './Book';
import './Books.css';
import LoaderAnimation from '../../Utils/Loader';

class BooksLoop extends Component {

    constructor(props){
        super(props);
        this.state = {
            books : []
        }
    }

  componentDidMount(){
    axios.get("https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list?v=2&id=82635036-shakil-ahmed&key=7nfXKb2LSamkuU1M1Nimyg&shelf=read")
    .then(
        (response) => {
            var converted = xmljs.xml2js(response.data,{compact: true, spaces: 4});
            this.setState({
                books: converted.GoodreadsResponse.reviews.review,
            });
            console.log(this.state.books);
        }
    )
    .catch(
        (response) => {
            console.log(response);
        }
    )

 }

  render() {
    const Animation = this.state.books.length < 1 ? ( <LoaderAnimation /> ) : ('');
    return (
      <div className="grid-x">
          {Animation}
          {
              this.state.books.map( (element) => {
                  return <Book key={element.book.link._text} rating={element.rating._text} link={element.book.link._text} imageUrl={element.book.image_url._text} title={element.book.title._text} author={element.book.authors.author.name._text} />
              } )
          }

      </div>
    );
  }
}

export default BooksLoop;