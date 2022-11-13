import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddedToCartMessage = ({ showCartMessage, setShowCartMessage }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Alert
      show={showCartMessage}
      variant="success"
      onClose={() => setShowCartMessage(false)}
      dismissible
    >
      <Alert.Heading>The product is in your cart!</Alert.Heading>
      <p>
        <Button variant="outline-primary" onClick={goBack}>
          Go back
        </Button>{" "}
        <Link to="/cart">
          <Button variant="outline-success">To cart</Button>
        </Link>
      </p>
    </Alert>
  );
};

export default AddedToCartMessage;
