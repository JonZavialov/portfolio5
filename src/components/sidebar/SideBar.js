import "../../styles/sidebar.scss";
import CollapsableDiv from "./CollapsibleDiv";
import CollapsibleRepo from "./CollapsibleRepo";

const repoNames = ["collegian-games", "locatia"];

function SideBar({ changeMain }) {
  return (
    <div id="side-bar">
      <p id="header">EXPLORER</p>
      <p id="sub-header">Check out some of my projects here!</p>
      <CollapsableDiv name="portfolio">
        <p onClick={() => changeMain("home")}>Home.jsx</p>
        <p onClick={() => changeMain("resume")}>Resume.pdf</p>
      </CollapsableDiv>
      <CollapsableDiv name="Segmint">
        <p onClick={() => changeMain("segmint")}>Website</p>
        <CollapsibleRepo
          repoName="segmint"
          path="/"
          setMainWindow={changeMain}
        />
      </CollapsableDiv>
      <CollapsableDiv name="Windows 98 Emulator">
        <p onClick={() => changeMain("win98-readme")}>README.md</p>
        <p onClick={() => changeMain("win98")}>Website</p>
        <p onClick={() => changeMain("win98-docs")}>backend-docs.jsx</p>
        <CollapsibleRepo
          repoName="portfolio4"
          path="/"
          setMainWindow={changeMain}
        />
      </CollapsableDiv>
      {repoNames.map((repoName) => (
        <CollapsibleRepo
          repoName={repoName}
          path="/"
          key={repoName}
          setMainWindow={changeMain}
        />
      ))}
    </div>
  );
}

export default SideBar;
