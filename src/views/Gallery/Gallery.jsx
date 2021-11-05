import React, { useLayoutEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import rhino1 from "../../assets/slider images/1.png";
import rhino2 from "../../assets/slider images/2.png";
import rhino3 from "../../assets/slider images/3.png";
import rhino4 from "../../assets/slider images/4.png";
import rhino5 from "../../assets/slider images/5.png";
import rhino6 from "../../assets/slider images/6.png";
import rhino7 from "../../assets/slider images/7.png";
import rhino8 from "../../assets/slider images/8.png";
import rhino9 from "../../assets/slider images/9.png";
import rhino10 from "../../assets/slider images/10.png";
import rhino11 from "../../assets/slider images/11.png";
import rhino12 from "../../assets/slider images/12.png";
import rhino13 from "../../assets/slider images/13.png";
import rhino14 from "../../assets/slider images/14.png";
import rhino15 from "../../assets/slider images/15.png";
import rhino16 from "../../assets/slider images/16.png";
import rhino17 from "../../assets/slider images/17.png";
import rhino18 from "../../assets/slider images/18.png";
import rhino19 from "../../assets/slider images/19.png";
import rhino20 from "../../assets/slider images/20.png";
import rhino21 from "../../assets/slider images/21.png";
import rhino22 from "../../assets/slider images/22.png";
import rhino23 from "../../assets/slider images/23.png";
import rhino24 from "../../assets/slider images/24.png";
import rhino25 from "../../assets/slider images/25.png";
import rhino26 from "../../assets/slider images/26.png";
import rhino27 from "../../assets/slider images/27.png";
import rhino28 from "../../assets/slider images/28.png";
import rhino29 from "../../assets/slider images/29.png";
import rhino30 from "../../assets/slider images/30.png";
import rhino31 from "../../assets/slider images/31.png";
import rhino32 from "../../assets/slider images/32.png";
import rhino33 from "../../assets/slider images/33.png";
import rhino34 from "../../assets/slider images/34.png";
import rhino35 from "../../assets/slider images/35.png";
import rhino36 from "../../assets/slider images/36.png";
import rhino37 from "../../assets/slider images/37.png";
import rhino38 from "../../assets/slider images/38.png";
import rhino39 from "../../assets/slider images/39.png";
import rhino40 from "../../assets/slider images/40.png";
import rhino41 from "../../assets/slider images/41.png";
import rhino42 from "../../assets/slider images/42.png";
import rhino43 from "../../assets/slider images/43.png";
import rhino44 from "../../assets/slider images/44.png";

import slide from "../../assets/slideHand.gif";
import $ from "jquery";
import "./Gallery.css";
import ScrollContainer from "react-indiana-drag-scroll";

const gallery_items = [
  rhino1,
  rhino2,
  rhino3,
  rhino4,
  rhino5,
  rhino6,
  rhino7,
  rhino8,
  rhino9,
  rhino10,
  rhino11,
  rhino12,
  rhino13,
  rhino14,
  rhino15,
  rhino16,
  rhino17,
  rhino18,
  rhino19,
  rhino20,
  rhino21,
  rhino22,
  rhino23,
  rhino24,
  rhino25,
  rhino26,
  rhino27,
  rhino28,
  rhino29,
  rhino30,
  rhino31,
  rhino32,
  rhino33,
  rhino34,
  rhino35,
  rhino36,
  rhino37,
  rhino38,
  rhino39,
  rhino40,
  rhino41,
  rhino42,
  rhino43,
  rhino44,
];
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
      $(".nav-rhino").css({
        transform: "translateX(16.5vw)",
      });
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
        {gallery_items.map((item) => {
          return <img src={item} className="gallery-img" />;
        })}
      </ScrollContainer>
      <div className="myRow center mt-5">
        <img src={slide} width="50vw" />
      </div>
    </div>
  );
}

export default Gallery;
