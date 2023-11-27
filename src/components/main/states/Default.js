import "../../../styles/mainstates/default.scss";
import logo from "../../../assets/logo.svg";
import ReactTypingEffect from "react-typing-effect";

function Default({ setParent }) {
  document.title = "Jonathan Zavialov | Home";

  return (
    <div id="default-display">
      <div id="content">
        <img src={logo} alt="Jonathan Zavialov" />
        <h1>
          Hi, I'm <span>Jon Zavialov</span>
        </h1>
        <ReactTypingEffect
          id="descriptor"
          staticText="I design and develop"
          text={["Websites", "Apps", "Games", "UI/UX", "Software", "APIs"]}
          speed={100}
          eraseSpeed={200}
          eraseDelay={800}
          typingDelay={300}
        />
        <h2>
          View my{" "}
          <span id="resume-view-click" onClick={() => setParent("resume")}>
            resume
          </span>
        </h2>
      </div>
    </div>
  );
}

export default Default;
