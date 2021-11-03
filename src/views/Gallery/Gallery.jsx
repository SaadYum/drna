import React, { useLayoutEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import rhino1 from "../../assets/1.png";
import rhino2 from "../../assets/2.png";
import rhino3 from "../../assets/3.png";
import rhino4 from "../../assets/4.png";
import $ from "jquery";
import "./Gallery.css";
import ScrollContainer from "react-indiana-drag-scroll";
function Gallery(props) {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  useLayoutEffect(() => {
    let animatedCursor = document.querySelector(".animatedCursor");
    let animatedCursorDiv = document.querySelector(".animatedCursorDiv");
    animatedCursorDiv.addEventListener("mousemove", (e) => {
      animatedCursor.style.top = e.pageY + "px";
      animatedCursor.style.left = e.pageX + "px";
    });
    return () => {
      animatedCursorDiv.removeEventListener("mousemove", () => {});
    };
  }, []);

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
    <div className="gallery px-5 animatedCursorDiv" ref={ref}>
      <div className="animatedCursor"></div>
      <ScrollContainer className="scroll-container myRow overflow-hidden">
        <img src={rhino3} className="gallery-img" />
        <img src={rhino1} className="gallery-img" />
        <img src={rhino2} className="gallery-img" />
        <img src={rhino4} className="gallery-img" />
        <img src={rhino1} className="gallery-img" />
        <img src={rhino2} className="gallery-img" />
        <img src={rhino4} className="gallery-img" />
      </ScrollContainer>
      <div className="myRow center mt-5">
        <i
          className="fas fa-arrow-left mx-5"
          style={{ color: "white", fontSize: "2vw", opacity: "0.7" }}
        ></i>
        <i
          className="fas fa-arrow-right mx-5"
          style={{ color: "white", fontSize: "2vw", opacity: "0.7" }}
        ></i>
      </div>
    </div>
  );
}

export default Gallery;
