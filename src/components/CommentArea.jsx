import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Card from "react-bootstrap/Card";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  myKey =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNTZjYjE4N2U1YzAwMTgxNGM2YjciLCJpYXQiOjE3MDY3OTI0NzUsImV4cCI6MTcwODAwMjA3NX0.Hrxk_4QSLfOqFfE70sKM0FUN9n2w6Ry5851PhmwdMKU";
  myURL = "https://striveschool-api.herokuapp.com/api/comments/";
  componentDidMount() {
    fetch(this.myURL, {
      headers: {
        Authorization: this.myKey,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((comments) => {
        console.log("comments", comments);
        this.setState({ comments });
      })
      .catch((err) => {
        alert("ERRORE:" + err);
      });
  }
  render() {
    return (
      <Card.Subtitle className="mb-2 text-muted">
        <ListGroup>
          <ListGroupItem>jòflsjlòjsglòj</ListGroupItem>
        </ListGroup>
      </Card.Subtitle>
    );
  }
}

export default CommentArea;
