import React from 'react';

class Book extends React.Component{  
  
  shelfMap = {
    currentlyReading: 'Currently Reading',
    wantToRead: 'Want to Read',
    read: 'Read'
  }

  moveShelves = (event) => {
    this.props.updateShelf(this.props.book, event.target.options[event.target.options.selectedIndex].value);
  }

  displayShelf = (shelf) =>{
    return(
      <span>
        <strong>Shelf: </strong>{this.shelfMap[shelf]} 
      </span>
    )
  }

  render(){
    const { book } = this.props;
    
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" 
                style={{ 
                  backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : require("../images/no_image_available.svg")}`,
                  width: 128, 
                  height: 193, 
                }}>
              </div>
            <div className="book-shelf-changer">
              <select 
                value={book.shelf && book.shelf}
                onChange = {this.moveShelves}>

                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title && book.title}</div>
          <div className="book-authors">{book.authors && book.authors.map( author => `${author} `)}</div>
          <div className="current-shelf">{book.shelf && this.displayShelf(book.shelf)}</div>
        </div>
      </li>
    )
  }
}

export default Book;