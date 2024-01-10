// HorizontalTabs.js
import React from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ReusableFormInput from "../form/ReusableFormInput";
import "./tabs.css";

const HorizontalTabs = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNext = (data) => {
    // Add your logic for handling the next step
    console.log("Data saved:", data);

    // Redirect to SLIK Upload page
    navigate("/slik-upload"); // Adjust the route as per your application
  };

  return (
    <Container>
      <Row>
        <Col>
          {" "}
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3 custom-tabs"
          >
            <Tab eventKey="home" title="Penyaringan Awal" className="bg-remove">
              <div>
                <ReusableFormInput
                  label1="No Aplikasi"
                  label2="Penyaringan Awal"
                  title="Penyaringan Awal"
                  label="Field 1"
                  type="text"
                  name="field1"
                  onNext={handleNext} // Pass the custom handleNext function
                  showButton={true} // Or false based on your logic
                />
              </div>
            </Tab>
            <Tab eventKey="profile" title="Slik Upload" className="bg-remove">
              <ReusableFormInput
                label="Field 1"
                type="text"
                name="field1"
                onNext={handleNext} // Pass the custom handleNext function
                showButton={true} // Or false based on your logic
              />
            </Tab>
            <Tab eventKey="longer-tab" title="Loooonger Tab">
              Tab content for Loooonger Tab
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
              Tab content for Contact
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default HorizontalTabs;
