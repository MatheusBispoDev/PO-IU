class NegociacoesView extends View {

    // Precisa passar o elemento para o parâmetro que a classe mãe necessita
    constructor(elemento) {
        super(elemento);
    }

    // Usando o template String para criar elementos HTML através String
    // Utilizando map para converter os itens da listas para as <tr> e <td>
    // Utilizando reduce para criar um totalizador
    // reduce = Executa uma função para cada elemento do array e retorna um resultado no final (Somátório)
    template(listaModel) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${listaModel.negociacoes.map((itemNegociacao) => 
                        `
                            <tr>
                                <td>${DateHelper.dataParaTexto(itemNegociacao.data)}</td>
                                <td>${itemNegociacao.quantidade}</td>
                                <td>${itemNegociacao.valor}</td>
                                <td>${itemNegociacao.volume}</td>
                            </tr>
                        `
                ).join('')}
            </tbody>

            <tfoot>
                <td colspan="3"></td>
                <td>${listaModel.negociacoes.reduce((total, elemento) => total + elemento.volume, 0.0)}</td>
            </tfoot>
        </table>    
    `;
    }
}