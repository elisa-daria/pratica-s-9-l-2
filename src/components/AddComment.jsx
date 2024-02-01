import { Component } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AddComment extends Component {
  render() {
    return (
      <Container className="bg-warning rounded-2 p-3 mb-3">
        <Row className="justify-content-center">
          <Col xs={12} sm={6}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Leave a comment about your favourites:</Form.Label>
                <Form.Control placeholder="Enter your comment" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Rate iT!</Form.Label>
                <Form.Select aria-label="rating" required>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Select>
              </Form.Group>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddComment;
