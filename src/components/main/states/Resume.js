import "../../../styles/mainstates/resume.scss";
import resume from "../../../assets/resume.png";
import { useState } from "react";
import redirect from "../../../utils/redirect";

function Resume({ addToTerminal, goBack, mobileView }) {
  const [loading, setLoading] = useState(true);

  document.title = "Jonathan Zavialov | Resume";

  return (
    <div id="resume-display">
      <div id="buttons-row">
        {mobileView && (
          <p onClick={goBack}>
            <i className="fa fa-arrow-left"></i>
            Back
          </p>
        )}
        <p
          onClick={() =>
            redirect("/JonathanZavialov-Resume.pdf", addToTerminal)
          }
        >
          Full Screen / Download
        </p>
      </div>
      {loading && <h1>Loading...</h1>}
      <img src={resume} alt="resume" onLoad={() => setLoading(false)} />
    </div>
  );
}

export default Resume;
