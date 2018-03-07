import React from 'react'
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI'

import SearchBooks from './components/SearchBooks';
import ListBooks from './components/ListBooks';

import './App.css'


class BooksApp extends React.Component {

  state = {
    books: []
  }

  updateBooks = () => {
    BooksAPI.getAll()
      .then( (books) => {
        this.setState({ books })
      })
  }
  
  componentDidMount(){
    this.updateBooks();
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={ () => (
          <SearchBooks 
            search={BooksAPI.search}/>
        )} />
        <Route exact path='/' render={ () => (
          <ListBooks 
            books={this.state.books}
            updateBooks = {this.updateBooks} />
        )} />
      </div>
    )
  }
}
export default BooksApp