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
        <p onClick={goBack}>
          <i className="fa fa-arrow-left"></i>
          Back
        </p>
        <p onClick={() => redirect('/resume.pdf', addToTerminal)}>Full Screen</p>
      </div>
      {loading && <h1>Loading...</h1>}
      <img src={resume} alt="resume" onLoad={() => setLoading(false)} />
    </div>
  );
}

export default Resume;
