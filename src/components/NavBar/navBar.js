import React, { Component } from "react";
//   importing component

//   importing images
import Logo from "../../../src/assets/logo-grey.png";
//    importing icons
import DLogo from "../../../src/assets/dLogo.png";
import Twitter from "../../../src/assets/twiter.png";
//    importing css files
import "./navBar.css";
import { Container } from "react-bootstrap";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="navbar-main-div">
          <div>
            <img className="logo" src={Logo} alt="logo" />
          </div>
          <div className="icons-main-div">
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
                className="nav-bar-icons"
                src={Twitter}
                alt="Twitter icons"
              />
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
