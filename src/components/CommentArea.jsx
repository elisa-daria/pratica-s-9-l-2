import { Component } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  myKey =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNTZjYjE4N2U1YzAwMTgxNGM2YjciLCJpYXQiOjE3MDY3OTI0NzUsImV4cCI6MTcwODAwMjA3NX0.Hrxk_4QSLfOqFfE70sKM0FUN9n2w6Ry5851PhmwdMKU";
  myURL = "https://striveschool-api.herokuapp.com/api/comments/";

  fetchingComments = () => {
    fetch(this.myURL + this.props.asin, {
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
      .then((arrComments) => {
        console.log("comments", arrComments);
        this.setState({ comments: arrComments });
      })
      .catch((err) => {
        alert("ERRORE:" + err);
      });
  };
  // componentDidMount() {
  //   // this.fetchingComments(this.props.asin);
  // }
  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchingComments(this.props.asin);
    }
  }
  render() {
    return (
      <Container className="bg-warning rounded-2 p-3 my-3">
        <Row className="justify-content-center">
          <Col xs={12} xl={6}>
            <CommentList reviews={this.state.comments} />
          </Col>
          <Col xs={12} xl={6}>
            <AddComment asin={this.props.asin} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CommentArea;
