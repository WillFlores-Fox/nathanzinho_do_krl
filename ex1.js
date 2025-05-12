function verificar() {
  const numero = parseInt(document.getElementById('numero').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(numero)) {
    resultado.textContent = '⚠️ Digite um número válido.';
    return;
  }

  if (numero % 2 === 0) {
    resultado.textContent = `O número ${numero} é Par.`;
  } else {
    resultado.textContent = `O número ${numero} é Ímpar.`;
  }
}
