import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    const { books } = this.props;
    return (
      <Container className="mt-3">
        <Row className="justify-content-center g-4">
          {books.map((book) => {
            return <SingleBook book={book} key={book.asin} />;
          })}
        </Row>
      </Container>
    );
  }
}

export default BookList;
