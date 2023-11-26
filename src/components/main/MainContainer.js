import Default from "./states/Default";
import Terminal from "./Terminal";
import Resume from "./states/Resume";
import Readme from "./states/win98/Readme";
import ProjectDisplay from "./states/win98/ProjectDisplay";

function MainContainer({ page, setPage, terminalText, addText }) {
  return (
    <div id="main-container">
      {(() => {
        switch (page) {
          case "resume":
            return <Resume setParent={setPage} />;
          case "win98-readme":
            return <Readme addText={addText} />;
          case "win98":
            return (
              <ProjectDisplay
                addText={addText}
                displayName="Windows 98 Emulator"
                URL="https://computer.jonzav.me"
              />
            );
          case "win98-docs":
            return (
              <ProjectDisplay
                addText={addText}
                displayName="JonZav API Documentation"
                URL="https://api.jonzav.me/"
              />
            );
          default:
            return <Default setParent={setPage} />;
        }
      })()}
      <Terminal addText={terminalText} />
    </div>
  );
}

export default MainContainer;
