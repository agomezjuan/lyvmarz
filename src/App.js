import Banner from "./components/Banner";
import Fuerzas from "./components/Fuerzas";
import Header from "./components/Header";
import NoHayLugar from "./components/NoHayLugar";
import PortadaEP from "./components/PortadaEP";
import Video from "./components/Video";
import "./css/cssbox.css";
import "./css/styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <NoHayLugar />
      <Fuerzas />
      <PortadaEP />
      <Video />
    </div>
  );
}

export default App;
