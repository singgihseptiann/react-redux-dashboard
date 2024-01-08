import React from "react";
import TableCustom from "../Table";

const TableSatu = () => {
  const tableHeaders = [
    "No.Aplikasi",
    "AO",
    "Jenis Nasabah",
    "Plafon",
    "Status Aplikasi",
    "Kelengkapan Dokumen",
    "Dibuat Pada",
  ];

  const tableData = [
    [
      "1",
      "AO1",
      "Lembaga",
      "Rp.2.000.000.000",
      "Disetujui",
      "Lengkap",
      "2022-01-01",
    ],
    [
      "2",
      "AO2",
      "Perorangan",
      "33.004.797.45",
      "Unggah Dokumen",
      "Belum Lengkap",
      "2022-01-02",
    ],

    [
      "3",
      "AO3",
      "Lembaga",
      "33.004.797.45",
      "Disetujui",
      "Lengkap",
      "2022-01-03",
    ],
    [
      "4",
      "AO4",
      "Perorangan",
      "33.004.797.45",
      "Dokumen Review",
      "Sedang Direview",
      "2022-01-04",
    ],
  ];

  return (
    <TableCustom
      headers={tableHeaders}
      showActions={false}
      lastColumnContent="Custom Content"
      data={tableData}
    />
  );
};

export default TableSatu;
