function verificar() {
  const texto = document.getElementById('texto').value;
  const resultado = document.getElementById('resultado');

  const fraseFormatada = texto
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  const reverso = fraseFormatada.split('').reverse().join('');

  if (fraseFormatada.length === 0) {
    resultado.textContent = '⚠️ Digite algo válido.';
    return;
  }

  if (fraseFormatada === reverso) {
    resultado.textContent = '✅ É um palíndromo!';
  } else {
    resultado.textContent = '❌ Não é um palíndromo.';
  }
}
