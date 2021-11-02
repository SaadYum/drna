import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Rare.css";
function RareRhinos(props) {
  return (
    <div className="rare-rhinos">
      <h3 className="head mb-5">Super Rare Rhinos</h3>
      <Row>
        <Col
          md={4}
          lg={4}
          sm={4}
          xs={6}
          className="rhino-col center"
          id="rhino-1"
        >
          <h3 className="rhino-heading">BTC Maximalist Starter Pack</h3>
          <p className="p-1">
            Bitcoin Maximalists come in all different shapes and sizes. But do
            they though?
          </p>
        </Col>
        <Col
          md={4}
          lg={4}
          sm={4}
          xs={6}
          className="rhino-col center"
          id="rhino-2"
        >
          <h3 className="rhino-heading">Vaccinated MMA Fighter</h3>
          <p className="p-1">
            This Rhino self proclaims that he has nothing to do with a very well
            known MMA fighter.
          </p>
        </Col>
        <Col
          md={4}
          lg={4}
          sm={4}
          xs={6}
          className="rhino-col center"
          id="rhino-3"
        >
          <h3 className="rhino-heading">Vaccinated Zombie Police</h3>
          <p className="p-1">
            COVID is not a virus this Rhino will be spreading, other than the
            zombie virus and racial profiling. There are no vaccinations for
            those yet.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default RareRhinos;
