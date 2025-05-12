function calcularNotas() {
  let valor = parseInt(document.getElementById('valor').value);
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  if (isNaN(valor) || valor <= 0) {
    resultado.textContent = '⚠️ Digite um valor válido.';
    return;
  }

  const notas = [100, 50, 10, 1];
  let saida = '';

  notas.forEach(nota => {
    let qtd = Math.floor(valor / nota);
    if (qtd > 0) {
      saida += `💵 ${qtd} nota(s) de R$${nota}<br>`;
      valor %= nota;
    }
  });

  resultado.innerHTML = saida;
}
