import NavBar from "./components/NavBar";
import "./styles/main.scss";
import Footer from "./components/Footer";
import MainContainer from "./components/main/MainContainer";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div id="homepage-container">
      <NavBar />
      <div id="main-content">
        <SideBar />
        <MainContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
