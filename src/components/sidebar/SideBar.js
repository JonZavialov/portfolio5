import "../../styles/sidebar.scss";
import CollapsableDiv from "./CollapsibleDiv";

function SideBar({ changeMain }) {
  return (
    <div id="side-bar">
      <p id="header">EXPLORER</p>
      <p id="sub-header">Check out some of my projects here!</p>
      <CollapsableDiv name="portfolio">
        <p onClick={() => changeMain("home")}>Home.jsx</p>
        <p onClick={() => changeMain("resume")}>Resume.pdf</p>
      </CollapsableDiv>
      <CollapsableDiv name="Windows 98 Emulator">
        <p onClick={() => changeMain("win98-readme")}>README.md</p>
        <p onClick={() => changeMain("win98")}>index.js</p>
        <p onClick={() => changeMain("win98-docs")}>backend-docs.jsx</p>
      </CollapsableDiv>
    </div>
  );
}

export default SideBar;
