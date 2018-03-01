import React from 'react'
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI'

import SearchBooks from './components/SearchBooks';
import ListBooks from './components/ListBooks';

import './App.css'


class BooksApp extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="app">
        <Route path='/search' component={SearchBooks} />
        <Route exact path='/' component={ListBooks} />
      </div>
    )
  }
}
export default BooksApp