// querySelectorAll = Pega todos os componentes do HTML que possuam um identificador (array)
var pacientes = document.querySelectorAll(".paciente"); // <tr>

// Percorre todos os pacientes e calcula o IMC
for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i]; // Pega o paciente setado no loop
    var tdPeso = paciente.querySelector(".info-peso"); // <td> que tem o peso
    var peso = tdPeso.textContent; // Pega o valor do peso
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent; // Pega o valor da altura
    var tdImc = paciente.querySelector(".info-imc");
    // Verifica se o peso e a altura são válidos para realizar o calculo do IMC
    var pesoEhValido = validaPeso(peso);
    var altureEhValida = validaAltura(altura);

    // Valida IMC
    if (!pesoEhValido) {
        tdImc.textContent = "Peso inválido!";
        // classList = Permite acessar as classes utilizadas naquele componente 
        // classList.add = Permite adicionar uma classe ao componete
        paciente.classList.add("paciente-invalido") // Adicionando uma classe do HTML para o componente paciente
    } else if (!altureEhValida) {
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido") // Adicionando uma classe do HTML para a componente paciente
    } else {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc; // toFixed(2) = Define a quantidade de casas decimais que irão ser exibidas
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 500) {
        return true;
    }
    return false;
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    }
    return false;
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}