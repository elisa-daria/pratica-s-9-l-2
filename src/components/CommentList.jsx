import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const CommentList = ({ reviews }) => {
  return (
    <ListGroup>
      {reviews.map((review) => {
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
};

export default CommentList;
