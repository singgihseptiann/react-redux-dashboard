import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar d-flex justify-content-between flex-column bg-white text-danger ps-3 pe-5 p-3 vh-100">
      <div className="text-white">
        <a href="#" className="p-3 text-white">
          <i className="bi bi-code-slash fs-4 me-4"></i>
          <span className="fs-4">Logo</span>
        </a>
        <hr className="text-secondary mt-2" />
        <ul className="nav nav-pills flex-column mt-3">
          <li className="nav-item p-2">
            <Link to="/" href="" className="p-3 text-decoration-none text-dark">
              <i className="bi bi-speedometer2 me-3 fs-4"></i>
              <span className="fs-4">
                <strong>Dashboard</strong>
              </span>
            </Link>
          </li>
          <li className="nav-item p-2">
            <Link
              to="/users"
              href=""
              className="p-3 text-decoration-none text-dark"
            >
              <i className="bi bi-people me-3 fs-4"></i>
              <span className="fs-4">
                <strong>Users</strong>
              </span>
            </Link>
          </li>
          <li className="nav-item p-2">
            <Link
              to="/orders"
              href=""
              className="p-3 text-decoration-none text-dark"
            >
              <i className="bi bi-speedometer2 me-3 fs-4"></i>
              <span className="fs-4">
                <strong>Orders</strong>
              </span>
            </Link>
          </li>
          <li className="nav-item p-2">
            <span href="" className="p-3">
              <i className="bi bi-speedometer2 me-3 fs-4"></i>
              <span className="fs-4">
                <strong>Reports</strong>
              </span>
            </span>
          </li>
        </ul>
      </div>
      <div>
        <hr className="text-secondary" />
        <div className="nav-item p-3">
          <a href="" className="p-1">
            <i className="bi bi-person-circle me-3 fs-4"></i>
            <span className="fs-4">{/* <strong>Singgih</strong> */}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
