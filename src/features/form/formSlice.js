import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    noAplikasi: "",
    jenisNasabah: "",
    nik: "",
    produkPembiayaan: "",
    namaNasabah: "",
    tanggalPermintaan: "",
    npwp: "",
  },
  reducers: {
    setFormValue: (state, action) => {
      const { fieldName, value } = action.payload;
      state[fieldName] = value;
    },
  },
});

export const { setFormValue } = formSlice.actions;
export default formSlice.reducer;
