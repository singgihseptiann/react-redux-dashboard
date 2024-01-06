import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LineChart from "../linechart/LineChart";
import PieChart from "../piechart/PieChart";

const Home = () => {
  return (
    <div className="p-5">
      {" "}
      <Container>
        <Row>
          <Col
            sm={6}
            md={4}
            lg={3}
            className="d-flex justify-content-around align-items-center p-3 bg-light border border-secondary shadow-sm"
          >
            <i className="bi bi-currency-dollar"></i>
            <div>
              <p>sales</p>
              <h2>234</h2>
            </div>
          </Col>
          <Col
            sm={6}
            md={4}
            lg={3}
            className="d-flex justify-content-around align-items-center p-3 bg-white border border-secondary shadow-sm"
          >
            <i className="bi bi-truck"></i>
            <div>
              <p>Delivery</p>
              <h2>234</h2>
            </div>
          </Col>
          <Col
            sm={6}
            md={4}
            lg={3}
            className="d-flex justify-content-around align-items-center p-3 bg-white border border-secondary shadow-sm"
          >
            <i className="bi bi-currency-dollar"></i>
            <div>
              <p>sales</p>
              <h2>234</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="col-12 col-md-8 p-3">
            {" "}
            <LineChart />
          </Col>
          <Col className="col-12 col-md-4 p-3">
            {" "}
            <PieChart />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
