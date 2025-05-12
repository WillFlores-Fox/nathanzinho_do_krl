function sortear() {
  const min = parseInt(document.getElementById('min').value);
  const max = parseInt(document.getElementById('max').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(min) || isNaN(max) || min >= max) {
    resultado.textContent = '⚠️ Insira valores válidos.';
    return;
  }

  const sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
  resultado.textContent = `Número sorteado: ${sorteado}`;
}
