function mudarCor(cor) {
  const luzes = {
    vermelho: document.getElementById('vermelho'),
    amarelo: document.getElementById('amarelo'),
    verde: document.getElementById('verde')
  };

  for (let key in luzes) {
    luzes[key].style.backgroundColor = '#555';
  }

  if (cor === 'vermelho') {
    luzes.vermelho.style.backgroundColor = '#f44336';
  } else if (cor === 'amarelo') {
    luzes.amarelo.style.backgroundColor = '#ffc107';
  } else if (cor === 'verde') {
    luzes.verde.style.backgroundColor = '#4caf50';
  }
}
