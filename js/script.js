// atrelando o elemento click ao elemento h2
const h2Element = document.getElementById("titulo");

h2Element.addEventListener("click", ()=>{
    //Math função matemática...
    //Os métodos floor, round e ceil arredondam os números passados
    //O método random retorna um número entre 0 e 1. Ex: 0.123
    let r = "";
    let g = "";
    let b = "";

    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);


    this.textContent = "NOVO TÍTULO";
    //h2Element.setAttribute("style","color:rgb("+r+","+g+","+b+");");
    h2Element.setAttribute("style",`color:rgb(${r},${g},${b});`);
    h2Element.textContent = "NOVO TITULO";
});

// converter HTMLElements em Array
const aElements = document.getElementsByTagName("a");
console.log(aElements);

const aElementsArray = [...aElements];
console.log(aElementsArray);

// imprimindo atributos dos elementos recuperados
aElementsArray.forEach((a) => {
    console.log(a.innerHTML);
})

