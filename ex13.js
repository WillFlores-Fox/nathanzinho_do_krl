function gerarSenha() {
  const tamanho = parseInt(document.getElementById('tamanho').value);
  const campoSenha = document.getElementById('senha');

  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()_+-=';
  let senha = '';

  if (isNaN(tamanho) || tamanho < 4 || tamanho > 32) {
    campoSenha.value = '⚠️ Escolha entre 4 e 32 caracteres.';
    return;
  }

  for (let i = 0; i < tamanho; i++) {
    const index = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[index];
  }

  campoSenha.value = senha;
}
