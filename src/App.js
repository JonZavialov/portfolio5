import NavBar from "./components/NavBar";
import "./styles/main.scss";
import Footer from "./components/Footer";
import MainContainer from "./components/main/MainContainer";
import SideBar from "./components/sidebar/SideBar";
import { useState } from "react";

function App() {
  // Terminal text needs to be here so it isn't erased when the MainContainer component is re-rendered
  const [additionalTerminalText, setAdditionalTerminalText] = useState("");
  const [pageHistory, setPageHistory] = useState(["home"]);
  const [pageHistoryIndex, setPageHistoryIndex] = useState(0);
  const [mainContainerPage, setMainContainerPage] = useState("");

  function changeMainContainerContent(page) {
    if (page === mainContainerPage) return;

    setAdditionalTerminalText(
      additionalTerminalText +
        `<p>Navigated to <span class="green">${page}</span> page</p>`
    );

    setMainContainerPage(page);
    setPageHistory([...pageHistory, page]);
    setPageHistoryIndex(pageHistoryIndex + 1);
  }

  function addTextToTerminal(text) {
    setAdditionalTerminalText(additionalTerminalText + text);
  }

  function goBack() {
    if (pageHistory.length <= 1 || pageHistoryIndex === 0) return;

    setPageHistoryIndex(pageHistoryIndex - 1);
    const page = pageHistory[pageHistoryIndex - 1];
    setMainContainerPage(page);
    setAdditionalTerminalText(
      additionalTerminalText +
        `<p>Returned to <span class="green">${page}</span> page</p>`
    );
  }

  function goForward() {
    if (pageHistoryIndex === pageHistory.length - 1) return;

    setPageHistoryIndex(pageHistoryIndex + 1);
    const page = pageHistory[pageHistoryIndex + 1];
    setMainContainerPage(page);
    setAdditionalTerminalText(
      additionalTerminalText +
        `<p>Returned to <span class="green">${page}</span> page</p>`
    );
  }

  return (
    <div id="homepage-container">
      <NavBar
        goHome={() => {
          changeMainContainerContent("home");
        }}
        goBack={goBack}
        backDisabled={pageHistory.length <= 1 || pageHistoryIndex === 0}
        goForward={goForward}
        forwardDisabled={pageHistoryIndex === pageHistory.length - 1}
        addText={addTextToTerminal}
      />
      <div id="main-content">
        <SideBar changeMain={changeMainContainerContent} />
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
