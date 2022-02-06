var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault(); // event.preventDefault() = Previne um comportamento padrão do botão dentro de um formulário
    // Acessando e pegando os valores incluídos no formulário
    var form = document.querySelector("#form-adiciona"); // Pegando o componente form do HTML
    var paciente = obtemPacienteDoFormulario(form);
    // Criando variável de erros (Array)
    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }
    
    adicionarPacienteNaTabela(paciente);
    // Apaga o formulário e lista de erros
    form.reset();
    apagarConteudoComponente("#mensagens-erro");
});

function adicionarPacienteNaTabela(paciente) {
    // Criando elementos <tr> e <td> do paciente no HTML
    var pacienteTr = montaTr(paciente);
    // Anexando o <tr> criado na tabela de paciente <tbody>
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

// Pega os dados do paciente incluídos no formulário e cria um objeto
function obtemPacienteDoFormulario(form) {
    // Criando um objeto para paciente
    var paciente = {
        nome: form.nome.value, // form.nome.value = Permite acessar o valor (.value) de um formulário através da propriedade name (name="nome")
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(peso, altura),
    }

    return paciente;
}

// Cria e monta as <td> do paciente ao incluir no formulário
function montaTr(paciente) {
    var pacienteTr = document.createElement("tr"); // document.createElement() = Possibilita a criação de um elemento no HTML
    pacienteTr.classList.add("paciente");

    // Cria os <td> (colunas) do paciente e anexa na <tr> (linha)
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); // appendChild() = Permite anexar um componente como filho em outro elemento
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr
}

// Cria e monta as <td> do paciente ao incluir no formulário
function montaTd(dadoPaciente, classe) {
    var td = document.createElement("td");
    // Altera o valor que será exibido no HTML
    td.textContent = dadoPaciente;
    // Adiciona uma classe para o componente
    td.classList.add(classe);
    return td;
}

// Valida se os valores preenchido do paciente são validos para serem incluídos na tabela
function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco"); // array.push = Coloca no array um conteúdo
    }
    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }
    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }
    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }
    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }
    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }
    return erros;
}

// Cria uma lista (ul) e mostra as mensagens de erro
function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");

    apagarConteudoComponente("#mensagens-erro")

    // forEach = Funciona de maneira igual ao For, porém ele permite executar uma função para cada item do array
    // function (erro) = Pega o item de cada array, como se fosse erros[i]
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

// Apaga o counteúdo de uma ul criada
function apagarConteudoComponente(componente) {
    // Remove o conteúdo da ul
    document.querySelector(componente).innerHTML = ""; // innerHTML = Permite editar o conteúdo interno de um HTML
}