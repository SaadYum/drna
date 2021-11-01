import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Faqs.css";
function Faqs(props) {
  return (
    <div className="faqs-wrapper">
      <Row>
        <Col md={7} lg={7} sm={7} xs={12} className="faqs"></Col>
        <Col md={5} lg={5} sm={5} xs={12} className="faq-imgs"></Col>
      </Row>
    </div>
  );
}

export default Faqs;
