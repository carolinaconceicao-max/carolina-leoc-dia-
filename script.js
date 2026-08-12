// ==============================
// CONTROLE DO TAMANHO DA FONTE
// ==============================

const aumentarFonte = document.getElementById("aumentarFonte");
const diminuirFonte = document.getElementById("diminuirFonte");

let tamanhoFonte = 100;

// Aumentar fonte
aumentarFonte.addEventListener("click", function () {

    if (tamanhoFonte < 160) {
        tamanhoFonte += 10;
        document.documentElement.style.fontSize = tamanhoFonte + "%";
    }

});

// Diminuir fonte
diminuirFonte.addEventListener("click", function () {

    if (tamanhoFonte > 80) {
        tamanhoFonte -= 10;
        document.documentElement.style.fontSize = tamanhoFonte + "%";
    }

});


// ==============================
// ALTO CONTRASTE
// ==============================

const botaoContraste = document.getElementById("contraste");

botaoContraste.addEventListener("click", function () {

    document.body.classList.toggle("alto-contraste");

    const contrasteAtivo =
        document.body.classList.contains("alto-contraste");

    botaoContraste.setAttribute(
        "aria-pressed",
        contrasteAtivo
    );

    if (contrasteAtivo) {
        botaoContraste.textContent = "Contraste normal";
    } else {
        botaoContraste.textContent = "Alto contraste";
    }

});


// ==============================
// LEITURA DO TEXTO
// ==============================

const botaoLer = document.getElementById("lerTexto");
const botaoParar = document.getElementById("pararLeitura");

botaoLer.addEventListener("click", function () {

    // Verifica se o navegador possui suporte à leitura
    if (!("speechSynthesis" in window)) {
        alert(
            "Seu navegador não oferece suporte à leitura de texto por voz."
        );
        return;
    }

    // Interrompe uma leitura anterior
    window.speechSynthesis.cancel();

    const texto = document.getElementById("texto").innerText;

    const leitura = new SpeechSynthesisUtterance(texto);

    // Define o idioma para português do Brasil
    leitura.lang = "pt-BR";

    // Velocidade da leitura
    leitura.rate = 0.9;

    // Tom da voz
    leitura.pitch = 1;

    window.speechSynthesis.speak(leitura);

});


// ==============================
// PARAR LEITURA
// ==============================

botaoParar.addEventListener("click", function () {

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }

});


// ==============================
// TECLA ESC PARA PARAR A LEITURA
// ==============================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }

    }

});