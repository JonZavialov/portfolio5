import "../../styles/terminal.scss";
import { useEffect, useState, useRef } from "react";

function Terminal({ addText }) {
  const terminal = useRef(null);
  const [content, setContent] = useState(`
    <p class="green">Compiled successfully!</p>
    <br>
    <p>You can now view portfolio in the browser.</p>
    <br>
    <p>Local:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${window.location.href}</p>
    <br>
    <p>Note that the development build is not optimized.</p>
    <p>To create a production build, use <span class="blue">npm run build</span>.</p>
    <br>
    <p>webpack compiled <span class="green">successfully</span></p>
    <br>
  `);

  useEffect(() => {
    setContent((prevContent) => {
      return prevContent + addText;
    });

    terminal.current.scrollTop = terminal.current.scrollHeight;
  }, [addText]);

  return (
    <div
      id="terminal"
      ref={terminal}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
}

export default Terminal;
