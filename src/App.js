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

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Banner />
      <Gallery />
      <Floats />
      <Games />
      <RareRhinos />
      <Faqs />
    </div>
  );
}

export default App;
