import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import CommentArea from "./CommentArea";

const BookList = ({ books }) => {
  // state = {
  //   searchBar: "",
  //   selectedBook: null,
  // };
  const [searchBar, setSearchBar] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookSelection = (asin) => {
    setSelectedBook(asin);
  };

  // const { books } = this.props;
  // const { searchBar, selectedBook } = this.state;
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
                setSearchBar(e.target.value);
              }}
            />
          </Col>
        </Row>
      </Container>
      <Container className="mt-3">
        <Row className="justify-content-center g-4">
          <Col md={7}>
            <Row className="justify-content-center g-3">
              {books
                .filter((book) =>
                  book.title.toLowerCase().includes(searchBar.toLowerCase())
                )
                .map((book) => {
                  return (
                    <SingleBook
                      book={book}
                      key={book.asin}
                      selected={selectedBook}
                      changeSelected={handleBookSelection}
                    />
                  );
                })}
            </Row>
          </Col>
          <Col md={5}>
            <CommentArea asin={selectedBook} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BookList;
