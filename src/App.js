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
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import MintPage from "./Pages/MintPage/MintPage";
import { useEffect, useRef, useState } from "react";
import MainPage from "./Pages/MainPage/MainPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/mint">
            <MintPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
