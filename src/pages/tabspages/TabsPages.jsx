import React from "react";
import HorizontalTabs from "../../components/tabs/Tabs";
import { Col, Container, Row } from "react-bootstrap";
import ReusableFormInput from "../../components/form/ReusableFormInput";

const TabsPages = () => {
  return (
    <Container>
      <Row>
        <Col>
          {" "}
          <ReusableFormInput
            title="Detail Ao"
            label="Field 1"
            type="text"
            name="field1"
            showButton={true} // Or false based on your logic
          />
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
