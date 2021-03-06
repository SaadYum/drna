import React, { useEffect, useState } from "react";
import $ from "jquery";
import NavBar from "../../components/NavBar/navBar";
import Header from "../../components/Header/Header";
import Banner from "../../views/Banner/Banner";
import Gallery from "../../views/Gallery/Gallery";
import Floats from "../../views/Floats/Floats";
import Games from "../../views/Games/Games";
import RareRhinos from "../../views/RareRhinos/RareRhinos";
import Faqs from "../../views/Faqs/Faqs";
import "./MainPage.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import EndingBanner from "../../views/EndingBanner/EndingBanner";
import { Row } from "react-bootstrap";
import LaunchSchedule from "../../views/LauchSchedule/LaunchSchedule";
export default function MainPage() {
  // const [loading, setloading] = useState(true);
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   let loading_fade = $(".loading-fade");

  //   const interval = setInterval(() => {
  //     loading_fade.css({
  //       minHeight: counter + "vh",
  //     });
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }, 50);
  //   const timer = setTimeout(() => {
  //     setloading(false);
  //     clearInterval(interval);
  //   }, 5000);
  //   //5000
  //   return () => {
  //     clearInterval(interval);
  //     clearTimeout(timer);
  //   };
  // }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavBar />
      <Header />
      <Banner />
      <Gallery />
      <Floats />
      <Games />
      <RareRhinos />
      <LaunchSchedule />
      <Faqs />
      <EndingBanner />
    </motion.div>
  );
}
const LoadingPage = (props) => {
  return (
    <div className="loading-screen">
      <div className="myRow">
        <h1 className="percentage">{props.percentage}</h1>
        <h1 className="percentage-2">%</h1>
      </div>
      <div className="loading-fade"></div>
    </div>
  );
};
