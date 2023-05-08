function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightgray";
  }
  
  function addItem() {
    event.preventDefault();
    var newItem = document.createElement('li');
    var inputValue = document.getElementById('newItem').value;
    var textNode = document.createTextNode(inputValue);
    newItem.appendChild(textNode);
    document.getElementById('list').appendChild(newItem);
    document.getElementById('newItem').value = "";
  }
  
  
  function changeImage() {
    var image = document.getElementById('Imagem');
    if (image.src.match("lfechado")) {
      image.src = "./img/laberto.jpg";
    } 
  }

  function displayMessage() {
    document.getElementById('menssagem').innerHTML = "Sabe onde qual é a fonte mágica?";
  }
  

  function hideElement() {
    var element = document.getElementById('elemento');
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }