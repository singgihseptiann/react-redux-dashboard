import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeaderSatu from "../../components/header/header1/HeaderSatu";
import HeaderDua from "../../components/header/header2/HeaderDua";
import CardDisplay from "../../components/card/Card";
import TableSatu from "../../components/table/table1/TableSatu";
import TableDua from "../../components/table/table2/TableDua";

const HomePages = () => {
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
          <Col xs={12} md={12} lg={7} xl={8} xxl={9}>
            <HeaderDua />
            <HeaderDua />
          </Col>
          <Col xs={12} md={12} lg={5} xl={4} xxl={3}>
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

export default HomePages;
