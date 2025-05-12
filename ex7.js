function adicionarItem() {
  const itemInput = document.getElementById('item');
  const itemTexto = itemInput.value.trim();
  const lista = document.getElementById('listaCompras');

  if (itemTexto === "") {
    return;
  }

  const li = document.createElement('li');
  li.textContent = itemTexto;

  const btnRemover = document.createElement('button');
  btnRemover.textContent = 'Remover';
  btnRemover.onclick = function () {
    lista.removeChild(li);
  };

  li.appendChild(btnRemover);
  lista.appendChild(li);
  itemInput.value = "";
}
