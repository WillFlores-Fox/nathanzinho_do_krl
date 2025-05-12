function contar() {
  const texto = document.getElementById('texto').value.trim();
  const resultado = document.getElementById('resultado');

  if (texto.length === 0) {
    resultado.textContent = 'Digite algum texto.';
    return;
  }

  const palavras = texto.split(/\s+/).filter(p => p.length > 0);
  const letras = texto.replace(/\s+/g, '').length;

  resultado.innerHTML = `
    🧾 Palavras: <strong>${palavras.length}</strong><br/>
    🔡 Letras (sem espaços): <strong>${letras}</strong>
  `;
}
