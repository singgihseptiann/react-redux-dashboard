import React from "react";
import HorizontalTabs from "../../components/tabs/Tabs";
import { Col, Container, Row } from "react-bootstrap";
import DetailFormAo from "../../components/form/DetailFormAo";
import ReusableFormInput from "../../components/form/ReusableFormInput";

const TabsPages = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="mb-4">
          <DetailFormAo />
        </Col>
      </Row>{" "}
      <Row>
        <Col>
          {" "}
          <HorizontalTabs />
        </Col>
      </Row>
    </Container>
  );
};

export default TabsPages;
