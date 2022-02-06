// Os eventos em JavaScript funcionam como bolhas, portanto não é necessário colocar um evento para cada linha da tabela
// Colocar um evento para a tabela já é o sufiente para o funcionamento e ainda tem um aumento de performance
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {
    //var alvoEvento = event.target; // event.target = Pega o evento que foi acionado
    //var paiDoAlvo = alvoEvento.parentNode; // event.parentNode = Pega o pai do evento que foi clicado
    //paiDoAlvo.remove();

    event.target.parentNode.classList.add("fade-out");

    //setTimeout = Fala para o JavaScript executar a função após um tempo (500milisegundos)
    setTimeout(function () {
        event.target.parentNode.remove(); // Forma refatorada
    }, 300);
});