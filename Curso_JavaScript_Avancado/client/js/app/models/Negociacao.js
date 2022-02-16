// Classe
class Negociacao {
    // Construtor
    // _ = Convenção para o programador dizendo que a variável não deve ser acessada
    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); // Object.freeze() = Congela um objeto de forma que ele não pode ser alterado depois de criado
    }

    // Criando gets, pode ser acessar como uma propriedade (n1.volume)
    get volume() {
        return this._quantidade * this._valor;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }

}