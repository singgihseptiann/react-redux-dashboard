import React from "react";
import { Col, Container, Row, Form, InputGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
const PenyaringanAwak = ({ onNext, activeTab }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNext = () => {
    // Call the callback function to handle the next step
    onNext();
  };
  return (
    <Container>
      <Row className="bg-white custom-card rounded-3 border-0">
        <h1>Penyaringan Awal</h1>
        <Col xs={6}>
          {" "}
          <Form.Label>No Aplikasi</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />

            <Button variant="outline-secondary" id="button-addon2">
              Cari
            </Button>
          </InputGroup>
        </Col>
        <Col xs={6}>
          {" "}
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
        <Col xs={6}>
          <Form.Label>Upload KTP</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control placeholder="Tidak ada file dipilih" aria-label="Recipient's username" aria-describedby="basic-addon2" />

            <Button variant="outline-secondary" id="button-addon2">
              Pilih File
            </Button>
          </InputGroup>
        </Col>
        <Col xs={6}>
          <Form.Label>Tanggal Permintaan</Form.Label>
          <Form.Control type="text" placeholder="Tanggal Permintaan" />
        </Col>
        <Col xs={6}>
          <Form.Label>Upload NPWP</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control placeholder="Tidak ada file dipilih" aria-label="Recipient's username" aria-describedby="basic-addon2" />

            <Button variant="outline-secondary" id="button-addon2">
              Pilih File
            </Button>
          </InputGroup>
        </Col>
        <Col xs={6}>
          <Form.Label>NPWP</Form.Label>
          <Form.Control type="text" placeholder="NPWP" />
        </Col>
        <div className="d-flex justify-content-end p-3">
          <Button variant="primary" onClick={handleNext}>
            Lanjutkan
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default PenyaringanAwak;
