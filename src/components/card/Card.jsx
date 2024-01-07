import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./card.css";

const CardDisplay = () => {
  const dataDisplay = [
    {
      title: "UMKM Loans",
      iconClass: "bi-wallet",
      bgIcon: "rgba(0, 128, 0, 0.3)", // Lighter shade of green
      iconColor: "green",
      money: "Rp. 123.456.789",
      statistics: "+72.80%",
    },
    {
      title: "KPR Loans",
      iconClass: "bi-wallet",
      bgIcon: "rgba(255, 165, 0, 0.3)", // Lighter shade of orange
      iconColor: "orange",
      money: "Rp. 987.654.321",
      statistics: "-15.25%",
    },
    {
      title: "Loan Approved",
      iconClass: "bi-box",
      bgIcon: "rgba(0, 128, 0, 0.3)", // Lighter shade of green
      iconColor: "green",
      money: "Rp. 567.890.123",
      statistics: "+10.50%",
    },
    {
      title: "Loan Rejected",
      iconClass: "bi-bar-chart",
      bgIcon: "rgba(0, 0, 255, 0.3)", // Lighter shade of blue
      iconColor: "blue",
      money: "Rp. 456.789.012",
      statistics: "+25.60%",
    },
  ];

  return (
    <div className="">
      <Container>
        <Row className="d-flex flex-wrap ">
          {dataDisplay.map((data, index) => (
            <Col key={index} lg={6} className="mt-5 ">
              <Card className="custom-card border-0 rounded-3 no-margin-padding">
                <Card.Body>
                  <div
                    className="icon-container"
                    style={{
                      backgroundColor: data.bgIcon,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "50px", // Adjust the height as needed
                      width: "50px", // Adjust the width as needed
                      borderRadius: "10%", // To make it circular
                    }}
                  >
                    <i
                      className={`bi ${data.iconClass} fs-2 `}
                      style={{ color: data.iconColor }}
                    ></i>
                  </div>
                  <p>{data.title}</p>
                  <Card.Text>{data.money}</Card.Text>
                  <Card.Text style={{ color: data.iconColor }}>
                    {data.statistics}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CardDisplay;
