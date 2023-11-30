import NavBar from "./components/NavBar";
import "./styles/main.scss";
import Footer from "./components/Footer";
import MainContainer from "./components/main/MainContainer";
import SideBar from "./components/sidebar/SideBar";
import { useState } from "react";
import MobileView from "./components/mobileview/MobileView";

function App() {
  // Terminal text needs to be here so it isn't erased when the MainContainer component is re-rendered
  const [additionalTerminalText, setAdditionalTerminalText] = useState("");
  const [pageHistory, setPageHistory] = useState(["home"]);
  const [pageHistoryIndex, setPageHistoryIndex] = useState(0);
  const [mainContainerPage, setMainContainerPage] = useState("home");

  function changeMainContainerContent(page) {
    if (page === mainContainerPage) return;
    else if (typeof page === "object") {
      // Set content to a repo file

      const newPage = `code ${page.repo}/${page.path}`
      if (newPage === mainContainerPage) return;
      
      setAdditionalTerminalText(
        additionalTerminalText +
          `<p>Navigated to <span class="blue">${page.repo}/${page.path}</span> file</p>`
      );

      page = newPage;
    } else {
      setAdditionalTerminalText(
        additionalTerminalText +
          `<p>Navigated to <span class="green">${page}</span> page</p>`
      );
    }

    setMainContainerPage(page);
    setPageHistory([...pageHistory, page]);
    setPageHistoryIndex(pageHistory.length);
  }

  function addTextToTerminal(text) {
    setAdditionalTerminalText(additionalTerminalText + text);
  }

  function returnToPage(index) {
    // Used to go back and forward
    // Checking if this is allowed is done in the navbar buttons

    setPageHistoryIndex(index);
    const page = pageHistory[index];
    setMainContainerPage(page);
    setAdditionalTerminalText(
      additionalTerminalText +
        `<p>Returned to <span class="green">${page}</span> page</p>`
    );
  }

  if (window.innerWidth < 700) {
    return <MobileView />;
  }
  else return (
    <div id="homepage-container">
      <NavBar
        goHome={() => {
          changeMainContainerContent("home");
        }}
        goBack={() => {
          returnToPage(pageHistoryIndex - 1);
        }}
        backDisabled={pageHistory.length <= 1 || pageHistoryIndex === 0}
        goForward={() => {
          returnToPage(pageHistoryIndex + 1);
        }}
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
