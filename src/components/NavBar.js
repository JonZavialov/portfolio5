import logo from "../assets/logo.svg";
import "../styles/navbar.scss";
import redirect from "../utils/redirect";

function NavBar({ goHome, addText }) {
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
      <div id="search-bar">
        <span>🔎︎</span> My Portfolio
      </div>
    </nav>
  );
}

export default NavBar;
