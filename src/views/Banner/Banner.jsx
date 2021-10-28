import React, { useEffect } from "react";
import banner from "../../assets/banner.png";
import "./Banner.css";
import $ from "jquery";
import { Container } from "react-bootstrap";
function Banner(props) {
  useEffect(() => {
    let ban = $("#banner");
    let ban_content = $("#banner-content");
    $(window).on("scroll", () => {
      console.log(window.scrollY);
      ban.css({
        backgroundSize: 100 + window.scrollY / 12 + "%",
        opacity: 1 - +window.scrollY / 700 + "",
      });
      ban_content.css({
        opacity: window.scrollY / 390,
      });
    });
    return () => {
      ban.off("scroll", () => {});
    };
  }, []);

  return (
    <div>
      <div id="banner">
        {/* <div id="left-rhino-banner"></div>
        <div id="right-rhino-banner"></div> */}
        <div id="banner-content">
          <h1 className="head">Plot</h1>
          <p id="plot-text">
            Facing foreclosure of their homes in the Goon Docks area of Astoria,
            Oregon to an expanding country club, a group of children who call
            themselves "the Goonies" gather for a final weekend together.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
