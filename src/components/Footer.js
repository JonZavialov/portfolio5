import "../styles/footer.scss";

function Footer() {
  return (
    <div id="footer">
      <p>© Jonathan Zavialov {new Date().getFullYear()}</p>
      <p
        className="link"
        onClick={() =>
          window.open("https://github.com/JonZavialov/portfolio5", "_blank")
        }
      >
        View Source
      </p>
      <p
        className="link"
        onClick={() => window.open("https://code.visualstudio.com/", "_blank")}
      >
        Inspired by Visual Studio Code
      </p>
    </div>
  );
}

export default Footer;
