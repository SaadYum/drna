import React, { useEffect } from "react";
import banner from "../../assets/banner.png";
import left_banner from "../../assets/left-team.png";
import right_banner from "../../assets/right-team.png";
import mouse_gif from "../../assets/mouse.gif";
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
    let welcome_div = $("#welcome-div");
    let plot_text = $("#plot-text");
    let mid_line = $(".mid-line");
    $(window).on("scroll", () => {
      welcome_div.css({
        opacity: 1 - +window.scrollY / (height / 2) + "",
      });
      if (window.scrollY < height) {
        ban.css({
          backgroundSize: 100 + window.scrollY / 12 + "%",
          opacity: 2 - +window.scrollY / height + "",
        });
        left_ban.css({
          transform: `scale(${1 + window.scrollY / height}) translateX(${
            -100 * (window.scrollY / 2 / height)
          }%)`,
        });
        right_ban.css({
          transform: `scale(${1 + window.scrollY / height}) translateX(${
            100 * (window.scrollY / 2 / height)
          }%)`,
        });
        ban_content.css({
          opacity: 1.5 - height / window.scrollY,
        });
        plot_text.css({
          marginTop: 50 - (50 * window.scrollY) / height + "%",
        });
        mid_line.css({
          height: 100 * (window.scrollY / height) + "px",
        });
      } else {
        console.log(
          "Y: ",
          `translateY(${-100 * (2 - height / window.scrollY)})px)`
        );
        ban.css({
          opacity: 2 - +window.scrollY / height + "",
        });
        ban_content.css({
          opacity: 3 - +window.scrollY / height,
        });
        mid_line.css({
          height: 100 * (2 - window.scrollY / height) + "px",
          transform: `translateY(${-100 * (1 - height / window.scrollY)}px)`,
        });
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
          <div className="center">
            <div className="mid-line"></div>
            <img src={mouse_gif} id="mouse-gif" />
          </div>
        </div>
      </div>
      <div id="welcome-div">
        <h1 className="abuget-font">The story of</h1>
        <h2 className="montserrat-font">Deoxy Rhino Nucleic Acid</h2>
      </div>
      <div id="banner-content">
        <h1 className="head">Plot</h1>
        <p className="p1" id="plot-text">
          Facing foreclosure of their homes in the Goon Docks area of Astoria,
          Oregon to an expanding country club, a group of children who call
          themselves "the Goonies" gather for a final weekend together.
        </p>
        <div className="center">
          <div className="mid-line"></div>
          <img src={mouse_gif} id="mouse-gif" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
