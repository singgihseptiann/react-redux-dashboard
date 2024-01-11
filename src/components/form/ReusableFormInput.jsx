// ReusableFormInput.js
import React from "react";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";

const ReusableFormInput = ({ label, label1, type, name, value, onChange, onNext, showButton, title }) => {
  const handleNextClick = () => {
    onNext({ [name]: value });
  };

  return (
    <Container>
      <div>
        <Row className="custom-card bg-white rounded border-0 mb-5">
          <h1 className="text-dark fw-bold">{title}</h1>
          <Col xs={6}>
            {label1 && <Form.Label>{label1}</Form.Label>}
            <InputGroup className="mb-3">
              <Form.Control placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />

              <Button variant="outline-secondary" id="button-addon2">
                Button
              </Button>
            </InputGroup>
          </Col>

          <Col xs={6}>
            <Form.Group controlId={`form${name}`} className="">
              <div className="d-flex flex-column">
                <Form.Label>{label}</Form.Label>
                <Form.Control type={type} name={name} value={value} onChange={onChange} />
              </div>
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group controlId={`form${name}_2`}>
              <div className="d-flex flex-column">
                <Form.Label>{label}</Form.Label>
                <Form.Control type={type} name={name + "_2"} value={value} onChange={onChange} />
              </div>
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group controlId={`form${name}_2`}>
              <div className="d-flex flex-column">
                <Form.Label>{label}</Form.Label>
                <Form.Control type={type} name={name + "_2"} value={value} onChange={onChange} />
              </div>
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group controlId={`form${name}_2`}>
              <div className="d-flex flex-column">
                <Form.Label>{label}</Form.Label>
                <Form.Control type={type} name={name + "_2"} value={value} onChange={onChange} />
              </div>
            </Form.Group>
          </Col>
        </Row>
        {showButton && (
          <div className="d-flex justify-content-end p-3">
            {" "}
            <Button variant="primary" onClick={handleNextClick}>
              Lanjutkan
            </Button>{" "}
          </div>
        )}
      </div>
    </Container>
  );
};

export default ReusableFormInput;
