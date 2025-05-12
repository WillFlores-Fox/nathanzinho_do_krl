function gerarTabuada() {
  const numero = parseInt(document.getElementById('numero').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(numero) || numero <= 0) {
    resultado.textContent = '⚠️ Digite um número válido!';
    return;
  }

  let tabuada = '';
  for (let i = 1; i <= 10; i++) {
    tabuada += `${numero} x ${i} = ${numero * i}\n`;
  }

  resultado.textContent = tabuada;
}
