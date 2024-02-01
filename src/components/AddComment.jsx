import { Component } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AddComment extends Component {
  state = {
    review: {
      comment: "",
      rate: "1",
      elementId: this.props.b_id,
    },
  };
  myKey =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNTZjYjE4N2U1YzAwMTgxNGM2YjciLCJpYXQiOjE3MDY3OTI0NzUsImV4cCI6MTcwODAwMjA3NX0.Hrxk_4QSLfOqFfE70sKM0FUN9n2w6Ry5851PhmwdMKU";
  myURL = "https://striveschool-api.herokuapp.com/api/comments/";
  settingAReview = () => {
    fetch(this.myURL, {
      method: "POST",
      headers: {
        Authorization: this.myKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.review),
    })
      .then((response) => {
        if (response.ok) {
          alert("content saved");
        } else {
          throw new Error(response.status);
        }
      })
      .catch((err) => alert("ERROR:" + err));
  };

  render() {
    return (
      <Container className="bg-warning rounded-2 p-3 mb-3">
        <Row className="justify-content-center align-items-center">
          <Col xs={12} sm={10}>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(this.state.review);
                this.settingAReview();
              }}
            >
              <Form.Group className="mb-3">
                <Form.Label>Leave a comment about your favourites:</Form.Label>
                <Form.Control
                  placeholder="Enter your comment"
                  required
                  value={this.state.review.comment}
                  onChange={(e) => {
                    this.setState({
                      review: {
                        ...this.state.review,
                        comment: e.target.value,
                      },
                    });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Rate iT!</Form.Label>
                <Form.Select
                  aria-label="rating"
                  value={this.state.review.rate}
                  onChange={(e) => {
                    this.setState({
                      review: {
                        ...this.state.review,
                        rate: e.target.value,
                      },
                    });
                  }}
                  required
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Select>
              </Form.Group>
              <Button variant="success" type="submit">
                Send Review
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddComment;
