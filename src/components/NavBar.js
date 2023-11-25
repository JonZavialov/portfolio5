import logo from "../assets/logo.svg";
import "../styles/navbar.scss";

function NavBar() {
  return (
    <nav id="nav-bar">
      <img src={logo} alt="logo" onClick={() => (window.location.href = "/")} />
      <a href="https://www.linkedin.com/in/jonzav/">Linkedin</a>
      <a href="https://github.com/JonZavialov">GitHub</a>
      <div id="search-bar">
        <span>🔎︎</span> My Portfolio
      </div>
    </nav>
  );
}

export default NavBar;
