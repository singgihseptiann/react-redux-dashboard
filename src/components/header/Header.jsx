import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <div className="p-5">
      {" "}
      <Container>
        <Row className="mt-5 rounded-3 bg-white text-dark p-2 shadow-sm">
          <Col className="ms-3 fs-5">
            <span>loremmmmmmmmm</span>
          </Col>
          <Col className="d-flex align-items-center justify-content-end me-3 fs-5">
            <i className="bi bi-person me-1"></i>
            <span>Singgih Septian Nugraha</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
