import { Container, Row, Col } from "react-bootstrap";
import dflogo from "../dflogo.png";

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="mt-5">
          <Col className="bg-secondary text-center py-4">
            Copyright &copy; {new Date().getFullYear()} - All Rights Reserved -
            Made with ❤️ by
            <a
              href="https://github.com/Dea314"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "orange",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              Dea314
            </a>
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
