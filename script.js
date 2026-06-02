let pyodide = null;
const statusLabel = document.getElementById("status");
const outputArea = document.getElementById("outputArea");
const runButton = document.getElementById("runButton");
const clearButton = document.getElementById("clearButton");
const codeInput = document.getElementById("codeInput");

function appendOutput(text) {
  outputArea.textContent += text;
  outputArea.scrollTop = outputArea.scrollHeight;
}

async function configurePyodide() {
  statusLabel.textContent = "Loading Python runtime...";
  try {
    pyodide = await loadPyodide({ indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/" });
    statusLabel.textContent = "Installing NumPy...";
    await pyodide.loadPackage(["numpy"]);

    pyodide.registerJsModule("output", {
      write: (text) => appendOutput(text),
      flush: () => {}
    });

    await pyodide.runPythonAsync(`
import sys
import output
sys.stdout = output
sys.stderr = output
`);

    statusLabel.textContent = "Ready. Enter code and click Run.";
    runButton.disabled = false;
  } catch (error) {
    statusLabel.textContent = "Failed to load runtime.";
    appendOutput("Error loading Pyodide: " + error + "\n");
    console.error(error);
  }
}

async function runCode() {
  if (!pyodide) {
    statusLabel.textContent = "Runtime is not ready yet.";
    return;
  }

  const code = codeInput.value;
  outputArea.textContent = "";
  statusLabel.textContent = "Executing code...";

  try {
    const result = await pyodide.runPythonAsync(code);
    if (result !== undefined && result !== null) {
      appendOutput(String(result) + "\n");
    }
    statusLabel.textContent = "Execution completed.";
  } catch (error) {
    appendOutput(String(error) + "\n");
    statusLabel.textContent = "Execution failed.";
  }
}

runButton.addEventListener("click", runCode);
clearButton.addEventListener("click", () => {
  outputArea.textContent = "";
});

configurePyodide();
