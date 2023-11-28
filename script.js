// Gera um número aleatório entre 1 e 10
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

function adivinharNumero() {
    // Obtém o valor inserido pelo usuário
    const palpiteUsuario = parseInt(document.getElementById("guessInput").value);

    // Verifica se o palpite é correto
    if (!isNaN(palpiteUsuario)) {
        if (palpiteUsuario === numeroAleatorio) {
            exibirResultado("Parabéns! Você acertou!");
        } else {
            exibirResultado(`Ops, tente novamente. O número correto é ${numeroAleatorio}.`);
        }
    } else {
        exibirResultado("Por favor, insira um número válido.");
    }
}

function exibirResultado(mensagem) {
    document.getElementById("resultado").innerText = mensagem;
}
