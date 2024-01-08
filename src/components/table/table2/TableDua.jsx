// TableDua.jsx
import React from "react";
import TableCustom from "../Table";

const TableDua = () => {
  const tableHeaders = [
    "No",
    "AO",
    "Tugas",
    "Status",
    "Catatan",
    "Dibuat Pada",
  ];

  const tableData = [
    ["1", "AO1", "Penyaringan Awal", "Selesai", "-", "2022-01-01"],
    [
      "2",
      "AO2",
      "Slik Upload",
      "Belum Dikerjakan",
      "Segera Diselesaikan",
      "2022-01-02",
    ],
    ["3", "AO3", "Slik Review", "Sedang Dikerjakan", "-", "2022-01-03"],
    [
      "4",
      "AO4",
      "Document Entry",
      "Sedang Dikerjakan",
      "Pastikan Dokumen Lengkap",
      "2022-01-04",
    ],
  ];

  const handleUbahClick = (rowIndex) => {
    // Tambahkan logika untuk menangani aksi "Ubah" sesuai kebutuhan
    console.log("Ubah", rowIndex);
  };

  const handleDeleteClick = (rowIndex) => {
    // Tambahkan logika untuk menampilkan modal konfirmasi delete sesuai kebutuhan
    // Misalnya, dengan menggunakan state atau context
    console.log("Hapus", rowIndex);
  };

  const handleConfirmDelete = () => {
    // Tambahkan logika untuk mengonfirmasi dan menghapus data sesuai kebutuhan
    // Misalnya, dengan menggunakan state atau context
    console.log("Konfirmasi Hapus");
  };

  return (
    <TableCustom
      headers={tableHeaders}
      showActions={true}
      data={tableData}
      onUbahClick={handleUbahClick}
      onDeleteClick={handleDeleteClick}
      onConfirmDelete={handleConfirmDelete}
    />
  );
};

export default TableDua;
