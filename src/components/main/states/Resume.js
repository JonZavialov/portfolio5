import "../../../styles/mainstates/resume.scss";

function Resume({ setParent }) {
  return (
    <div id="resume-container">
      <p onClick={() => setParent("default")} id="back-button">
        ← Back
      </p>
    </div>
  );
}

export default Resume;
