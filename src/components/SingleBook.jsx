import { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class SingleBook extends Component {
  render() {
    const { book, selected, changeSelected } = this.props;

    return (
      <>
        <Col xs={12} sm={6} md={4}>
          <Card
            onClick={() => changeSelected(book.asin)}
            className={
              selected === book.asin
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
