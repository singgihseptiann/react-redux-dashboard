import React, { useEffect } from "react";
import Header from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAsync, selectUsers } from "../../../features/user/userSlice";

const HeaderSatu = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    // Ambil data pengguna jika belum ada di Redux store
    if (users.length === 0) {
      dispatch(fetchUsersAsync());
    }
  }, [dispatch, users]);

  // Ambil nama pengguna dari objek pertama (jika ada)
  const userName = users.length > 0 ? users[0].name : "User";

  return (
    <Header
      //   subtitle="Subtitle Text"
      date="Wed, 11 July 2022, 19:00:00"
      userName={userName}
      userIcon="bi bi-person"
      rowClassName=" rounded-3 bg-white text-dark shadow-lg border border-1 w-full"
    />
  );
};

export default HeaderSatu;
