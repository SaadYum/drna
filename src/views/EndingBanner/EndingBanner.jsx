import React from "react";
import left_banner from "../../assets/left-rhinos.png";
import right_banner from "../../assets/right-rhinos.png";
import discord from "../../assets/discrod.png";
import twitter from "../../assets/twitter.png";
import mouse_gif from "../../assets/mouse.gif";
import center_text from "../../assets/center-logo.png";
import "./EndingBanner.css";
import { Link } from "react-router-dom";
import LeftBounceIn from "../../animations/LeftBounceIn";
import RightBounceIn from "../../animations/RightBounceIn";
import LazyShow from "../../animations/LazyShow";
import FadeShow from "../../animations/FadeShow";
export default function EndingBanner() {
  return (
    <div>
      <div className="ending-banner-wrapper">
        <div id="e-banner">
          <div className="e-banner-in">
            {/* <FadeShow delay={2}> */}
            <img id="left-rhino-e-banner" src={left_banner} />
            {/* </FadeShow> */}
            {/* <FadeShow delay={2}> */}
            <img id="right-rhino-e-banner" src={right_banner} />
            {/* </FadeShow> */}
          </div>
        </div>
        {/* <LazyShow delay={3}> */}
        <div id="welcome-div">
          <h1 className="montserrat-font">Become a part of the DNA today</h1>
          <Link to="/mint">
            <div className="mint-btn">Mint Now</div>
          </Link>
          <div className="myRow btn-row mt-5">
            <a
              target="blank"
              href="https://discord.gg/drna"
              style={{ marginRight: "2vw" }}
            >
              {" "}
              <img className="nav-bar-icons " src={discord} alt="D icon" />
            </a>
            <a target="blank" href="https://twitter.com/RhinoDNA">
              {" "}
              <img
                className="nav-bar-icons "
                src={twitter}
                alt="Twitter icons"
              />
            </a>
            {/* <a href="https://discord.gg/drna" target="blank">
              <div className="mint-btn">Discord</div>
            </a>
            <a href="https://twitter.com/RhinoDNA" target="blank">
              <div className="mint-btn">Twitter</div>
            </a> */}
          </div>
        </div>
        {/* </LazyShow> */}
      </div>
    </div>
  );
}
