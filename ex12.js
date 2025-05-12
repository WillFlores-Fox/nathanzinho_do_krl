let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo = null;

function formatar(valor) {
  return valor < 10 ? `0${valor}` : valor;
}

function atualizarDisplay() {
  document.getElementById('timer').textContent =
    `${formatar(horas)}:${formatar(minutos)}:${formatar(segundos)}`;
}

function iniciar() {
  if (intervalo) return; // impede múltiplos intervalos

  intervalo = setInterval(() => {
    segundos++;
    if (segundos === 60) {
      segundos = 0;
      minutos++;
    }
    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
    atualizarDisplay();
  }, 1000);
}

function pausar() {
  clearInterval(intervalo);
  intervalo = null;
}

function zerar() {
  clearInterval(intervalo);
  intervalo = null;
  segundos = 0;
  minutos = 0;
  horas = 0;
  atualizarDisplay();
}
