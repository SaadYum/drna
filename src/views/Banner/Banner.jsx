import React, { useEffect } from "react";
import banner from "../../assets/banner.png";
import left_banner from "../../assets/left-team.png";
import right_banner from "../../assets/right-team.png";
import "./Banner.css";
import $ from "jquery";
import { Container } from "react-bootstrap";
function Banner(props) {
  const height = window.innerHeight;
  useEffect(() => {
    let ban = $("#banner");
    let ban_content = $("#banner-content");
    let left_ban = $("#left-rhino-banner");
    let right_ban = $("#right-rhino-banner");
    $(window).on("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY < height) {
        ban.css({
          backgroundSize: 100 + window.scrollY / 12 + "%",
          opacity: 2 - +window.scrollY / height + "",
        });
        left_ban.css({
          transform: `scale(${1 + window.scrollY / height}) translateX(${
            -100 * (window.scrollY / height)
          }%)`,
        });
        right_ban.css({
          transform: `scale(${1 + window.scrollY / height}) translateX(${
            100 * (window.scrollY / height)
          }%)`,
        });
        ban_content.css({
          opacity: window.scrollY / height,
        });
      } else {
        console.log("OPACITY: ", window.scrollY / height);
        ban.css({
          opacity: 2 - +window.scrollY / height + "",
        });
        ban_content.css({
          opacity: 2.8 - +window.scrollY / height,
        });
        // if (2.5 - +window.scrollY / height < 0) {
        //   ban_content.css({
        //     visibility: "hidden",
        //   });
        // } else {
        //   ban_content.css({
        //     visibility: "hidden",
        //   });
        // }
      }
    });
    return () => {
      ban.off("scroll", () => {});
    };
  }, []);

  return (
    <div>
      <div id="banner">
        <div className="banner-in">
          <img id="left-rhino-banner" src={left_banner} />
          <img id="right-rhino-banner" src={right_banner} />
        </div>
      </div>
      <div id="banner-content">
        <h1 className="head">Plot</h1>
        <p id="plot-text">
          Facing foreclosure of their homes in the Goon Docks area of Astoria,
          Oregon to an expanding country club, a group of children who call
          themselves "the Goonies" gather for a final weekend together.
        </p>
      </div>
      <p id="plot-text">
        Facing foreclosure of their homes in the Goon Docks area of Astoria,
        Oregon to an expanding country club, a group of children who call
        themselves "the Goonies" gather for a final weekend together.
      </p>
      <p id="plot-text">
        Facing foreclosure of their homes in the Goon Docks area of Astoria,
        Oregon to an expanding country club, a group of children who call
        themselves "the Goonies" gather for a final weekend together.
      </p>
      <p id="plot-text">
        Facing foreclosure of their homes in the Goon Docks area of Astoria,
        Oregon to an expanding country club, a group of children who call
        themselves "the Goonies" gather for a final weekend together.
      </p>
      <p id="plot-text">
        Facing foreclosure of their homes in the Goon Docks area of Astoria,
        Oregon to an expanding country club, a group of children who call
        themselves "the Goonies" gather for a final weekend together.
      </p>
      <p id="plot-text">
        Facing foreclosure of their homes in the Goon Docks area of Astoria,
        Oregon to an expanding country club, a group of children who call
        themselves "the Goonies" gather for a final weekend together.
      </p>
      <p id="plot-text">
        Facing foreclosure of their homes in the Goon Docks area of Astoria,
        Oregon to an expanding country club, a group of children who call
        themselves "the Goonies" gather for a final weekend together.
      </p>
      <p id="plot-text">
        Facing foreclosure of their homes in the Goon Docks area of Astoria,
        Oregon to an expanding country club, a group of children who call
        themselves "the Goonies" gather for a final weekend together.
      </p>
    </div>
    // </div>
  );
}

export default Banner;
