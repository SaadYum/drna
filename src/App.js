import logo from "./logo.svg";
import "./App.css";
import Banner from "./views/Banner/Banner";
import Gallery from "./views/Gallery/Gallery";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Gallery />
    </div>
  );
}

export default App;
