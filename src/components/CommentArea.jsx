import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const CommentArea = ({ asin }) => {
  // state = {
  //   comments: [],
  // };
  const [comments, setComments] = useState([]);
  const myKey =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNTZjYjE4N2U1YzAwMTgxNGM2YjciLCJpYXQiOjE3MDY3OTI0NzUsImV4cCI6MTcwODAwMjA3NX0.Hrxk_4QSLfOqFfE70sKM0FUN9n2w6Ry5851PhmwdMKU";
  const myURL = "https://striveschool-api.herokuapp.com/api/comments/";

  const fetchingComments = (asin) => {
    fetch(myURL + asin, {
      headers: {
        Authorization: myKey,
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
        setComments(arrComments);
      })
      .catch((err) => {
        alert("ERRORE:" + err);
      });
  };
  // componentDidMount() {
  //   // this.fetchingComments(this.props.asin);
  // // }
  // componentDidUpdate(prevProps) {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.fetchingComments(this.props.asin);
  //   }
  // }
  useEffect(() => fetchingComments(asin), [asin]);

  return (
    <Container className="bg-warning rounded-2 p-3 my-3">
      <Row className="justify-content-center">
        <Col xs={12} xl={6}>
          <CommentList reviews={comments} />
        </Col>
        <Col xs={12} xl={6}>
          <AddComment asin={asin} />
        </Col>
      </Row>
    </Container>
  );
};

export default CommentArea;
