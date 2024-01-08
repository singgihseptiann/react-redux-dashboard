// TableCustom.jsx
import React, { useState } from "react";
import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const TableCustom = ({
  headers,
  showActions,
  data,
  onUbahClick,
  onDeleteClick,
  onConfirmDelete,
}) => {
  const [deleteConfirm, setDeleteConfirm] = useState({
    show: false,
    rowIndex: null,
  });

  const handleDeleteClick = (rowIndex) => {
    setDeleteConfirm({ show: true, rowIndex });
  };

  const handleConfirmDelete = () => {
    // Lakukan penghapusan data dari array dummy berdasarkan rowIndex
    const updatedData = [...data];
    updatedData.splice(deleteConfirm.rowIndex, 1);
    // TODO: Lakukan pembaruan state atau panggil fungsi untuk menyimpan data
    // Contoh: updateData(updatedData);

    setDeleteConfirm({ show: false, rowIndex: null });
    onConfirmDelete(); // Panggil fungsi konfirmasi hapus dari prop
  };

  const handleCancelDelete = () => {
    setDeleteConfirm({ show: false, rowIndex: null });
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={12} xl={8} xxl={9}>
          <div>
            <Table responsive="lg" bordered rounded className="text-center">
              <thead>
                <tr>
                  {headers &&
                    headers.map((header, index) => (
                      <th style={{ backgroundColor: "#cfd4ed" }} key={index}>
                        {header}
                      </th>
                    ))}
                  {showActions && (
                    <th style={{ backgroundColor: "#cfd4ed" }}>Aksi</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
                      {showActions && (
                        <td>
                          <div className="d-flex justify-content-center gap-1">
                            <button
                              className="text-primary bg-white border-0 fw-bold"
                              onClick={() => onUbahClick(rowIndex)} // Panggil fungsi ubah dari prop
                            >
                              Ubah
                            </button>
                            <button
                              className="text-danger border-0 bg-white fw-bold"
                              onClick={() => handleDeleteClick(rowIndex)}
                            >
                              Hapus
                            </button>
                          </div>
                        </td>
                      )}
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>

      {/* Modal Konfirmasi Hapus */}
      <Modal show={deleteConfirm.show} onHide={handleCancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Konfirmasi Hapus</Modal.Title>
        </Modal.Header>
        <Modal.Body>Apakah Anda yakin ingin menghapus data ini?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Batal
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Hapus
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default TableCustom;
