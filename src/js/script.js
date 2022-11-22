const arrayProdutos = []

function cadastrarProdutos(event) {
    const produto = event.children.produtos.value
    const valorProduto = event.children.valor.value
    const produtoValor = {produto, valorProduto}
    arrayProdutos.push(produtoValor)
    document.querySelector('input[name="produtos"]').value = ""
    document.getElementById("valor").value = ""
    
    console.log(arrayProdutos)
}

function verCarrinho() {
    const pProduto = document.createElement('p')
    const vProduto = document.createElement('p')
    arrayProdutos.map((devolverValor) => {
        pProduto.innerText = devolverValor.produto
        vProduto.innerText = devolverValor.valorProduto
        document.querySelector('.carrinho').append(pProduto,vProduto)
        
    })
    
}