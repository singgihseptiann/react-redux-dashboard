import React from "react";
import { Col, Container, Row, Form, InputGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { setFormValue } from "../../features/form/formSlice";

const PenyaringanAwak = ({ onNext, formValues, setFormValue }) => {
  const handleNext = () => {
    // Call the callback function to handle the next step
    onNext();
  };
  return (
    <Container>
      <Row className="bg-white custom-card rounded-3 border-0 p-3">
        <h1 className="fw-bold text-dark">Penyaringan Awal</h1>
        <Col xs={6}>
          {" "}
          <Form.Label>No Aplikasi</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={formValues.noAplikasi}
              onChange={(e) => setFormValue({ fieldName: "noAplikasi", value: e.target.value })}
            />

            <Button variant="outline-secondary" id="button-addon2">
              Cari
            </Button>
          </InputGroup>
        </Col>
        <Col xs={6}>
          <Form.Label>Jenis Nasabah</Form.Label>
          <Form.Control type="text" value={formValues.jenisNasabah} onChange={(e) => setFormValue({ fieldName: "jenisNasabah", value: e.target.value })} />
        </Col>
        <Col xs={6}>
          <Form.Label>NIK</Form.Label>
          <Form.Control type="text" value={formValues.nik} onChange={(e) => setFormValue({ fieldName: "nik", value: e.target.value })} />
        </Col>
        <Col xs={6}>
          <Form.Label>Pilih Produk Pembiayaan</Form.Label>
          <Form.Control type="text" value={formValues.produkPembiayaan} onChange={(e) => setFormValue({ fieldName: "produkPembiayaan", value: e.target.value })} />
        </Col>
        <Col xs={6}>
          <Form.Label>Nama Nasabah</Form.Label>
          <Form.Control type="text" value={formValues.namaNasabah} onChange={(e) => setFormValue({ fieldName: "namaNasabah", value: e.target.value })} />
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
          <Form.Control type="text" value={formValues.tanggalPermintaan} onChange={(e) => setFormValue({ fieldName: "tanggalPermintaan", value: e.target.value })} />
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
          <Form.Control type="text" value={formValues.npwp} onChange={(e) => setFormValue({ fieldName: "npwp", value: e.target.value })} />
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

const mapStateToProps = (state) => ({
  formValues: state.form,
});

const mapDispatchToProps = {
  setFormValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(PenyaringanAwak);
