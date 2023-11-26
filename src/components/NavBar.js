import logo from "../assets/logo.svg";
import "../styles/navbar.scss";
import redirect from "../utils/redirect";

function NavBar({
  goHome,
  goBack,
  backDisabled,
  goForward,
  forwardDisabled,
  addText,
}) {
  return (
    <nav id="nav-bar">
      <img src={logo} alt="logo" onClick={goHome} />
      <p
        onClick={() => redirect("https://www.linkedin.com/in/jonzav/", addText)}
      >
        Linkedin
      </p>
      <p onClick={() => redirect("https://github.com/JonZavialov", addText)}>
        GitHub
      </p>
      <div id="search-bar-container">
        <p onClick={goBack} className={backDisabled ? "disabled" : ""}>
          ←
        </p>
        <p onClick={goForward} className={forwardDisabled ? "disabled" : ""}>
          →
        </p>
        <div id="search-bar">
          <span>🔎︎</span> My Portfolio
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
