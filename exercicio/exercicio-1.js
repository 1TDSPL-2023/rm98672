// EXERCÍCIO 1 - mude a cor de fundo
function changeBackgroundColor() {
  document.body.style.backgroundColor = "lightgray";
}

// EXERCÍCIO 2 - adicione um item à lista
function addItem() {
  event.preventDefault();
  var newItem = document.createElement('li');
  var inputValue = document.getElementById('newItem').value;
  var textNode = document.createTextNode(inputValue);
  newItem.appendChild(textNode);
  document.getElementById('list').appendChild(newItem);
  document.getElementById('newItem').value = "";
}

// EXERCÍCIO 3 - altere a imagem
function changeImage() {
  var image = document.getElementById('Imagem');
  if (image.src.match("lfechado")) {
    image.src = "./img/laberto.jpg";
  } 
}

// EXERCÍCIO 4 - mostre uma mensagem
function displayMessage() {
  document.getElementById('menssagem').innerHTML = "Sabe onde qual é a fonte mágica?";
}

// EXERCÍCIO 5 - Esconda um elemento 
function hideElement() {
  var element = document.getElementById('elemento');
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}