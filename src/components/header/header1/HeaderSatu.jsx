import React, { useEffect, useState } from "react";
import Header from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAsync, selectUsers } from "../../../features/user/userSlice";

const HeaderSatu = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [waktuString, setWaktuString] = useState("");

  useEffect(() => {
    // Fungsi untuk memperbarui waktu setiap detik
    const updateClock = () => {
      const waktuSekarang = new Date();
      setCurrentTime(waktuSekarang);

      const tanggal = waktuSekarang.getDate();
      const bulan = waktuSekarang.getMonth() + 1;
      const tahun = waktuSekarang.getFullYear();
      const jam = waktuSekarang.getHours();
      const menit = waktuSekarang.getMinutes();
      const detik = waktuSekarang.getSeconds();

      // Format tanggal dan waktu
      const waktuString = `${tahun}-${bulan < 10 ? "0" + bulan : bulan}-${tanggal < 10 ? "0" + tanggal : tanggal} ${jam < 10 ? "0" + jam : jam}:${menit < 10 ? "0" + menit : menit}:${detik < 10 ? "0" + detik : detik}`;
      setWaktuString(waktuString);
    };

    // Mengatur interval untuk memperbarui waktu setiap detik
    const intervalId = setInterval(updateClock, 1000);

    // Membersihkan interval saat komponen di-unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Ambil data pengguna jika belum ada di Redux store
    if (users.length === 0) {
      dispatch(fetchUsersAsync());
    }
  }, [dispatch, users]);

  // Ambil nama pengguna dari objek pertama (jika ada)
  const userName = users.length > 0 ? users[0].name : "User";

  return <Header date={waktuString} userName={userName} userIcon="bi bi-person" rowClassName="rounded-3 bg-white text-dark shadow-lg border border-1 w-full" />;
};

export default HeaderSatu;
