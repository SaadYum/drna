import React, { useEffect } from "react";
import "./Floats.css";
import $ from "jquery";
import LazyShow from "../../animations/LazyShow";
import f1 from "../../assets/glasses-2.png";
import f2 from "../../assets/hair-2.png";
import f3 from "../../assets/base-1.png";
import f4 from "../../assets/base-2.png";
import f5 from "../../assets/hiar-1.png";
import f6 from "../../assets/ring-1.png";
import f7 from "../../assets/robe-2.png";
import float1 from "../../assets/float1.mp4";
import float2 from "../../assets/float2.mp4";
import { Col, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import RightBounceIn from "../../animations/RightBounceIn";
import LeftBounceIn from "../../animations/LeftBounceIn";
function Floats(props) {
  let height = window.innerHeight;
  useEffect(() => {
    let offsetFloats = $(".floats").offset()?.top;
    let float_1 = $(".float-1");
    let float_2 = $(".float-2");
    let float_3 = $(".float-3");
    let float_4 = $(".float-4");
    let floats_heading = $(".floats-heading");
    $(window).on("scroll", () => {
      float_1.css({
        transform: `translateY(${
          ((offsetFloats - window.scrollY) / height) * 100
        }%) translateX(${((offsetFloats - window.scrollY) / height) * 200}%)`,
      });
      float_2.css({
        transform: `rotate(${
          ((offsetFloats - window.scrollY) / height) * 100
        }deg) translateX(-${
          ((offsetFloats - window.scrollY) / height) * 200
        }%)`,
      });
      float_3.css({
        transform: `rotate(-${
          ((offsetFloats - window.scrollY) / height) * 100
        }deg) translateX(-${
          ((offsetFloats - window.scrollY) / height) * 200
        }%)`,
      });
      float_4.css({
        transform: `rotate(-${
          ((offsetFloats - window.scrollY) / height / 2) * 100
        }deg) translateX(-${
          ((offsetFloats - window.scrollY) / height / 2) * 200
        }%)`,
      });
      // if (offsetFloats - window.scrollY < height) {
      //   floats_heading.css({
      //     opacity: 1 - (offsetFloats - window.scrollY) / (height - 500),
      //   });
      // } else if (offsetFloats - window.scrollY < 0) {
      //   floats_heading.css({
      //     opacity: 2 - (1 - (offsetFloats - window.scrollY) / (height - 500)),
      //   });
      // } else {
      //   floats_heading.css({
      //     opacity: 0,
      //   });
      // }
    });
    return () => {
      $(window).off("scroll", () => {});
    };
  }, []);

  return (
    <>
      {/* <LazyShow delay={1.5}>
        <h1 className="head floats-heading">Claim your DNA</h1>
      </LazyShow>
      <div className="floats center">
        <div className="row">
          <img src={f1} className="floating-img float-2" />
          <img src={f2} className="floating-img float-1" />
          <img src={f5} className="floating-img float-4" />
        </div>

        <div className="row">
          <img src={f4} className="floating-img float-1" />
          <img src={f3} className="floating-img float-2" />
          <img src={f6} className="floating-img float-3" />
          <img src={f7} className="floating-img float-4" />
        </div>
      </div> */}
      <div className="floats">
        <Row>
          <Col lg={6} md={6} sm={6} xs={12} className="floats-col">
            <ReactPlayer
              controls={false}
              playing={true}
              loop={true}
              url={float1}
              width="50vw"
              height="50vw"
            />
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
            <ReactPlayer
              controls={false}
              playing={true}
              loop={true}
              url={float2}
              width="50vw"
              height="50vw"
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Floats;
