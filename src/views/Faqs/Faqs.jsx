import React from "react";
import { Col, Row } from "react-bootstrap";
import rhino from "../../assets/faq-scholar.png";
import faqImg from "../../assets/faq-sign.png";
import "./Faqs.css";
function Faqs(props) {
  const qnas = [
    {
      question: "Why is it called Deoxy Rhino Nucleic Acid?",
      answer:
        "DNA stands for Deoxyribonucleic Acid. We just replaced Ribo to Rhino because our drawings happened to look like Rhinos. Well, kinda",
    },
    {
      question: "What are the Rhinos?",
      answer: `There are 10,000 completely unique Rhinos HAND DRAWN from over 150+ unique traits including, colors, facial expressions, accessories, outfits, hair styles and many many more!

    There are 6 (maybe more)super rare Rhinos that every minter has the chance to win - (check launch Schedule and Discord for more info)`,
    },
    {
      question: "What are the benefits of owning a Rhino?",
      answer: `You will become a part of one of the most exclusive communites.

    You will also be in the running to win air drops of NFTs and CASH! Enter exciting games to increase your winnings!`,
    },
    {
      question: "When will Deoxy Rhino Nucleic Acid be launched?",
      answer: `Join our Discord and follow our Twitter for All Launch and Air Drop updates.

    Presale: Please stay tuned for announcement on Discord and Twitter
    Public Launch: one day after the Presale`,
    },
    {
      question: "How many Rhinos are available?",
      answer: `There will only be 10,000 Rhinos ever minted. There will never be any more Rhinos minted.`,
    },
    { question: "How much will it cost to mint?", answer: `0.09 ETH` },
    {
      question: "How many Rhinos can I mint at once?",
      answer: `Presale: 2 per white listed wallet address
    Public Sale: 5 per transaction`,
    },
    {
      question: "How can I mint?",
      answer: `The Deoxy Rhino Nucleic Acid can be minted on our website or directly through the contract. Once they sell out, you will be able to trade and purchase them on secondary market places such as OpenSea.io`,
    },
    {
      question: "When will my Rhino be revealed?",
      answer: `Within 24 hours after launch.`,
    },
  ];
  return (
    <div className="faqs-wrapper">
      <Row>
        <Col md={7} lg={7} sm={7} xs={12} className="faqs">
          {qnas.map((qna) => {
            return (
              <div className="pb-4">
                <h1>{qna.question}</h1>
                <p>{qna.answer}</p>
              </div>
            );
          })}
        </Col>
        <Col md={5} lg={5} sm={5} xs={12} className="faq-imgs">
          <img src={faqImg} className="faq-img" />
          <img src={rhino} className="faq-rhino" />
        </Col>
      </Row>
    </div>
  );
}

export default Faqs;
