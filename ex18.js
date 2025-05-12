function validarCadastro() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const resultado = document.getElementById('resultado');

  // Validação simples
  if (!nome || !email || !senha) {
    resultado.textContent = '⚠️ Todos os campos são obrigatórios.';
    resultado.classList.add('invalid');
    return;
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    resultado.textContent = '⚠️ E-mail inválido.';
    resultado.classList.add('invalid');
    return;
  }

  if (senha.length < 6) {
    resultado.textContent = '⚠️ A senha deve ter pelo menos 6 caracteres.';
    resultado.classList.add('invalid');
    return;
  }

  resultado.textContent = '✅ Cadastro realizado com sucesso!';
  resultado.classList.remove('invalid');
  resultado.classList.add('valid');
}
