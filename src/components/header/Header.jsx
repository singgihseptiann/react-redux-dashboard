import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./header.css";

const Header = ({
  title,
  subtitle,
  buttonText,
  userName,
  userImage,
  userIcon,
  date,
  rowClassName,
}) => {
  return (
    <div className="">
      <Container fluid>
        <Row className={` ${rowClassName}`}>
          <Col className="ms-3 fs-5">
            {title && <h3 className="text-success">{title}</h3>}
            {date && (
              <div className="py-3">
                <span className="fs-5 text-dark ">{date}</span>
              </div>
            )}
            {subtitle && <p className=" py-2">{subtitle}</p>}
            {buttonText && (
              <div className="mt-3">
                <Button variant="outline-success">{buttonText}</Button>
              </div>
            )}
          </Col>
          <Col className="d-flex flex-column align-items-end me-3 fs-5">
            <div className="d-flex align-items-center fw-bold fs-3 gap-2 py-2">
              {userIcon && <i className={`fw-bold ${userIcon}`}></i>}
              <span className="fw-bold">{userName}</span>
            </div>
            {userImage && (
              <Image
                src={userImage}
                className="no-margin-bottom"
                style={{ width: "200px" }}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
