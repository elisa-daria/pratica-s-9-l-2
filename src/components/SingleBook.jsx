import { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;
    return (
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card
          onClick={() => this.setState({ selected: !selected })}
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
            {selected && <CommentArea />}
            <Card.Text>
              <i className="bi bi-currency-euro"></i> {book.price}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
