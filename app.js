function moverBotaoNao() {
    var naoBtn = document.getElementById("nao-btn");
    var maxWidth = window.innerWidth - naoBtn.offsetWidth;
    var maxHeight = window.innerHeight - naoBtn.offsetHeight;
    var x = Math.floor(Math.random() * maxWidth);
    var y = Math.floor(Math.random() * maxHeight);
    naoBtn.style.position = "absolute";
    naoBtn.style.left = x + "px";
    naoBtn.style.top = y + "px";
}

function mostrarMensagem() {
    var simBtn = document.getElementById("sim-btn");
    var naoBtn = document.getElementById("nao-btn");

  
    var link = "https://www.youtube.com/watch?v=e2ZRUJiNLPY&ab_channel=SIGOLM%C3%ADdia";

    // Abre o link em uma nova janela
    window.open(link, "_blank");

    var coracao = document.getElementById("coracao");
    coracao.src = "coracao.png";
    coracao.style.display = "block";
    simBtn.style.display = "none";
    naoBtn.style.display = "none";
}

