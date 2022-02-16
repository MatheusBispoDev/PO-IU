class DateHelper {

    constructor() {
        throw new Error('DateHelper não pode ser instanciado'); // throw = Dispara uma exceção
    }

    // Metódos staticos podem ser acessados sem instanciar
    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`; // ${variavel} = Interpolação de String
    }

    static textoParaData(texto) {
        // Recebe String do DOM, é necessário converter para data
        //let data = new Date(this._inputData.replace(/-/g, ',')); // uso de expressão regular para alterar o '-' por ','

        //let data = new Date(this._inputData.split('-')); // 2°Forma de fazer a conversão para Date

        // ... = Permite que o array seja desmembrado como parâmetro: Date(array[0], array[1], array[2]) - 1° item do array será o 1° do construtor e assim por diante
        // map(function (item, indice) {}) = Permite usar uma função para cada item de um objeto, semelhante ao foreach
        // => = Arrow Functions

        // Expressão regular = Valida se o formato da data é valido
        if (!/\d{4}-\d{2}-\d{2}/.test(texto)) {
            throw new Error('Deve estar no formado aaaa-mm-dd');
        }
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2)); // % = Divide por 2 e pega o resto
    }

}