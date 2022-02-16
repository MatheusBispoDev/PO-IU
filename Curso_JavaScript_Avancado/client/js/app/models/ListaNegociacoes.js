class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        // Vai devolver uma cópia da negociacao criada, assim não permite alteração
        return [].concat(this._negociacoes);
    }
}