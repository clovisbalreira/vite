const catologoProdutos = document.getElementById('container-produto')

function exibirTodos(){
    const produtosEscondidos = Array.from(catologoProdutos.getElementsByClassName('hidden'))

    for( const produto of produtosEscondidos){
        produto.classList.remove('hidden')
    }
}

function esconderMasculino(){
    exibirTodos()
    const produtosMasculino = Array.from(catologoProdutos.getElementsByClassName('masculino'))

    for(const produto of produtosMasculino){
        produto.classList.add('hidden')
    }
}

function esconderFeminino(){
    exibirTodos()
    const produtosMasculino = Array.from(catologoProdutos.getElementsByClassName('feminino'))

    for(const produto of produtosMasculino){
        produto.classList.add('hidden')
    }
}

export function inicialiizarFiltros(){
    document.getElementById('exibir-todos').addEventListener('click', exibirTodos)
    document.getElementById('exibir-femininos').addEventListener('click', esconderMasculino)
    document.getElementById('exibir-masculinos').addEventListener('click', esconderFeminino)
}