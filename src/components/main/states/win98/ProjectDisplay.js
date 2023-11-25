import { useEffect, useState } from "react";
import "../../../../styles/mainstates/win98-display.scss";

function ProjectDisplay({ addText }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const initializeDate = new Date().getTime();

  useEffect(() => {
    addText("<p>Deploying Windows 98 Emulator...</p>");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <iframe
      id="project-display"
      src="https://computer.jonzav.me"
      title="JonZav Windows 98 Emulator"
      onLoad={() => {
        if (isLoaded) return;
        addText(
          `
            <br>
            <p class="green">Windows 98 Emulator successfully initialized in ${
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
