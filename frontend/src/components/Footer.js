import { Container, Row, Col } from "react-bootstrap";
import dflogo from "../dflogo.png";

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="mt-5">
          <Col className="bg-secondary text-center py-4">
            Copyright &copy; {new Date().getFullYear()} - All Rights Reserved -
            Made with ❤️ by Dea314{"  "}
            <span>
              <img
                className="logo"
                src={dflogo}
                alt="Dea314"
                width="45"
                height="45"
              />
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
