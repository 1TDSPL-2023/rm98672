// Construindo um Banco de Dados
// let listaDeusuarios = [
//     {
//         nomeCompleto : "Iza Santista",
//         emailUsuario : "izinha@gmail.com",
//         senhaUsuario : "123456"
//     },
//     {
//         nomeCompleto : "Paulito Cabuloso",
//         emailUsuario : "pedro@gmail.com",
//         senhaUsuario : "123456"
//     },
//     {
//         nomeCompleto : "Carlos Magno",
//         emailUsuario : "grandecarlitos@gmail.com",
//         senhaUsuario : "123456"
//     },
//     {
//         nomeCompleto : "Luzia Fonzinha",
//         emailUsuario : "lufolufo@gmail.com",
//         senhaUsuario : "123456"
//     },
//     {
//         nomeCompleto : "Co Pontes Branco",
//         emailUsuario : "cpb@gmail.com",
//         senhaUsuario : "123456"
//     }
// ];


// Adicionando a lista de usuários no local-storage
// Ele só armazena dados do tipo string - bits e bytes
//localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));

// Recuperando os lemetos input do form
const inputEmail = document.querySelector("#idEmail");
const inputSenha = document.querySelector("#idPass");
const msgStatus = document.querySelector("#msg");

//CAPTURA DE TODOS OS ELEMENTOS
addEventListener("click",(evt)=>{

    //CRIANDO UM OBJETO PARA ARMAZENAR OS DADOS DO FORM!
    let usuarioLogado = {
        emailUsuarioLogado : inputEmail.value,
        senhaUsuarioLogado : inputSenha.value
    }

    let usuarioValidado = {};

    // Recuperando um elemento do DOM
    if(evt.target.id == "btnSubmit"){

    // Recuperando do local-storage a lista de usuários
    let listaDeUsuarios = JSON.parse(localStorage.getItem("listaUser"));

    for (let x = 0; x < listaDeusuarios.length; x ++) {
            if (usuarioLogado.emailUsuarioLogado == listaDeusuarios[x].emailUsuario && usuarioLogado.senhaUsuarioLogado == listaDeusuarios[x].senhaUsuario) {
                // Passando para o objeto usuarioValidado o objeto que foi validado
                usuarioValidado = listaDeusuarios[x];
                break; 
            }
       }

       
       if(usuarioLogado.emailUsuarioLogado == usuarioValidado.emailUsuario && usuarioLogado.senhaUsuarioLogado == usuarioValidado.senhaUsuario) {
            msgStatus.setAttriute("style", "color: green");
            msgStatus.innerHTML = `<span><strong>O usuário ${usuarioValidado.nomeCompleto} logou com sucesso!</strong></span>`
            
            // Redirect
            window.location.href = "../index.html";

        }else{
            msgStatus.setAttriute("style", "color: red");
            msgStatus.innerHTML = "<span><strong>Nome de usuário ou senha inválidos...</strong></span>";
       }

    }
});