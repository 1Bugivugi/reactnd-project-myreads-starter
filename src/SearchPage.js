import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import Book from './Book';
import { Link } from 'react-router-dom'

class SearchPage extends Component {

  state = {
    query: '',
    searchedBooks: []
  };

  getSearchedBooks = (query) => {
    if (query){
      BooksAPI.search(query).then((searchedBooks) => {
        if (searchedBooks.error){
          this.setState({ searchedBooks: [] })
        } else {
          this.setState({ searchedBooks }) // its actually ({searchedBooks: searchedBooks}) - they are the same, so we have what we have
        }
      })
    } else {
      this.setState({ searchedBooks: [] })
    }
  }

  updateQuery = (query) => {
    this.setState({ query }) //we dont use .trim() as the user should be able to perform search with multiple-wording
    this.getSearchedBooks(query)
  };

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search"
                to='/'
          >Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.searchedBooks.map(searchedBook => {
                let shelf='none';

                this.props.books.map(book => (
                  book.id === searchedBook.id ? shelf = book.shelf : ''
                ))

                return (
                  <li key={searchedBook.id}>
                    <Book
                      book={searchedBook}
                      changeShelf={this.props.changeShelf}
                      currentShelf={shelf}
                    />
                  </li>
                )
              })
            }
          </ol>
        </div>
      </div>
    )
  }

}

export default SearchPage;
