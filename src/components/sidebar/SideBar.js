import "../../styles/sidebar.scss";
import CollapsableDiv from "./CollapsibleDiv";
import CollapsibleRepo from "./CollapsibleRepo";

const repoNames = ["collegian-games", "locatia"];

function SideBar({ changeMain, inDrawer, closeDrawer }) {
  function navigate(page) {
    changeMain(page);
    if (closeDrawer) closeDrawer();
  }

  return (
    <div className={`side-bar ${inDrawer ? "drawer-variant" : ""}`}>
      <p id="header">EXPLORER</p>
      <p id="sub-header">Check out some of my projects here!</p>
      <CollapsableDiv name="portfolio">
        <p onClick={() => navigate("home")}>Home.jsx</p>
        <p onClick={() => navigate("resume")}>Resume.pdf</p>
      </CollapsableDiv>
      <CollapsableDiv name="Segmint">
        <p onClick={() => navigate("segmint")}>Website</p>
        <CollapsibleRepo repoName="segmint" path="/" setMainWindow={navigate} />
      </CollapsableDiv>
      <CollapsableDiv name="Windows 98 Emulator">
        <p onClick={() => navigate("win98-readme")}>README.md</p>
        <p onClick={() => navigate("win98")}>Website</p>
        <p onClick={() => navigate("win98-docs")}>backend-docs.jsx</p>
        <CollapsibleRepo repoName="portfolio4" path="/" setMainWindow={navigate} />
      </CollapsableDiv>
      {repoNames.map((repoName) => (
        <CollapsibleRepo
          repoName={repoName}
          path="/"
          key={repoName}
          setMainWindow={navigate}
        />
      ))}
    </div>
  );
}

export default SideBar;
