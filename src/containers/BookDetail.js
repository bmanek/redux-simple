import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return (
        <div>Select a book to get started</div>
      )
    }


    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
      </div>
    )
  }
}

// Below used to be ln 17. Removed b/c it crashed, "cannot read property
// 'pages' of undefined"
// No idea why, conditional render works fine w/ just Title
// <div>Pages: {this.props.books.pages}</div>

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)
