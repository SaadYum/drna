import React, { useLayoutEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import rhino1 from "../../assets/1.png";
import rhino2 from "../../assets/2.png";
import rhino3 from "../../assets/3.png";
import rhino4 from "../../assets/4.png";
import $ from "jquery";
import "./Gallery.css";
function Gallery(props) {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  useLayoutEffect(() => {
    if (inView) {
      $("#banner-content").hide();
      $("#welcome-content").hide();
      $("#welcome-div").hide();
      $(".banner-in").hide();
    } else {
      $(".banner-in").show();
      $("#banner-content").show();
      $("#welcome-content").show();
      $("#welcome-div").show();
    }
  }, [inView]);
  return (
    <div className="gallery px-5" ref={ref}>
      <Row>
        <Col lg={3} md={3} sm={3} xs={12} className="px-0">
          <img src={rhino3} className="gallery-img" />
        </Col>
        <Col lg={3} md={3} sm={3} xs={12} className="px-0">
          <img src={rhino1} className="gallery-img" />
        </Col>
        <Col lg={3} md={3} sm={3} xs={12} className="px-0">
          <img src={rhino2} className="gallery-img" />
        </Col>
        <Col lg={3} md={3} sm={3} xs={12} className="px-0">
          <img src={rhino4} className="gallery-img" />
        </Col>
      </Row>
    </div>
  );
}

export default Gallery;
