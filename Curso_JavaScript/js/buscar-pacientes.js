var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function () {
    var apiHttp = "https://api-pacientes.herokuapp.com/pacientes";

    // Instanciando objeto para utilizar requisição
    var xhr = new XMLHttpRequest();

    // open = Abrindo conexão do tipo GET
    xhr.open("GET", apiHttp);

    // load = Fica aguardando a reposta da requisisção
    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");
        // Verifica se a requisição foi concluída sem problemas
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            // JSON.parse = Converte JSON para objeto em JavaScript
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function (paciente) {
                adicionarPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});