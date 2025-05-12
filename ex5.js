function verificarIdade() {
  const anoNascimento = parseInt(document.getElementById('anoNascimento').value);
  const resultado = document.getElementById('resultado');
  const anoAtual = new Date().getFullYear();
  const idade = anoAtual - anoNascimento;

  if (isNaN(anoNascimento) || anoNascimento > anoAtual) {
    resultado.textContent = '⚠️ Digite um ano válido!';
    return;
  }

  let classificacao = '';

  if (idade < 18) {
    classificacao = 'Menor de idade';
  } else if (idade >= 18 && idade < 60) {
    classificacao = 'Adulto';
  } else {
    classificacao = 'Idoso';
  }

  resultado.textContent = `Idade: ${idade} anos. Classificação: ${classificacao}`;
}
