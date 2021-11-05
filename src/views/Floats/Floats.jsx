import React, { useEffect } from "react";
import "./Floats.css";

import float1 from "../../assets/float1.mp4";
import float2 from "../../assets/float2.mp4";
import { Col, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import RightBounceIn from "../../animations/RightBounceIn";
import LeftBounceIn from "../../animations/LeftBounceIn";
import { useInView } from "react-intersection-observer";
import $ from "jquery";
function Floats(props) {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      $(".nav-rhino").css({
        transform: "translateX(29vw)",
      });
    }
  }, [inView]);

  return (
    <>
      <div className="floats" ref={ref}>
        <Row>
          <Col lg={6} md={6} sm={6} xs={12} className="floats-col">
            {/* <ReactPlayer
              controls={false}
              playing={true}
              loop={true}
              url={float1}
              width="50vw"
              height="50vw"
            /> */}
            <video
              autoPlay
              loop
              muted
              style={{ width: "40vw", height: "40vw" }}
            >
              <source src={float1} type="video/mp4"></source>
            </video>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12} className="floats-col">
            <h1 className="head floats-heading-right ">
              <RightBounceIn delay={1.5}>180+ Traits</RightBounceIn>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={6} xs={12} className="floats-col">
            <h1 className="head floats-heading-left ">
              <LeftBounceIn delay={1.5}>10,000 Rhinos</LeftBounceIn>
            </h1>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12} className="floats-col">
            <video
              autoPlay
              loop
              muted
              style={{ width: "40vw", height: "40vw" }}
            >
              <source src={float2} type="video/mp4"></source>
            </video>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Floats;
