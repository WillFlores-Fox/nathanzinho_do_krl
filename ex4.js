function calcular() {
  const numero1 = parseFloat(document.getElementById('numero1').value);
  const numero2 = parseFloat(document.getElementById('numero2').value);
  const operacao = document.getElementById('operacao').value;
  const resultado = document.getElementById('resultado');

  if (isNaN(numero1) || isNaN(numero2)) {
    resultado.textContent = '⚠️ Preencha ambos os números corretamente!';
    return;
  }

  let res;
  switch (operacao) {
    case 'soma':
      res = numero1 + numero2;
      break;
    case 'subtracao':
      res = numero1 - numero2;
      break;
    case 'multiplicacao':
      res = numero1 * numero2;
      break;
    case 'divisao':
      if (numero2 === 0) {
        resultado.textContent = '⚠️ Não é possível dividir por zero!';
        return;
      }
      res = numero1 / numero2;
      break;
  }

  resultado.textContent = `Resultado: ${res}`;
}
