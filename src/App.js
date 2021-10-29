import logo from "./logo.svg";
import "./App.css";
import Banner from "./views/Banner/Banner";
import Gallery from "./views/Gallery/Gallery";
import Header from "./components/Header/Header";
import Floats from "./views/Floats/Floats";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Gallery />
      <Floats />
    </div>
  );
}

export default App;
