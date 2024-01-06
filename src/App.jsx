import React, { useState } from "react";
import SideBar from "./components/sidebar/SideBar";
import Navigation from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orders from "./components/orders/Orders";
import Users from "./components/users/Users";
import Header from "./components/header/Header";
import Card from "./components/card/Card";

function App() {
  const [toggle, setToggle] = useState(false);
  const Toggle = () => {
    setToggle(!toggle);
  };
  return (
    <BrowserRouter>
      <div className="d-flex">
        <div className={toggle ? "d-none" : "w-auto"}>
          <SideBar />
        </div>
        <div className="col overflow-auto">
          <Navigation Toggle={Toggle} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {" "}
                  <Header />
                  <Card />
                  <Home />
                </>
              }
            ></Route>
            <Route
              path="/users"
              element={
                <>
                  <Users />
                </>
              }
            ></Route>
            <Route
              path="/Orders"
              element={
                <>
                  <Orders />
                </>
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
