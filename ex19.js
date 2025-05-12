let numeroCorreto = Math.floor(Math.random() * 100) + 1; // Número aleatório entre 1 e 100

function adivinhar() {
  const palpite = parseInt(document.getElementById('palpite').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    resultado.textContent = '⚠️ Digite um número válido entre 1 e 100.';
    return;
  }

  if (palpite < numeroCorreto) {
    resultado.textContent = '🔽 Tente um número maior.';
  } else if (palpite > numeroCorreto) {
    resultado.textContent = '🔼 Tente um número menor.';
  } else {
    resultado.textContent = `🎉 Parabéns! Você acertou o número ${numeroCorreto}!`;
    numeroCorreto = Math.floor(Math.random() * 100) + 1; // Sorteia um novo número
  }
}
