const carrinhoExemplo = [
  {
    id: 1,
    descricao: "Pão",
    valor: 1,
  },
  {
    id: 2,
    descricao: "Carne",
    valor: 2,
  },
  {
    id: 3,
    descricao: "Bacon",
    valor: 3,
  },
];

function encontraPorDescricao(descricao, carrinho) {
  /*for (let indice = 0; indice < carrinho.lenght; indice++) {
    const item = carrinho[indice];
    if (item.descricao == descricao) {
      return item;
    }
  }*/

  return carrinho.find((item) => item.descricao == descricao);
}

function totalizaCarrinho(carrinho) {
  /*let valorTotal = 0;
  for (let indice = 0; indice < carrinho.lenght; indice++) {
    valorTotal += carrinho[indice].valor;
  }
  
  return valorTotal;*/

  return carrinho.reduce((valorTotal, item) => valorTotal + item.valor, 0);
}

function filtraPorId(id, carrinho) {
  /*let carrinhoFiltrado = [];
  for (let indice = 0; indice < carrinho.lenght; indice++) {
    const item = carrinho[indice];
    if (item.id == id) {
      carrinhoFiltrado.push(item);
    }
  }*/

  return carrinho.filter((item) => item.id == id);
}

console.log(encontraPorDescricao("Bacon", carrinhoExemplo));
console.log(filtraPorId(1, carrinhoExemplo));
console.log(totalizaCarrinho(carrinhoExemplo));
