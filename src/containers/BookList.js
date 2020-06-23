import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList() {
    return(this.props.books.map((book) => {
      return(
        <li
          key={book.title}
          onClick={ () => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      )
    }))
  }

  render() {
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}


// Anything returned from this function will end up as props on the BookList
// container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

// syntax below promotes BookList to container - it needs to know about the
// selectBook method and how it's dispatched. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
