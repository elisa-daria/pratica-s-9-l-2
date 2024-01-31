import Alert from "react-bootstrap/Alert";

const Welcome = () => {
  return (
    <Alert
      className="text-center fw-medium fst-italic fs-2 border-4 border-warning-subtle rounded-0"
      variant="warning"
    >
      EPIBOOKS: your favourite HORROR library!
    </Alert>
  );
};
export default Welcome;
