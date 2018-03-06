import React from "react";
import { Link } from 'react-router-dom';
import Book from './Book';

class SearchBooks extends React.Component{
  state = {
    query: '',
    searchResults: []
  }

  searchResultsHtml = [];

  handleSearch = (query) => {
    this.setState({ query });
    this.props
      .search(query.trim())
      .then( (books) => {
        if(!books || books.error){
          (this.setState({ searchResults: [] }))
        } else {
            books && this.setState( {searchResults : books.map( (book) => {
              return(
                <Book key      = {book.id}
                      coverUrl = {book.imageLinks.thumbnail} 
                      title    = {book.title}
                      authors  = {book.authors} />
              )
          })});
        } 
      });     
  }

  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" 
                   placeholder="Search by title or author"
                   value={this.state.query}
                   onChange={ (e) => {
                    this.handleSearch(e.target.value);
                    }} />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.searchResults}
          </ol>
        </div>
      </div>

    );
  }

}

export default SearchBooks;