import Default from "./states/Default";
import Terminal from "./Terminal";
import Resume from "./states/Resume";

function MainContainer({ page, setPage, terminalText }) {
  return (
    <div id="main-container">
      {(() => {
        switch (page) {
          case "resume":
            return <Resume setParent={setPage} />;
          default:
            return <Default setParent={setPage} />;
        }
      })()}
      <Terminal addText={terminalText} />
    </div>
  );
}

export default MainContainer;
