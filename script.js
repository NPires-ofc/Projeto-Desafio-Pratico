/* =====================================================
   Abertura / fechamento dos cards
   ===================================================== */
function toggle(head) {
    head.parentElement.classList.toggle('open');
}

window.addEventListener('DOMContentLoaded', () => {
    const first = document.querySelector('.card');
    if (first) first.classList.add('open');
});

let pyodideReadyPromise = null;

async function initPyodide() {
    if (!pyodideReadyPromise) {
        pyodideReadyPromise = (async () => {
            const pyodide = await loadPyodide();
            return pyodide;
        })();
    }
    return pyodideReadyPromise;
}

async function runPython(btn) {
    const codeBlock = btn.closest('.code-block');
    const codeEl = codeBlock.querySelector('code');
    const outputEl = codeBlock.querySelector('.output');

    outputEl.style.display = 'block';
    outputEl.classList.remove('error');
    outputEl.textContent = 'Conjurando...';

    btn.disabled = true;
    const originalText = btn.textContent;
    btn.textContent = '⏳ Conjurando...';

    try {
        const pyodide = await initPyodide();

        pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
        `);

        pyodide.runPython(codeEl.textContent);

        const saida = pyodide.runPython("sys.stdout.getvalue()");

        outputEl.textContent = (saida && saida.length)
            ? saida
            : '(o feitiço não produziu saída visível)';
    } catch (err) {
        outputEl.classList.add('error');
        outputEl.textContent = err.message || String(err);
    } finally {
        btn.disabled = false;
        btn.textContent = originalText;
    }
}
