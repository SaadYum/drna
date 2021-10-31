import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Games.css";
function Games(props) {
  return (
    <div className="rhino-games">
      <Row>
        <Col md={3} lg={3} sm={3} xs={6} className="game-col center">
          <h3 className="game-heading">Title</h3>
          <p className="p-1">A quick brown fox jumps over the lazy dog.</p>
        </Col>
        <Col md={3} lg={3} sm={3} xs={6} className="game-col center">
          <h3 className="game-heading">Title</h3>
          <p className="p-1">A quick brown fox jumps over the lazy dog.</p>
        </Col>
        <Col md={6} lg={6} sm={6} xs={6} className="game-col center">
          <h3 className="game-heading">Title</h3>
          <p className="p-1">A quick brown fox jumps over the lazy dog.</p>
        </Col>
      </Row>
      <Row>
        <Col md={3} lg={3} sm={3} xs={6} className="game-col center">
          <h3 className="game-heading">Title</h3>
          <p className="p-1">A quick brown fox jumps over the lazy dog.</p>
        </Col>
        <Col md={3} lg={3} sm={3} xs={6} className="game-col center">
          <h3 className="game-heading">Title</h3>
          <p className="p-1">A quick brown fox jumps over the lazy dog.</p>
        </Col>
        <Col md={3} lg={3} sm={3} xs={6} className="game-col center">
          <h3 className="game-heading">Title</h3>
          <p className="p-1">A quick brown fox jumps over the lazy dog.</p>
        </Col>
        <Col md={3} lg={3} sm={3} xs={6} className="game-col center">
          <h3 className="game-heading">Title</h3>
          <p className="p-1">A quick brown fox jumps over the lazy dog.</p>
        </Col>
      </Row>
    </div>
  );
}

export default Games;
