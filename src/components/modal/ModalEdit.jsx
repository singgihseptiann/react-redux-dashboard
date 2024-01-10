import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalEdit = ({ show, onCancel, onConfirm, headers }) => {
  const [editedData, setEditedData] = useState(new Array(headers.length).fill("")); // Inisialisasi state dengan array kosong sesuai jumlah headers

  const handleChange = (e, index) => {
    const updatedData = [...editedData];
    updatedData[index] = e.target.value;
    setEditedData(updatedData);
  };

  const handleConfirm = () => {
    onConfirm(editedData);
    setEditedData(new Array(headers.length).fill("")); // Reset state setelah konfirmasi
  };

  return (
    <Modal show={show} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {headers.map((header, index) => (
            <Form.Group key={index} className="mb-3">
              <Form.Label>{header}</Form.Label>
              <Form.Control type="text" value={editedData[index]} onChange={(e) => handleChange(e, index)} />
            </Form.Group>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEdit;
