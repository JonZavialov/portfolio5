import "../styles/footer.scss";
import redirect from "../utils/redirect";

function Footer({ addText }) {
  return (
    <div id="footer">
      <p>© Jonathan Zavialov {new Date().getFullYear()}</p>
      <p
        className="link"
        onClick={() =>
          redirect("https://github.com/JonZavialov/portfolio5", addText)
        }
      >
        View Source
      </p>
      <p
        className="link"
        onClick={() => redirect("https://code.visualstudio.com/", addText)}
      >
        Inspired by Visual Studio Code
      </p>
    </div>
  );
}

export default Footer;
