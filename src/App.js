import NavBar from "./components/NavBar";
import "./styles/main.scss";
import Footer from "./components/Footer";
import MainContainer from "./components/main/MainContainer";
import SideBar from "./components/sidebar/SideBar";
import { useState } from "react";

function App() {
  const [additionalTerminalText, setAdditionalTerminalText] = useState("");
  const [mainContainerPage, setMainContainerPage] = useState("");
  // Terminal text needs to be here so it isn't erased when the MainContainer component is re-rendered

  function changeMainContainerContent(page) {
    setAdditionalTerminalText(
      additionalTerminalText +
        `<p>Navigated to <span class="green">${page}</span> page</p>`
    );
    setMainContainerPage(page);
  }

  function addTextToTerminal(text) {
    setAdditionalTerminalText(additionalTerminalText + text);
  }

  return (
    <div id="homepage-container">
      <NavBar
        goHome={() => {
          changeMainContainerContent("home");
        }}
        addText={addTextToTerminal}
      />
      <div id="main-content">
        <SideBar />
        <MainContainer
          page={mainContainerPage}
          setPage={changeMainContainerContent}
          terminalText={additionalTerminalText}
          addText={addTextToTerminal}
        />
      </div>
      <Footer addText={addTextToTerminal} />
    </div>
  );
}

export default App;
