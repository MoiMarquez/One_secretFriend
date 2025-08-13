// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friendsList = [];

function addFriend() {
    let friendValue = document.getElementById("friendValue").value;    
        if (friendValue == "") {
            alert("Por favor, ingresa un nombre de amigo.");
            wipeData();
            return;
        } else if (!isNaN(friendValue)){
            alert("Por favor, ingresa un nombre válido. No se permiten números.");
            wipeData();
            return;
        } else if(friendsList.includes(friendValue)) {
            alert("Este amigo ya está en la lista. Por favor, ingresa un nombre diferente.");
            wipeData();
            return;
        }
            friendsList.push(friendValue);
            let printedList = document.getElementById("list");
            let friendAdded = document.createElement("li");
            const newText = document.createTextNode(friendValue);   
            friendAdded.appendChild(newText);
            printedList.appendChild(friendAdded);
            wipeData(); // Limpiar el campo de entrada
            return;
}

function wipeData(){
    document.getElementById("friendValue").value = "";
}

function drawNames() {
    if (friendsList.length < 2) {
        alert("Debes agregar al menos dos amigos para realizar el sorteo.");
        return;
    } else {
        let ramdomName = Math.floor(Math.random() * friendsList.length);
        let result = document.getElementById("result");
        let winnerName = document.createElement("li");
        const newText = document.createTextNode(friendsList[ramdomName]);   
        winnerName.appendChild(newText);
        result.appendChild(winnerName);
        friendsList.splice(ramdomName, 1); // Eliminar el nombre sorteado de la lista
        return;
    }
}