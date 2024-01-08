import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LineChart from "../linechart/LineChart";
import PieChart from "../piechart/PieChart";
import HeaderSatu from "../header/header1/HeaderSatu";
import HeaderDua from "../header/header2/HeaderDua";
import CardDisplay from "../card/Card";
import TableCustom from "../table/Table";
import TableSatu from "../table/table1/TableSatu";
import TableDua from "../table/table2/TableDua";

const Home = () => {
  return (
    <div className="p-5">
      {" "}
      <Container fluid>
        <Row>
          <Col>
            <div className="">
              <HeaderSatu />
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          <Col lg={7} xl={8} xxl={9}>
            <HeaderDua />
            <HeaderDua />
          </Col>
          <Col lg={7} xl={4} xxl={3}>
            <div className="">
              <CardDisplay />
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <TableSatu />
            <TableDua />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
