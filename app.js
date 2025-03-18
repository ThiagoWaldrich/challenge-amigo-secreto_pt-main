//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome == "") {
        alert("Por favor insira um nome");
        return;
    }
    amigos.push(nome);
    atualizarLista();
    input.value = "";

    function atualizarLista() {
        let list = document.getElementById("listaAmigos");
        list.innerHTML = "";

        amigos.forEach(nome => {
            let li = document.createElement("li")
            li.textContent = nome;
            list.appendChild(li)
        })
    }
}