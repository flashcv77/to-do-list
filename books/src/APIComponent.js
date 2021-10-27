import React from "react";
import { getBooks } from "./api/books";

export default class APIComponent extends React.Component {
  state = {
    bookList: [],
    loading: true,
    error: false,
  };

  componentDidMount() {
    getBooks().then((response) => {
      this.setState({ loading: false, bookList: response.data });
    });
  }

  render() {
    return (
      <div>
        <div>
          {!this.state.loading &&
            this.state.bookList.map((book) => <div>{book.title}</div>)}
        </div>
        {this.state.loading && <div>Loading...</div>}
      </div>
    );
  }
}
