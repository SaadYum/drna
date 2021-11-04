import React, { useLayoutEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./LaunchSchedule.css";
function LaunchSchedule(props) {
  useLayoutEffect(() => {
    let animatedCursor = document.querySelector(".animated-cursor");
    let animatedCursorDiv = document.querySelector(".animated-cursor-div");
    animatedCursorDiv.addEventListener("mousemove", (e) => {
      animatedCursor.style.top = e.pageY + "px";
      animatedCursor.style.left = e.pageX + "px";
    });
    return () => {
      animatedCursorDiv.removeEventListener("mousemove", () => {});
    };
  }, []);
  return (
    <div className="launch-schedule center animated-cursor-div">
      <div className="animated-cursor"></div>
      <Row className="launch-row1">
        <Col lg={2} md={2} sm={2} className="upper-schedule-col">
          <p className="montserrat-font">
            Rhinos on the loose, look out for the 6 super rare Rhinos (could be
            more down the track).
          </p>
          <h4 className="sharp-font">0%</h4>
          <div className="ball" />
          <div className="ball" />
        </Col>
        <Col lg={2} md={2} sm={2} className="upper-schedule-col">
          <div className="ball" />
        </Col>

        <Col lg={2} md={2} sm={2} className="upper-schedule-col">
          <p className="montserrat-font">
            Create your own art, story or videos. The winner will receive one of
            the Super Rare Rhinos.
          </p>
          <h4 className="sharp-font">50%</h4>
          <div className="ball" />
        </Col>
        <Col lg={2} md={2} sm={2} className="upper-schedule-col">
          <div className="ball" />
        </Col>
        <Col lg={2} md={2} sm={2} className="upper-schedule-col">
          <p className="montserrat-font">
            Get ready for the floor price to rise! The DRNA team will now be
            buying back 25 Rhinos from OpenSea.
          </p>
          <h4 className="sharp-font">100%</h4>
          <div className="ball" />
        </Col>
        <Col lg={2} md={2} sm={2} className="upper-schedule-col">
          <div className="ball" />
        </Col>
      </Row>
      <Row className="launch-row2">
        <Col lg={2} md={2} sm={2} className="upper-schedule-col"></Col>
        <Col lg={2} md={2} sm={2} className="upper-schedule-col">
          <h4 className="sharp-font">25%</h4>
          <p className="montserrat-font">
            25 NFT Rhinos will air drop into the most active minters in the
            community.
          </p>
        </Col>
        <Col lg={2} md={2} sm={2} className="upper-schedule-col"></Col>
        <Col lg={2} md={2} sm={2} className="upper-schedule-col">
          <h4 className="sharp-font">75%</h4>
          <p className="montserrat-font">
            25 Rhino NFTs will air drop to random minters. One of them will win
            $5,000 USDC.
          </p>
        </Col>

        <Col lg={2} md={2} sm={2} className="upper-schedule-col"></Col>
        <Col lg={2} md={2} sm={2} className="upper-schedule-col">
          <h4 className="sharp-font">BONUS</h4>
          <p className="montserrat-font">
            $20,000 USDC airdrop to a lucky minter
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default LaunchSchedule;
