import React from "react";
import { Col, Row } from "react-bootstrap";
import "./MintPage.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import RightBounceIn from "../../animations/RightBounceIn";
import LazyShow from "../../animations/LazyShow";
export default function MintPage() {
  return (
    <div>
      <div className="back-btn">
        <Link to="/">
          <i className="fas fa-arrow-circle-left"></i>
        </Link>
      </div>
      <Row className="mint-row">
        <Col lg={6} md={6} sm={6} xs={12} className="mint-col">
          <h1 className="head">Mint DRNA</h1>
          <div
            className="sharp-font my-3"
            style={{
              padding: "10px 15px",
              borderRadius: "30px",
              border: "1px solid white",
              width: "12vw",
              fontSize: "1vh",
            }}
          >
            CONNECT WALLET
          </div>
          <input type="range" id="mint-slider" />

          <h1 className="head">3</h1>
          <p className="sharp-font">0.08 Eth</p>
        </Col>
        <Col lg={6} md={6} sm={6} xs={12} className="mint-col">
          <RightBounceIn delay={1.5}>
            <img src={logo} className="mint-logo" />
          </RightBounceIn>
        </Col>
      </Row>
    </div>
  );
}
