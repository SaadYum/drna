import logo from "./logo.svg";
import "./App.css";
import Banner from "./views/Banner/Banner";
import Gallery from "./views/Gallery/Gallery";
import Header from "./components/Header/Header";
import Floats from "./views/Floats/Floats";
import NavBar from "./components/NavBar/navBar";
import RareRhinos from "./views/RareRhinos/RareRhinos";
import Games from "./views/Games/Games";
import Faqs from "./views/Faqs/Faqs";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import MintPage from "./Pages/MintPage/MintPage";
import { useEffect, useRef, useState } from "react";
import MainPage from "./Pages/MainPage/MainPage";
import { AnimatePresence } from "framer-motion";
import LoadingPage from "./Pages/LoadingPage/LoadingPage";
import MediaQuery from "react-responsive";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <MediaQuery maxWidth={768}>
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3 className="sharp-font">Please rotate your screen!</h3>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
              <MainPage />
            </Route>
            {/* <Redirect exact from={"/home"} to={"/"} /> */}
            {/* <Route path="/home" exact>
              <MainPage />
            </Route> */}
            <Route path="/mint">
              <MintPage />
            </Route>
          </Switch>
        </AnimatePresence>
      </MediaQuery>
    </div>
  );
}

export default App;
