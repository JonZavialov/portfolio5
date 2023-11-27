import "../../../../styles/mainstates/win98-readme.scss";
import redirect from "../../../../utils/redirect";
import ReadmeBadge from "./ReadmeBadge";
import win98Logo from "../../../../assets/win98.png";

function Readme({ addText }) {
  document.title = "Jonathan Zavialov | Windows 98 README";

  return (
    <div id="readme">
      <div id="header-row">
        <img src={win98Logo} alt="Windows 98 logo" />
        <h1>Windows 98 Emulator</h1>
      </div>
      <hr />
      <div id="badge-row">
        <ReadmeBadge name="Total Lines" value="7395" />
        <ReadmeBadge name="Repo Size" value="7.07 MB" />
        <ReadmeBadge name="Commit Activity" value="0/month" />
      </div>
      <p className="center">
        A windows 98 emulator build with vanilla JavaScript, HTML, and CSS.
      </p>
      <h3>Thank you for viewing this project!</h3>
      <p>
        This project was an earlier version of my portfolio website. The lines
        of code count is the combined total for both backend and frontend. It
        was built throughout my junior and senior years of highschool, using
        vanilla JS on the frontend with a custom API using Express.js and Node
        on the backend.
      </p>
      <p>
        This project features a few rudimentary games, an audio recorder, chat
        room, and some other cool features!
      </p>
      <p>
        View the full README&nbsp;
        <span
          className="link"
          onClick={() =>
            redirect("https://github.com/JonZavialov/portfolio4", addText)
          }
        >
          here
        </span>
        , or run the project by navigating to&nbsp;
        <span className="filename">index.js</span>. You can also access the
        documentation for the backend API by going to&nbsp;
        <span className="filename">backend-docs.jsx</span>.
      </p>
    </div>
  );
}

export default Readme;
