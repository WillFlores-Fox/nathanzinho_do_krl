let votos = [0, 0, 0]; // Maçã, Banana, Uva

function votar(opcao) {
  votos[opcao]++;
  mostrarResultados();
}

function mostrarResultados() {
  const total = votos.reduce((a, b) => a + b, 0);
  const resultado = document.getElementById('resultado');

  if (total === 0) {
    resultado.innerHTML = 'Nenhum voto ainda.';
    return;
  }

  const nomes = ['Maçã', 'Banana', 'Uva'];
  const cores = ['#ef5350', '#fdd835', '#7e57c2'];
  let html = '';

  votos.forEach((voto, i) => {
    const percent = ((voto / total) * 100).toFixed(1);
    html += `
      <p><strong>${nomes[i]}</strong>: ${voto} voto(s) - ${percent}%</p>
      <div class="barra" style="width:${percent}%; background:${cores[i]}"></div>
    `;
  });

  resultado.innerHTML = html;
}
