import "../../../styles/mainstates/resume.scss";
import resume from "../../../assets/resume.png";
import { useState } from "react";

function Resume() {
  const [loading, setLoading] = useState(true);

  document.title = "Jonathan Zavialov | Resume";

  return (
    <div id="resume-display">
      {loading && <h1>Loading...</h1>}
      <img src={resume} alt="resume" onLoad={() => setLoading(false)} />
    </div>
  );
}

export default Resume;
