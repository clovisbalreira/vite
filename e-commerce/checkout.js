import { catalogo, apagarDoLocalStorage, desenharProdutoCarrinhoSimples, lerLocalStorage, salvarLocalStorage } from "./src/utilidades";

function desenharProdutosCheckout(){
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {}
    for( const idProduto in idsProdutoCarrinhoComQuantidade){
        desenharProdutoCarrinhoSimples(idProduto, "container-produtos-checkout", idsProdutoCarrinhoComQuantidade[idProduto])
    }
}

function finalizarCompra(evento){
    evento.preventDefault()
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {}
    if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0){
        return
    }
    const dataAtual = new Date()
    const pedidoFeito = {
        dataPedido: dataAtual,
        pedido: idsProdutoCarrinhoComQuantidade
    }
    const historicoDePedidos = lerLocalStorage('historico') ?? []
    const historicoDePedidosAtualizados = [pedidoFeito, ...historicoDePedidos]
    salvarLocalStorage('historico', historicoDePedidosAtualizados)
    apagarDoLocalStorage('carrinho')
    window.location.href = './pedidos.html'
}

function atualizarPrecoCarrinho(){
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {}
    const precoCarrinho = document.getElementById('preco-total')
    let precoTotalCarrinho = 0
    for(const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade){
      precoTotalCarrinho += catalogo.find( p => p.id ===idProdutoNoCarrinho).preco * idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho]
    }
    precoCarrinho.innerHTML = `Total: R$${precoTotalCarrinho}`
  }

desenharProdutosCheckout()
atualizarPrecoCarrinho()
document,addEventListener('submit', (evt) => finalizarCompra(evt))