import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchBar: "",
    selectedBook: null,
  };
  handleBookSelection = (asin) => {
    this.setState({
      selectedBook: asin,
    });
  };
  render() {
    const { books } = this.props;
    const { searchBar, selectedBook } = this.state;
    return (
      <>
        <Container className="p-4 bg-success-subtle rounded-4">
          <Row className="justify-content-center">
            <Col>
              <Form.Control
                type="text"
                id="search-book"
                placeholder="Search your title..."
                value={searchBar}
                onChange={(e) => {
                  this.setState({ searchBar: e.target.value });
                }}
              />
            </Col>
          </Row>
        </Container>
        <Container className="mt-3">
          <Row className="justify-content-center align-items-center g-4">
            {books
              .filter((book) =>
                book.title.toLowerCase().includes(searchBar.toLowerCase())
              )
              .map((book) => {
                return (
                  <SingleBook
                    book={book}
                    key={book.asin}
                    selected={selectedBook === book.asin}
                    changeSelected={this.handleBookSelection}
                  />
                );
              })}
            {selectedBook && <CommentArea asin={selectedBook} />}
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
