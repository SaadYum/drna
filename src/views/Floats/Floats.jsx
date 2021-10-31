import React, { useEffect } from "react";
import "./Floats.css";
import $ from "jquery";
import LazyShow from "../../animations/LazyShow";
function Floats(props) {
  let height = window.innerHeight;
  useEffect(() => {
    let offsetFloats = $(".floats").offset()?.top;
    let float_1 = $(".float-1");
    let float_2 = $(".float-2");
    let float_3 = $(".float-3");
    let floats_heading = $(".floats-heading");
    $(window).on("scroll", () => {
      console.log("OPAC: ", 1 - (offsetFloats - window.scrollY) / height);
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
      <LazyShow delay={1.5}>
        <h1 className="head floats-heading">Claim your DNA</h1>
      </LazyShow>
      <div className="floats center">
        <img
          src="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5d25ce8103e4105bd13b4be8_coin-3.png"
          className="floating-img float-2"
        />
        <img
          src="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5d25c68703e41086eb3b2da1_key-min.png"
          className="floating-img float-1"
        />
        <img
          src="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5d25cdda7dcddd7271ddc7da_coin.png"
          className="floating-img float-3"
        />
      </div>
    </>
  );
}

export default Floats;
