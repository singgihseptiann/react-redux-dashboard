// ModalConfirm.jsx
import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalConfirm = ({ show, onCancel, onConfirm }) => {
  return (
    <Modal show={show} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Konfirmasi Hapus</Modal.Title>
      </Modal.Header>
      <Modal.Body>Apakah Anda yakin ingin menghapus data ini?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Batal
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Hapus
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalConfirm;
