import React from "react";
import { Col, Container, Row, Form, Button, InputGroup } from "react-bootstrap";

const SlikUpload = () => {
  return (
    <Container>
      <Row className="bg-white rounded-3 custom-card border-0 ">
        <Col>
          <div className="p-4">
            <h1 className="fw-bold text-dark">Slik Upload</h1>
            <Form.Label>Upload Slik</Form.Label>
            <InputGroup className=" ">
              <Form.Control placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <Button variant="outline-secondary" id="button-addon2">
                Pilih File
              </Button>
            </InputGroup>
            <Form.Label>Bisa PDF, TXT</Form.Label>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SlikUpload;
