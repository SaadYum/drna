import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Header.css";
import $ from "jquery";
function Header(props) {
  const scrollDown = (content) => {
    let rare_y = $(".rare-rhinos").position().top;
    let games_y = $(".games").position().top;
    let faq_y = $(".faqs-wrapper").position().top;
    let rhinos_y = $(".gallery").position().top;
    let traits_y = $(".floats").position().top;

    switch (content) {
      case "plot":
        window.scrollTo(0, 0);
        break;
      case "rhinos":
        window.scrollTo(0, rhinos_y);
        break;
      case "traits":
        window.scrollTo(0, traits_y);
        break;
      case "games":
        window.scrollTo(0, games_y);
        break;
      case "rare":
        window.scrollTo(0, rare_y);
        break;
      case "faq":
        window.scrollTo(0, faq_y);
        break;

      default:
        break;
    }
  };

  return (
    <div className="header">
      <Row>
        <Col xl={2} lg={2} md={2} className="nav-item">
          <p className="sharp-font" onClick={() => scrollDown("plot")}>
            Plot
          </p>
        </Col>
        <Col xl={2} lg={2} md={2} className="nav-item">
          <p className="sharp-font" onClick={() => scrollDown("rhinos")}>
            Rhinos
          </p>
        </Col>
        <Col xl={2} lg={2} md={2} className="nav-item">
          <p className="sharp-font" onClick={() => scrollDown("traits")}>
            Traits
          </p>
        </Col>
        <Col xl={2} lg={2} md={2} className="nav-item">
          <p className="sharp-font" onClick={() => scrollDown("games")}>
            Rhino Game
          </p>
        </Col>
        <Col xl={2} lg={2} md={2} className="nav-item">
          <p className="sharp-font" onClick={() => scrollDown("rare")}>
            Super Rare Rhinos
          </p>
        </Col>
        <Col xl={2} lg={2} md={2} className="nav-item">
          <p className="sharp-font" onClick={() => scrollDown("faq")}>
            FAQs
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
