import React, { useEffect, useState } from "react";
import $ from "jquery";
import { motion } from "framer-motion";
import "../MainPage/MainPage.css";
import { useHistory } from "react-router";
function LoadingPage(props) {
  const history = useHistory();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let loading_fade = $(".loading-fade");

    const interval = setInterval(() => {
      loading_fade.css({
        minHeight: counter + "vh",
      });
      setCounter((prevCounter) => prevCounter + 1);
    }, 50);
    const timer = setTimeout(() => {
      history.push("/home");
      clearInterval(interval);
    }, 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);
  return (
    <motion.div
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      exit={{ scaleY: 0, opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="loading-screen">
        <h1 className="percentage">{counter}%</h1>
        <div className="loading-fade"></div>
      </div>
    </motion.div>
  );
}

export default LoadingPage;
