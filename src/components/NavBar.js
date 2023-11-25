import logo from "../assets/logo.svg";
import "../styles/navbar.scss";

function NavBar() {
  return (
    <nav id="nav-bar">
      <img src={logo} alt="logo" onClick={() => (window.location.href = "/")} />
      <div id="search-bar">
        <span>🔎︎</span> My Portfolio
      </div>
    </nav>
  );
}

export default NavBar;
