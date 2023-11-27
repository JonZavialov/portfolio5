import { useEffect, useState } from "react";
import "../../../../styles/mainstates/win98-display.scss";

function ProjectDisplay({ addText, displayName, URL }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const initializeDate = new Date().getTime();

  document.title = "Jonathan Zavialov | " + displayName;

  useEffect(() => {
    addText(`<p>Deploying ${displayName}...</p>`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayName]);

  return (
    <iframe
      id="project-display"
      src={URL}
      title={displayName}
      onLoad={() => {
        if (isLoaded) return;
        addText(
          `
            <br>
            <p class="green">${displayName} successfully initialized in ${
            new Date().getTime() - initializeDate
          }ms</p>
          `
        );
        setIsLoaded(true);
      }}
    ></iframe>
  );
}

export default ProjectDisplay;
