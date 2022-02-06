var campoFiltro = document.querySelector("#filtrar-tabela");

// input = Aciona o evento toda vez que o usuário clicar em alguma tecla do teclado
campoFiltro.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            var expressao = new RegExp(this.value, "i"); // RegExp = Expressão Regular, serve para comparar strings
            // RegExp.test = Testa e verifica se a comparação contém algo que foi digitado, se sim, retorna true
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});