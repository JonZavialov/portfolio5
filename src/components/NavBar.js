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
        <i
          onClick={goBack}
          className={
            backDisabled ? "fa fa-arrow-left disabled" : "fa fa-arrow-left"
          }
        ></i>
        <i
          onClick={goForward}
          className={
            forwardDisabled ? "fa fa-arrow-right disabled" : "fa fa-arrow-right"
          }
        ></i>
        <div id="search-bar">
          <i className="fa fa-search"></i>
          My Portfolio
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
