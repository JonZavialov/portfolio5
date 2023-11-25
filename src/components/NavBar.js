import logo from "../assets/logo.svg";
import "../styles/navbar.scss";

function NavBar({ goHome }) {
  return (
    <nav id="nav-bar">
      <img src={logo} alt="logo" onClick={goHome} />
      <a
        href="https://www.linkedin.com/in/jonzav/"
        target="_blank"
        rel="noreferrer"
      >
        Linkedin
      </a>
      <a href="https://github.com/JonZavialov" target="_blank" rel="noreferrer">
        GitHub
      </a>
      <div id="search-bar">
        <span>🔎︎</span> My Portfolio
      </div>
    </nav>
  );
}

export default NavBar;
