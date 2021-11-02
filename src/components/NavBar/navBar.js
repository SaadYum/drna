import React, { Component } from "react";
//   importing component

//   importing images
import Logo from "../../../src/assets/logo-grey.png";
//    importing icons
import DLogo from "../../../src/assets/discrod.png";
import Twitter from "../../../src/assets/twitter.png";
//    importing css files
import "./navBar.css";
import { Container } from "react-bootstrap";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <>
        <a target="blank" href="https://discord.gg/drna">
          {" "}
          <img
            className="nav-bar-icons discord-icon"
            src={DLogo}
            alt="D icon"
          />
        </a>
        <a target="blank" href="https://twitter.com/RhinoDNA">
          {" "}
          <img
            className="nav-bar-icons twitter-icon"
            src={Twitter}
            alt="Twitter icons"
          />
        </a>
      </>
    );
  }
}

export default NavBar;
