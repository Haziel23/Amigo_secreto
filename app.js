// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];
let sorteado = false;

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    if (nombre === "") {
        alert('Debes ingresar un nombre');
        return;
    }

    friends.push(nombre);
    updateFriends();

    document.getElementById('amigo').value = ""; 
    document.getElementById('amigo').focus();
}

function updateFriends() {
    let list = document.getElementById('listaAmigos');
    list.innerHTML = "";

    for (let i = 0; i < friends.length; i++) {
        let li = document.createElement('li');
        li.textContent = friends[i];
        list.appendChild(li);
    }
}

function manageSorteo() {
    if (sorteado) {
        restartLottery();
    } else {
        randomFriend();
    }
}

function randomFriend() {
    if (listaAmigos.length === 0) {
        alert("No hay nombres para sortear.");
        return;
    }

    let random = Math.floor(Math.random() * friends.length);
    let friend = friends[random];

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = `<li>El amigo secreto es: ❗❗❗ <strong>${friend}</strong> ❗❗❗</li>`;

    let boton = document.querySelector(".button-draw");
    boton.innerHTML = `<img src="assets/restart_icon.png" alt=""> Reiniciar sorteo`;
    sorteado = true;
}

function restartLottery() {
    friends = [];
    updateFriends();

    document.getElementById("resultado").innerHTML = "";

    let btn = document.querySelector(".button-draw");
    btn.innerHTML = `<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Sortear amigo`;
    sorteado = false;
}