import { Card, Button, Row, Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { LinkContainer } from "react-router-bootstrap";

const ProductForList = ({
  productId,
  name,
  description,
  price,
  images,
  rating,
  reviewsNumber,
}) => {
  return (
    <Card style={{ marginTop: "1.5rem", marginBottom: "3.5rem" }}>
      <Row>
        <Col lg={7} className="m-auto">
          <Card.Img
            className="d-block mx-auto img-fluid "
            style={{ maxWidth: "500px", height: "auto", paddingLeft: ".5rem" }}
            crossOrigin="anonymous"
            variant="top"
            src={images[0] ? images[0].path : ""}
          />
        </Col>
        <Col lg={5}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              {description}
            </Card.Text>
            <Card.Text>
              <Rating readonly size={20} initialValue={rating} /> (
              {reviewsNumber})
            </Card.Text>
            <Card.Text>
              <b style={{ paddingRight: ".7rem" }}>{price} €</b>
              <LinkContainer to={`/product-details/${productId}`}>
                <Button variant="primary">Details</Button>
              </LinkContainer>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductForList;
