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
export default function MainPage() {
  const [loading, setloading] = useState(true);
  const [counter, setCounter] = useState(0);

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    let loading_fade = $(".loading-fade");

    const interval = setInterval(() => {
      loading_fade.css({
        minHeight: counter + "vh",
      });
      setCounter((prevCounter) => prevCounter + 1);
    }, 50);
    const timer = setTimeout(() => {
      setloading(false);
      clearInterval(interval);
    }, 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      {loading ? (
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          exit={{ scaleY: 0, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <LoadingPage percentage={counter} />
        </motion.div>
      ) : (
        <motion.div
          ref={ref}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <NavBar />
          <Header />
          <Banner />
          <Gallery />
          <Floats />
          <Games />
          <RareRhinos />
          <Faqs />
        </motion.div>
      )}
    </>
  );
}
const LoadingPage = (props) => {
  return (
    <div className="loading-screen">
      <h1 className="percentage">{props.percentage} %</h1>
      <div className="loading-fade"></div>
    </div>
  );
};
