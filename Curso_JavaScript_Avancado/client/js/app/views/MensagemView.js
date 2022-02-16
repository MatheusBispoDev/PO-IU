class MensagemView extends View {

    // Precisa passar o elemento para o parâmetro que a classe mãe necessita
    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        // <validação> ? : = Se for verdadeiro retorna uma ação, senão retorna outra 
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }

}