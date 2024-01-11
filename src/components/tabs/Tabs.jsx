// HorizontalTabs.js
import React, { useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FormPenyaringanAwak from "../form/FormPenyaringanAwak";
import FormSlikUpload from "../form/FormSlikUpload";
import "./tabs.css";

const HorizontalTabs = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");

  const handleNext = () => {
    // Add your logic for handling the next step
    // For example, check if certain conditions are met
    const conditionsMet = true; // Replace with your actual conditions

    if (conditionsMet) {
      // Navigate to the "Slik Upload" tab
      setActiveTab("slikupload");
    } else {
      // Handle the case where conditions are not met (e.g., show an error message)
      console.error("Conditions not met. Cannot proceed to the next step.");
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Tabs activeKey={activeTab} onSelect={(key) => setActiveTab(key)} id="uncontrolled-tab-example" className="mb-3 custom-tabs">
            <Tab eventKey="home" title="Penyaringan Awal" className="bg-remove">
              <FormPenyaringanAwak onNext={handleNext} activeTab={activeTab} />
            </Tab>
            <Tab eventKey="slikupload" title="Slik Upload" className="bg-remove">
              <FormSlikUpload />
            </Tab>
            {/* ... other tabs ... */}
            {/* Additional Tabs */}
            <Tab eventKey="tab1" title="Tab 1">
              Tab 1 content
            </Tab>
            <Tab eventKey="tab2" title="Tab 2">
              Tab 2 content
            </Tab>
            <Tab eventKey="tab3" title="Tab 3">
              Tab 3 content
            </Tab>
            <Tab eventKey="tab4" title="Tab 4">
              Tab 4 content
            </Tab>
            <Tab eventKey="tab5" title="Tab 5">
              Tab 5 content
            </Tab>
            <Tab eventKey="tab6" title="Tab 6">
              Tab 6 content
            </Tab>
            <Tab eventKey="tab7" title="Tab 7">
              Tab 7 content
            </Tab>
            <Tab eventKey="tab8" title="Tab 8">
              Tab 8 content
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default HorizontalTabs;
