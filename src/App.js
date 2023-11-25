import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import "./styles/main.scss";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="homepage-container">
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
