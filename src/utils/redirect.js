function redirect(url, addToTerminal) {
  window.open(url, "_blank");
  addToTerminal(`<p>Opened <span class="blue">${url}</span> in new tab</p>`);
}

export default redirect;
