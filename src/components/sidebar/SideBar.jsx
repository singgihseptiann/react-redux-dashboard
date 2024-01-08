import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { BiHomeCircle, BiUser, BiChart, BiPersonCircle } from "react-icons/bi";
import { Image } from "react-bootstrap";
import Logo from "../../assets/logo/almasoem.png";

const menuItems = [
  {
    path: "/",
    icon: <BiHomeCircle size={25} className="my-auto" />,
    text: "Dashboard",
  },
  {
    path: "/users",
    icon: <BiUser size={25} className="my-auto" />,
    text: "Users",
  },
  {
    path: "/orders",
    icon: <BiChart size={25} className="my-auto" />,
    text: "Orders",
  },
  {
    path: "/reports",
    icon: <BiChart size={25} className="my-auto" />,
    text: "Reports",
  },
];

const SideBar = () => {
  return (
    <div className="sidebar d-flex flex-column bg-white text-danger p-3 vh-100">
      <div className="text-white mb-3">
        {/* <Image src={Logo} style={{ width: "100px" }} /> */}
        <hr className="text-secondary mt-2" />
        <ul className="nav nav-pills flex-column mt-3">
          {menuItems.map((item, index) => (
            <li className="nav-item p-2 mb-4" key={index}>
              <Link to={item.path} className="my-auto text-decoration-none text-color">
                <div className="d-flex gap-2">
                  {item.icon}
                  <span className="fs-4 d-none d-sm-block">{item.text}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <hr className="text-secondary d-none d-sm-block" />
      <div className="p-3">
        <a href="" className="p-1">
          {/* <BiPersonCircle size={25} /> */}
          <span className="fs-4">{/* <strong>Singgih</strong> */}</span>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
