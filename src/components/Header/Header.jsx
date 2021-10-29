import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Header.css";
function Header(props) {
  return (
    <div className="header">
      <Row>
        <Col xl={3} lg={3} md={3} className="nav-item">
          <p className="sharp-font">Plot</p>
        </Col>
        <Col xl={3} lg={3} md={3} className="nav-item">
          <p className="sharp-font">Rhinos</p>
        </Col>
        <Col xl={3} lg={3} md={3} className="nav-item">
          <p className="sharp-font">Games</p>
        </Col>
        <Col xl={3} lg={3} md={3} className="nav-item">
          <p className="sharp-font">Gallery</p>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
