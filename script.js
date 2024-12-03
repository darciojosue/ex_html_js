function validarFormulario() {
    var campoA = document.getElementById('campoA').value;
    var campoB = document.getElementById('campoB').value;
    var mensagem = document.getElementById('mensagem');

    if (parseInt(campoB) > parseInt(campoA)) {
        mensagem.textContent = "Formulário válido! Número B é maior que o número A.";
        mensagem.style.color = "green";
        return true;
    } else {
        mensagem.textContent = "Formulário inválido! Número B deve ser maior que o número A.";
        mensagem.style.color = "red";
        return false;
    }
}
