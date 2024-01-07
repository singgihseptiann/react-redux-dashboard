import React from "react";
import Header from "../Header";
const HeaderDua = () => {
  return (
    <Header
      title="Welcome User"
      subtitle="You have 10 works todo! Check your tickets in your profile. keep up the good work!"
      buttonText="View Tickets"
      userImage={require("../../../assets/header/human_work.png")}
      hasSubtitle={true}
      hasButton={true}
      rowClassName="mt-5 rounded-3 bg-white text-dark p-2 custom-card border-0"
    />
  );
};

export default HeaderDua;
