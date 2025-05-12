function contar() {
  const inicio = parseInt(document.getElementById('inicio').value);
  const final = parseInt(document.getElementById('final').value);
  const passo = parseInt(document.getElementById('passo').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(inicio) || isNaN(final) || isNaN(passo) || passo === 0) {
    resultado.textContent = '⚠️ Preencha todos os campos corretamente!';
    return;
  }

  let contagem = '';
  if (inicio < final) {
    for (let i = inicio; i <= final; i += passo) {
      contagem += `${i} `;
    }
  } else {
    for (let i = inicio; i >= final; i -= passo) {
      contagem += `${i} `;
    }
  }

  resultado.textContent = `Contagem: ${contagem}`;
}
