import Default from "./states/Default";
import Terminal from "./Terminal";
import Resume from "./states/Resume";
import { useEffect, useState } from "react";

function MainContainer() {
  const [component, setComponent] = useState("");
  const [additionalTerminalText, setAdditionalTerminalText] = useState("");

  useEffect(() => {
    if (!component) return;
    setAdditionalTerminalText(`
      <p>Navigated to <span class="green">${component}</span> page</p>
    `);
  }, [component]);

  return (
    <div id="main-container">
      {(() => {
        switch (component) {
          case "resume":
            return <Resume setParent={setComponent} />;
          default:
            return <Default setParent={setComponent} />;
        }
      })()}
      <Terminal addText={additionalTerminalText} />
    </div>
  );
}

export default MainContainer;
