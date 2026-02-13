import "../../../styles/mainstates/resume.scss";
import resume from "../../../assets/resume.png";
import { useState } from "react";
import redirect from "../../../utils/redirect";

function Resume({ addToTerminal, goBack }) {
  const [loading, setLoading] = useState(true);

  document.title = "Jonathan Zavialov | Resume";

  return (
    <div id="resume-display">
      <div id="buttons-row">
        <button type="button" onClick={goBack}>
          <i className="fa fa-arrow-left"></i>
          Home
        </button>
        <button
          type="button"
          onClick={() => redirect("/JonathanZavialov-Resume.pdf", addToTerminal)}
        >
          Full Screen / Download
        </button>
      </div>
      {loading && <h1>Loading...</h1>}
      <img src={resume} alt="Resume" onLoad={() => setLoading(false)} loading="lazy" />
    </div>
  );
}

export default Resume;
