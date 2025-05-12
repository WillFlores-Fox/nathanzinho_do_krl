function calcularMedia() {
  const nota1 = parseFloat(document.getElementById('nota1').value);
  const nota2 = parseFloat(document.getElementById('nota2').value);
  const nota3 = parseFloat(document.getElementById('nota3').value);
  const nota4 = parseFloat(document.getElementById('nota4').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
    resultado.textContent = '⚠️ Por favor, preencha todas as notas.';
    return;
  }

  const media = (nota1 + nota2 + nota3 + nota4) / 4;

  let situacao = '';
  if (media >= 7) {
    situacao = '✅ Aprovado!';
  } else if (media >= 4) {
    situacao = '⚠️ Em Recuperação!';
  } else {
    situacao = '❌ Reprovado!';
  }

  resultado.innerHTML = `📊 Média: <strong>${media.toFixed(2)}</strong><br />${situacao}`;
}
