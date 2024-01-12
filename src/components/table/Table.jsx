import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import ModalConfirm from "../modal/ModalConfirm";
import ModalEdit from "../modal/ModalEdit";

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

  const [editModal, setEditModal] = useState({
    show: false,
    rowIndex: null,
  });

  const [editedData, setEditedData] = useState([]);

  const handleDeleteClick = (rowIndex) => {
    setDeleteConfirm({ show: true, rowIndex });
  };

  const handleConfirmDelete = () => {
    const updatedData = [...data];
    updatedData.splice(deleteConfirm.rowIndex, 1);
    setDeleteConfirm({ show: false, rowIndex: null });
    onConfirmDelete(updatedData); // Kirim data yang telah dihapus ke prop onConfirmDelete
  };

  const handleCancelDelete = () => {
    setDeleteConfirm({ show: false, rowIndex: null });
  };

  const handleEditClick = (rowIndex) => {
    setEditedData([...data[rowIndex]]);
    setEditModal({ show: true, rowIndex });
  };

  const handleCancelEdit = () => {
    setEditedData([]);
    setEditModal({ show: false, rowIndex: null });
  };

  const handleConfirmEdit = (newData) => {
    console.log("Aksi ubah dilakukan dengan data baru:", newData);
    handleCancelEdit();
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
                              onClick={() => handleEditClick(rowIndex)}
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

      {/* Gunakan ModalConfirm untuk Hapus */}
      <ModalConfirm
        show={deleteConfirm.show}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />

      {/* Modal untuk Ubah */}
      <ModalEdit
        show={editModal.show}
        onCancel={handleCancelEdit}
        onConfirm={handleConfirmEdit}
        initialData={editedData}
        headers={headers}
      />
    </Container>
  );
};

export default TableCustom;
