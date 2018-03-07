import React from 'react';

import { Link } from 'react-router-dom';
import Book from './Book';
import BookShelf from './BookShelf';

class ListBooks extends React.Component{

  render(){
    const {books} = this.props;
    return(
      <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf title='Currently Reading'>
            {books
              .filter( (book) => book.shelf === "currentlyReading" )
              .map( (book) => (
                <Book key         = {book.id}
                      book        = {book}
                      updateShelf = {this.props.updateShelf}
                />
              ))}
          </BookShelf>
          <BookShelf title='Want to Read'>
            {books
              .filter( (book) => book.shelf === "wantToRead" )
              .map( (book) => (
                <Book key         = {book.id}
                      book        = {book}
                      updateShelf = {this.props.updateShelf}
                />
              ))}
          </BookShelf>
          <BookShelf title='Read'>
            {books
              .filter( (book) => book.shelf === "read" )
              .map( (book) => (
                <Book key         = {book.id}
                      book        = {book}
                      updateShelf = {this.props.updateShelf}           
                />
              ))}
          </BookShelf>
          
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
    )
  }
}

export default ListBooks;
