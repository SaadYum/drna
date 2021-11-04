import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Header.css";
import $ from "jquery";
import navRhino from "../../assets/navRhino.png";
function Header(props) {
  const scrollDown = (content) => {
    let rare_y = $(".rare-rhinos").position().top;
    let games_y = $(".games").position().top;
    let faq_y = $(".faqs-wrapper").position().top;
    let rhinos_y = $(".gallery").position().top;
    let traits_y = $(".floats").position().top;
    let schedule_y = $(".launch-schedule").position().top;
    let navRhino = $(".nav-rhino");
    switch (content) {
      case "plot":
        navRhino.css({
          transform: "translateX(0%)",
        });
        window.scrollTo(0, 0);
        break;
      case "rhinos":
        navRhino.css({
          transform: "translateX(16.5vw)",
        });
        window.scrollTo(0, rhinos_y);
        break;
      case "traits":
        navRhino.css({
          transform: "translateX(29vw)",
        });
        window.scrollTo(0, traits_y);
        break;
      case "games":
        navRhino.css({
          transform: "translateX(41.8vw)",
        });
        window.scrollTo(0, games_y);
        break;
      case "rare":
        navRhino.css({
          transform: "translateX(58.5vw)",
        });
        window.scrollTo(0, rare_y);
        break;
      case "schedule":
        navRhino.css({
          transform: "translateX(75.5vw)",
        });
        window.scrollTo(0, schedule_y);
        break;
      case "faq":
        navRhino.css({
          transform: "translateX(87.5vw)",
        });
        window.scrollTo(0, faq_y);
        break;

      default:
        break;
    }
  };

  return (
    <div className="header">
      <img src={navRhino} className="nav-rhino" />
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
        <Col xl={1} lg={1} md={1} className="nav-item">
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
          <p className="sharp-font" onClick={() => scrollDown("schedule")}>
            Schedule
          </p>
        </Col>
        <Col xl={1} lg={1} md={1} className="nav-item">
          <p className="sharp-font" onClick={() => scrollDown("faq")}>
            FAQs
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
