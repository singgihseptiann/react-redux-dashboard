import React from "react";
import { Col, Container, Row, Form } from "react-bootstrap";

const DetailFormAo = () => {
  return (
    <Container>
      <Row className="bg-white custom-card rounded-3 border-0 p-3">
        <h1 className="fw-bold text-dark">Detail Ao</h1>
        <Col xs={6}>
          <Form.Label>Jenis Nasabah</Form.Label>
          <Form.Control type="text" />
        </Col>
        <Col xs={6}>
          <Form.Label>NIK</Form.Label>
          <Form.Control type="text" placeholder="NIK" />
        </Col>
        <Col xs={6}>
          <Form.Label>Pilih Produk Pembiayaan</Form.Label>
          <Form.Control type="text" placeholder="Pilih Produk Pembiayaan" />
        </Col>
        <Col xs={6}>
          <Form.Label>Nama Nasabah</Form.Label>
          <Form.Control type="text" placeholder="Nama Nasabah" />
        </Col>
      </Row>
    </Container>
  );
};

export default DetailFormAo;
