import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

class CommentList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.reviews.map((review) => {
          return (
            <ListGroupItem
              key={review._id}
              className="text-center bg-success-subtle fst-italic fw-light
            "
            >
              📚 Rated: {review.rate} - <q>{review.comment}</q>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  }
}

export default CommentList;
