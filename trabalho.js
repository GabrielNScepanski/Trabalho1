function showPrompt() {
    const name = prompt("Digite seu nome:");
    if (name) {
        document.getElementById("welcome-message").innerText = `Bem vindo ${name}`;
        document.getElementById("logout-button").style.display = "block";
    }
}

function cancel() {
    document.getElementById("welcome-message").innerText = "Acesso cancelado";
    document.getElementById("logout-button").style.display = "none";
}

function logout() {
    document.getElementById("welcome-message").innerText = "Bem vindo!";
    document.getElementById("logout-button").style.display = "none";
}
