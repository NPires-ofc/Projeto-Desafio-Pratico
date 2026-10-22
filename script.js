/* =====================================================
   Abertura / fechamento dos cards
   ===================================================== */
function toggle(head) {
    head.parentElement.classList.toggle('open');
}

// Abre o primeiro card por padrão ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    const first = document.querySelector('.card');
    if (first) first.classList.add('open');
});

/* =====================================================
   Execução de Python no navegador via Pyodide
   (funciona abrindo o .html direto, sem servidor)
   ===================================================== */

// Guarda a promise do Pyodide (evita recarregar a cada clique)
let pyodideReadyPromise = null;

// Inicializa o Pyodide só na primeira execução
async function initPyodide() {
    if (!pyodideReadyPromise) {
        pyodideReadyPromise = (async () => {
            const pyodide = await loadPyodide();
            return pyodide;
        })();
    }
    return pyodideReadyPromise;
}

// Executa o código Python que está dentro do <code> do bloco
async function runPython(btn) {
    const codeBlock = btn.closest('.code-block');
    const codeEl = codeBlock.querySelector('code');
    const outputEl = codeBlock.querySelector('.output');

    // Mostra a área de saída
    outputEl.style.display = 'block';
    outputEl.classList.remove('error');
    outputEl.textContent = 'Conjurando...';

    // Trava o botão enquanto executa
    btn.disabled = true;
    const originalText = btn.textContent;
    btn.textContent = '⏳ Conjurando...';

    try {
        const pyodide = await initPyodide();

        // Redireciona o stdout do Python para uma StringIO interna
        pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
        `);

        // Executa o código do bloco
        pyodide.runPython(codeEl.textContent);

        // Recupera tudo que foi impresso com print()
        const saida = pyodide.runPython("sys.stdout.getvalue()");

        outputEl.textContent = (saida && saida.length)
            ? saida
            : '(o feitiço não produziu saída visível)';
    } catch (err) {
        // Mostra erros do Python com destaque vermelho
        outputEl.classList.add('error');
        outputEl.textContent = err.message || String(err);
    } finally {
        // Libera o botão de novo
        btn.disabled = false;
        btn.textContent = originalText;
    }
}