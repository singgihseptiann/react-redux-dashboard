import React from "react";

const TopBar = () => {
  return (
    <div className="container-fuid">
      <div className="row">
        <div className="bg-dark col-auto col-md-3 min-vh-100">
          <a className="text-decoration-none d-flex align-items-center text-white">
            <i className="bi bi-speedometer fs-4">
              <span className="ms-1 fs-4">Brand</span>
            </i>
          </a>
          <ul className="nav nav-pills flex-column">
            <li className="nav-item text-white fs-4">
              <a
                className="nav-link text-white fs-5"
                href="#"
                aria-current="page"
              >
                <i className="bi bi-speedometer2">
                  <span className="ms-2 fs-5">Dashboard</span>
                </i>
              </a>
            </li>
            <li className="nav-item text-white fs-4">
              <a
                className="nav-link text-white fs-5"
                href="#"
                aria-current="page"
              >
                <i className="bi bi-house">
                  <span className="ms-2 fs-5">Home</span>
                </i>
              </a>
            </li>
            <li className="nav-item text-white fs-4">
              <a
                className="nav-link text-white fs-5"
                href="#"
                aria-current="page"
              >
                <i className="bi bi-table">
                  <span className="ms-2 fs-5">Orders</span>
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
