import React, { useEffect, useState } from "react";
import "./Games.css";
import Circle from "../../assets/circle.png";
import Triangle from "../../assets/triangle.png";
import Square from "../../assets/squre.png";
import rps from "../../assets/rps.png";
import qmark from "../../assets/qmark.png";
import sands from "../../assets/sands.png";
import front_man from "../../assets/front-man.png";
import LeftBounceIn from "../../animations/LeftBounceIn";
import RightBounceIn from "../../animations/RightBounceIn";
import Rotate from "../../animations/Rotate";
import { Col, Modal, Row, Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import LazyShow from "../../animations/LazyShow";
import { useInView } from "react-intersection-observer";
import $ from "jquery";
const Game = (props) => {
  return (
    <Col md={4} lg={4} sm={4} xs={12} className="game-col">
      <img src={props.img} className="game-img" />
      <h1 className="game-title">{props.title}</h1>
      <LazyShow>
        <p className="game-description">{props.description}</p>
      </LazyShow>
    </Col>
  );
};

function Games(props) {
  const [showVideo, setshowVideo] = useState(false);

  const { ref, inView, entry } = useInView({
    threshold: 0.8,
  });

  useEffect(() => {
    if (inView) {
      $(".front-man").css({
        transform: "translateX(0%)",
      });
    } else {
      $(".front-man").css({
        transform: "translateX(-200%)",
      });
    }
  }, [inView]);

  return (
    <>
      <div className="games" ref={ref}>
        <img src={front_man} className="front-man" />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LeftBounceIn delay={1}>
            <img
              style={{ margin: "auto" }}
              src={Circle}
              className="rhino-game-shapes-images"
            />
          </LeftBounceIn>
          <Rotate delay={2}>
            <img
              style={{ marginRight: "auto" }}
              src={Triangle}
              className="rhino-game-shapes-images"
            />
          </Rotate>
          <RightBounceIn delay={1}>
            <img src={Square} className="rhino-game-shapes-images" />
          </RightBounceIn>
        </div>

        <Row className="mt-5 " style={{ marginLeft: "4vw", height: "55vh" }}>
          <Col md={4} lg={4} sm={4} xs={12} className="game-col">
            <img src={rps} className="game-img" />
            <h1 className="game-title">Rock Paper Scissors</h1>
            <LazyShow>
              <p className="game-description">
                Play Rock Paper Scissors with your Rhino.
              </p>
              <p className="game-description">
                16 Rhinos will each enter the room. You will play a game of RPS
                with your designated pair.
              </p>
              <p className="game-description">
                A win will elevate you to the next round. If you lose you will
                lose your Rhino to the pool.
              </p>
              <p className="game-description">
                As there are 16 players to each room, win 4 rounds of RPS in a
                row and you can end up with 16 RHINOS!
              </p>
            </LazyShow>
          </Col>
          <Col md={4} lg={4} sm={4} xs={12} className="game-col">
            <img src={qmark} className="game-img" />
            <h1 className="game-title">Riddles</h1>
            <LazyShow>
              <p className="game-description">
                Be the first to solve a riddle to win a Rhino. The first person
                will win other Rhinos in the room. This game may be run on a
                team basis so make sure you become friends with the smartest
                people in the Discord
              </p>
            </LazyShow>
          </Col>
          <Col md={4} lg={4} sm={4} xs={12} className="game-col">
            <img src={sands} className="game-img" />
            <h1 className="game-title">Split or Steal</h1>
            <LazyShow>
              <p className="game-description">
                Each contestant is given a choice to "Split" and "Steal". The
                contestants may find each other and speak to each other on
                Discord.
              </p>
              <p className="game-description">
                If both choose Split, they each receive their own Rhino.
              </p>
              <p className="game-description">
                If one chooses Steal and the other chooses Split, the Steal
                contestant wins the other contestant’s Rhino and the Split
                contestant leaves with nothing. If both choose Steal, both
                contestants lose their Rhino.
              </p>
              <p className="game-description">
                You may be randomly selected to play this game. (we are going to
                keep the selection very low)* (upon minting you agree to be
                randomly selected)
              </p>
            </LazyShow>
          </Col>
        </Row>
        <div className="mt-5">
          <i
            className="fas fa-play-circle"
            style={{ color: "white", fontSize: "3vw", cursor: "pointer" }}
            onClick={() => setshowVideo(true)}
          ></i>
          <p className="game-description mt-5">
            Follow the Discord and stay tuned on new games that can bring you
            massive wins. Visit this website for latest games
          </p>
        </div>
      </div>
      <Modal
        show={showVideo}
        onHide={() => setshowVideo(false)}
        // backdrop="static"
        keyboard={false}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation
      >
        <Modal.Header>
          <i
            className="fas fa-times-circle closeBtn"
            onClick={() => setshowVideo(false)}
          ></i>
        </Modal.Header>
        <Modal.Body>
          <ReactPlayer
            controls={true}
            url={
              "https://www.youtube.com/watch?v=wue5q8Nb3Z4&ab_channel=TechBurner"
            }
            width="100%"
            height="80vh"
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Games;
