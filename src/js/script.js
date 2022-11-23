const arrayProdutos = []
let id = 0
function cadastrarProdutos(event) {
    const produto = event.children.produtos.value
    const valorProduto = event.children.valor.value
    const produtoValor = {id,produto, valorProduto}
    arrayProdutos.push(produtoValor)
    id++
   
    document.querySelector('input[name="produtos"]').value = ""
    document.getElementById("valor").value = ""
    
    console.log(id,arrayProdutos)
}

function verCarrinho() {
    const pProduto = document.createElement('p')
    const vProduto = document.createElement('p')
    const btn = document.createElement('button')
    btn.type = "button"
    btn.innerText = "Remover"
    arrayProdutos.map((devolverValor) => {
        pProduto.innerText = devolverValor.produto
        vProduto.innerText = devolverValor.valorProduto
        document.querySelector('.carrinho').append(pProduto,vProduto, btn)
        
    })
   btn.addEventListener('click', () => {
        document.querySelector('.carrinho').removeChild(arrayProdutos[arrayProdutos.length -1])
   })
    
    
}