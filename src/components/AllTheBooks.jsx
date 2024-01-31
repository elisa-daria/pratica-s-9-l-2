import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import books from "../data/horror.json";

const AllTheBooks = () => {
  return (
    <Container className="mt-3">
      <Row className="justify-content-center g-4">
        {books.map((book) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3} key={book.asin}>
              <Card className="text-center h-100 shadow-lg">
                <Card.Img variant="top" src={book.img} />
                <Card.Body className="flex-grow-1 d-flex flex-column justify-content-evenly">
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    <i class="bi bi-currency-euro"></i> {book.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
