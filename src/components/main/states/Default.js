import "../../../styles/mainstates/default.scss";
import logo from "../../../assets/logo.svg";

function Default() {
  return (
    <div id="default-display">
      <div id="content">
        <img src={logo} alt="Jonathan Zavialov" />
        <h1>
          Hi, I'm <span>Jon Zavialov</span>
        </h1>
        <h1>I design and develop websites</h1>
      </div>
    </div>
  );
}

export default Default;
