import Default from "./states/Default";
import Terminal from "./Terminal";
import Resume from "./states/Resume";
import Readme from "./states/win98/Readme";
import ProjectDisplay from "./states/win98/ProjectDisplay";
import FileView from "./states/code/FileView";

function MainContainer({ page, setPage, terminalText, addText }) {
  const pages = {
    "home": <Default setParent={setPage} />,
    "resume": <Resume setParent={setPage} addToTerminal={addText} goBack={() => setPage("home")} />,
    "win98-readme": <Readme addText={addText} />,
    "win98": (
      <ProjectDisplay
        addText={addText}
        displayName="Windows 98 Emulator"
        URL="https://computer.jonzav.me"
      />
    ),
    "win98-docs": (
      <ProjectDisplay
        addText={addText}
        displayName="JonZav API Documentation"
        URL="https://api.jonzav.me/"
      />
    ),
    "code": <FileView path={page.split(" ")[1]} />,
  };

  return (
    <div id="main-container">
      {pages[page.split(" ")[0]]}
      <Terminal addText={terminalText} />
    </div>
  );
}

export default MainContainer;
