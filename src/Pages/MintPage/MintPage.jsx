import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./MintPage.css";
import logo from "../../assets/animated_logo.gif";
import { Link } from "react-router-dom";
import RightBounceIn from "../../animations/RightBounceIn";
import LazyShow from "../../animations/LazyShow";
import { motion } from "framer-motion";
export default function MintPage() {
  const [mintVal, setmintVal] = useState(1);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="back-btn">
        <Link to="/">
          <i className="fas fa-arrow-circle-left"></i>
        </Link>
      </div>
      <Row className="mint-row">
        <Col lg={6} md={6} sm={6} xs={12} className="mint-col mint-col-1">
          <h1 className="head">Mint DRNA</h1>
          <div className="sharp-font my-3 wallet-btn">CONNECT WALLET</div>
          <input
            type="range"
            min={1}
            max={5}
            id="mint-slider"
            value={mintVal}
            onChange={(e) => setmintVal(e.target.value)}
          />

          <h1 className="head">{mintVal}</h1>
          <p className="sharp-font">0.08 Eth</p>
        </Col>
        <Col lg={6} md={6} sm={6} xs={12} className="mint-col mint-col-2">
          {/* <RightBounceIn delay={1.5}> */}
          <img src={logo} className="mint-logo" />
          {/* </RightBounceIn> */}
        </Col>
      </Row>
    </motion.div>
  );
}
