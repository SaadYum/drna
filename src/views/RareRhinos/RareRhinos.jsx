import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./Rare.css";
import rhino1 from "../../assets/BTC-Maximalist-Starter-Pack.png";
import rhino2 from "../../assets/Vaccinated-MMA-Fighter.png";
import rhino3 from "../../assets/Vaccinated-Zombie-Police.png";
import q1 from "../../assets/q1-rhino.png";
import q2 from "../../assets/q2-rhino.png";
import q3 from "../../assets/q3-rhino.png";
import $ from "jquery";
import { useInView } from "react-intersection-observer";
function RareRhinos(props) {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      $(".nav-rhino").css({
        transform: "translateX(58.5vw)",
      });
    }
  }, [inView]);

  return (
    <div className="rare-rhinos mt-5 center" ref={ref}>
      <Row>
        <Col md={2} lg={2} sm={2} xs={6} id="rhino-1">
          <div className="rhino-col center">
            <img src={rhino1} className="rare-img" />
            <h4 className="rhino-heading">BTC Maximalist Starter Pack</h4>
            <p className="p-1">
              Bitcoin Maximalists come in all different shapes and sizes. But do
              they though?
            </p>
          </div>
        </Col>
        <Col md={2} lg={2} sm={2} xs={6} id="rhino-2">
          <div className="rhino-col center">
            <img src={rhino2} className="rare-img" />
            <h4 className="rhino-heading">Vaccinated MMA Fighter</h4>
            <p className="p-1">
              This Rhino self proclaims that he has nothing to do with a very
              well known MMA fighter.
            </p>
          </div>
        </Col>
        <Col md={2} lg={2} sm={2} xs={6} id="rhino-3">
          <div className="rhino-col center">
            <img src={rhino3} className="rare-img" />
            <h4 className="rhino-heading">Vaccinated Zombie Police</h4>
            <p className="p-1">
              COVID is not a virus this Rhino will be spreading, other than the
              zombie virus and racial profiling. There are no vaccinations for
              those yet.
            </p>
          </div>
        </Col>
        <Col md={2} lg={2} sm={2} xs={6} id="rhino-3">
          <div className="rhino-col center">
            <img src={q1} className="rare-img" />
            <h4 className="rhino-heading">REVEALED SOON</h4>
            <p className="p-1">
              SUPER RARE RHINO REVEALED SOON Follow Discord/Twitter for updates
            </p>
          </div>
        </Col>
        <Col md={2} lg={2} sm={2} xs={6} id="rhino-3">
          <div className="rhino-col center">
            <img src={q2} className="rare-img" />
            <h4 className="rhino-heading">REVEALED SOON</h4>
            <p className="p-1">
              SUPER RARE RHINO REVEALED SOON Follow Discord/Twitter for updates
            </p>
          </div>
        </Col>
        <Col md={2} lg={2} sm={2} xs={6} id="rhino-3">
          <div className="rhino-col center">
            <img src={q3} className="rare-img" />
            <h4 className="rhino-heading">REVEALED SOON</h4>
            <p className="p-1">
              SUPER RARE RHINO REVEALED SOON Follow Discord/Twitter for updates
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default RareRhinos;
