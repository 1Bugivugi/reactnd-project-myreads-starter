import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    // this.forceUpdate()
    // this.setState({ state : this.state })
    BooksAPI.getAll().then((books) => { //TODO: redo and save this into another reusable method
      this.setState({ books }) //P.S. It seems like it doesnt always re-render the page, fix -> ?
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MainPage
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )}
      />
        <Route path='/search' render={() => (
          <SearchPage
            changeShelf={this.changeShelf}
            books={this.state.books}
          />
        )}
        />
      </div>
    )
  }
}

export default BooksApp;
