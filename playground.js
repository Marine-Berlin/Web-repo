function runPlayground({ codeSelector, frameSelector, mode }) {
  const code = document.querySelector(codeSelector);
  const frame = document.querySelector(frameSelector);
  const runButton = document.querySelector('[data-action="run"]');

  const render = () => {
    const userCode = code.value;

    if (mode === 'html') {
      frame.srcdoc = userCode;
      return;
    }

    if (mode === 'css') {
      frame.srcdoc = `<!doctype html><html><head><style>${userCode}</style></head><body>
      <h1>Exemple CSS</h1>
      <p class="demo">Ce paragraphe sert à tester vos styles.</p>
      <button>Bouton test</button>
      </body></html>`;
      return;
    }

    if (mode === 'js') {
      frame.srcdoc = `<!doctype html><html><body>
      <h2 id="title">Zone de test JavaScript</h2>
      <button id="testButton">Clique-moi</button>
      <p id="result">Résultat...</p>
      <script>${userCode}<\/script>
      </body></html>`;
    }
  };

  runButton.addEventListener('click', render);
  render();
}
