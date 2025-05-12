function converter() {
  const celsius = parseFloat(document.getElementById('celsius').value);
  const tipo = document.getElementById('tipo').value;
  const resultado = document.getElementById('resultado');

  if (isNaN(celsius)) {
    resultado.textContent = '⚠️ Digite uma temperatura válida.';
    return;
  }

  let convertido;
  if (tipo === 'fahrenheit') {
    convertido = (celsius * 9 / 5) + 32;
    resultado.textContent = `${celsius}°C = ${convertido.toFixed(2)}°F`;
  } else if (tipo === 'kelvin') {
    convertido = celsius + 273.15;
    resultado.textContent = `${celsius}°C = ${convertido.toFixed(2)}K`;
  }
}
