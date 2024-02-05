import { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  render() {
    const { book, selected, changeSelected } = this.props;

    return (
      <>
        <Col xs={6} sm={3} md={2}>
          <Card
            onClick={() => changeSelected(book.asin)}
            className={
              selected
                ? "border-4 border-danger text-center h-100"
                : "text-center h-100"
            }
          >
            <Card.Img
              variant="top"
              src={book.img}
              alt={"book-cover-" + book.title}
            />
            <Card.Body className="flex-grow-1 d-flex flex-column justify-content-evenly">
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>
                <i className="bi bi-currency-euro"></i> {book.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default SingleBook;
