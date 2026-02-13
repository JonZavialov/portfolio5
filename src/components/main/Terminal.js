import { useEffect } from "react";
import "../../styles/terminal.scss";

function Terminal({ addText }) {
  const content = `
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
  `;

  useEffect(() => {
    const terminal = document.getElementById("terminal");
    if (terminal) terminal.scrollTop = terminal.scrollHeight;
  }, [addText]);

  return (
    <div
      id="terminal"
      dangerouslySetInnerHTML={{ __html: content + addText }}
    ></div>
  );
}

export default Terminal;
