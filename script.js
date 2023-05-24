// Obtendo referências aos elementos HTML
var itemInput = document.getElementById("itemInput");
var adicionarButton = document.getElementById("adicionarButton");
var listaItens = document.getElementById("listaItens");

// Função para adicionar um item à lista
function adicionarItem() {
  var itemTexto = itemInput.value;
  if (itemTexto.trim() !== "") {
    var novoItem = document.createElement("li");
    novoItem.textContent = itemTexto;
    listaItens.appendChild(novoItem);
    itemInput.value = "";
  }
}

// Função para remover um item da lista
function removerItem(event) {
  var item = event.target;
  listaItens.removeChild(item);
}

// Adicionando um evento de clique ao botão de adicionar
adicionarButton.addEventListener("click", adicionarItem);

// Adicionando um evento de clique a cada item da lista para removê-lo
listaItens.addEventListener("click", removerItem);
