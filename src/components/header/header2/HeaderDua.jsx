// HeaderDua.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAsync, selectUsers } from "../../../features/user/userSlice";
import Header from "../Header";

const HeaderDua = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  const user = users[0] || {};

  console.log("Users from Redux Store:", users);
  console.log("Selected User:", user);

  return (
    <Header
      title={`Welcome, ${user.name || "User"}`}
      subtitle="You have 10 works todo! Check your tickets in your profile. Keep up the good work!"
      buttonText="View Tickets"
      userImage={require("../../../assets/header/human_work.png")}
      hasSubtitle={true}
      hasButton={true}
      rowClassName="mt-5 rounded-3 bg-white text-dark p-2 custom-card border-0"
    />
  );
};

export default HeaderDua;
