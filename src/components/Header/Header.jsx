import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Header.css";
import $ from "jquery";
function Header(props) {
  const scrollDown = (content) => {
    let rhinos_y = $(".rare-rhinos").position().top;
    let games_y = $(".games").position().top;
    let faq_y = $(".faqs-wrapper").position().top;

    switch (content) {
      case "plot":
        window.scrollTo(0, 0);
        break;
      case "games":
        window.scrollTo(0, games_y);
        break;
      case "rare":
        window.scrollTo(0, rhinos_y);
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
        <Col xl={3} lg={3} md={3} className="nav-item">
          <p className="sharp-font" onClick={() => scrollDown("plot")}>
            Plot
          </p>
        </Col>
        <Col xl={3} lg={3} md={3} className="nav-item">
          <p className="sharp-font" onClick={() => scrollDown("games")}>
            Games
          </p>
        </Col>
        <Col xl={3} lg={3} md={3} className="nav-item">
          <p className="sharp-font" onClick={() => scrollDown("rare")}>
            Rare Rhinos
          </p>
        </Col>
        <Col xl={3} lg={3} md={3} className="nav-item">
          <p className="sharp-font" onClick={() => scrollDown("faq")}>
            FAQs
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
