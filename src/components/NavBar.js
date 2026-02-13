import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.svg";
import "../styles/navbar.scss";
import redirect from "../utils/redirect";
import SideBar from "./sidebar/SideBar";

const pageLinks = [
  { id: "home", label: "Home", page: "home" },
  { id: "resume", label: "Resume", page: "resume" },
  { id: "segmint", label: "Segmint", page: "segmint" },
  { id: "win98-readme", label: "Win98 README", page: "win98-readme" },
  { id: "win98", label: "Win98 Website", page: "win98" },
  { id: "win98-docs", label: "Win98 Docs", page: "win98-docs" },
];

function NavBar({
  currentPage,
  goHome,
  goBack,
  backDisabled,
  goForward,
  forwardDisabled,
  addText,
  changeMain,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      const firstFocusable = drawerRef.current?.querySelector("button, a");
      firstFocusable?.focus();
    } else {
      document.body.style.overflow = originalOverflow;
    }

    function handleKeyDown(event) {
      if (!menuOpen) return;

      if (event.key === "Escape") {
        setMenuOpen(false);
      }

      if (event.key === "Tab") {
        const focusable = drawerRef.current?.querySelectorAll("button, a");
        if (!focusable || focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <nav id="nav-bar">
        <button
          className="icon-button mobile-only"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
        >
          <i className="fa fa-bars"></i>
        </button>

        <img src={logo} alt="Jonathan Zavialov logo" onClick={goHome} />

        <div id="desktop-links">
          <p
            onClick={() => redirect("https://www.linkedin.com/in/jonzav/", addText)}
          >
            Linkedin
          </p>
          <p onClick={() => redirect("https://github.com/JonZavialov", addText)}>
            GitHub
          </p>
        </div>

        <div id="search-bar-container">
          <button
            onClick={() => {
              if (!backDisabled) goBack();
            }}
            className={backDisabled ? "icon-button disabled" : "icon-button"}
            aria-label="Go back"
          >
            <i className="fa fa-arrow-left"></i>
          </button>
          <button
            onClick={() => {
              if (!forwardDisabled) goForward();
            }}
            className={forwardDisabled ? "icon-button disabled" : "icon-button"}
            aria-label="Go forward"
          >
            <i className="fa fa-arrow-right"></i>
          </button>
          <div id="search-bar">My Portfolio</div>
        </div>
      </nav>

      <div
        className={`mobile-nav-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`mobile-nav-drawer ${menuOpen ? "open" : ""}`}
        ref={drawerRef}
        aria-hidden={!menuOpen}
      >
        <div className="drawer-header">
          <p>Menu</p>
          <button
            className="icon-button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <i className="fa fa-times"></i>
          </button>
        </div>

        <div className="drawer-links">
          {pageLinks.map((pageLink) => (
            <button
              key={pageLink.id}
              className={currentPage === pageLink.page ? "active" : ""}
              onClick={() => {
                changeMain(pageLink.page);
                setMenuOpen(false);
              }}
            >
              {pageLink.label}
            </button>
          ))}
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
          <SideBar changeMain={changeMain} inDrawer closeDrawer={() => setMenuOpen(false)} />
        </div>
      </aside>
    </>
  );
}

export default NavBar;
