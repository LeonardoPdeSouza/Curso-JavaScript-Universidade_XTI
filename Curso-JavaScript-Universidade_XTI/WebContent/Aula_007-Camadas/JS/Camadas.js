/*
 função : ligar()
 autor : Leonardo P. de Souza
 descrição : apresenta o nome do usuário e liga lampada
 */
function ligar() {
    var nome = window.prompt("Qual o seu nome?");
    window.alert("Prazer em conhecer " + nome);
    window.document.getElementById("xti").src = "../img/xlamp_on.png";
}