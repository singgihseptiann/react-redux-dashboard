import React, { useState } from "react";
import SideBar from "./components/sidebar/SideBar";
import Navigation from "./components/navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orders from "./components/orders/Orders";

import TabsPages from "./pages/tabspages/TabsPages";
import HomePages from "./pages/homepages/HomePages";

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
                  <HomePages />
                </>
              }
            ></Route>
            <Route
              path="/users"
              element={
                <>
                  <TabsPages />
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
