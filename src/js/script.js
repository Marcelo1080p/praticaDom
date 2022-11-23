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
    arrayProdutos = ""
}

function verCarrinho() {
    const pProduto = document.createElement('p')
    const vProduto = document.createElement('p')
    const btn = document.createElement('button')
    const li = document.createElement('li')
    li.id = 'li'
    btn.type = "button"
    btn.innerText = "Remover"
    arrayProdutos.map((devolverValor) => {
        pProduto.innerText = devolverValor.produto
        vProduto.innerText = devolverValor.valorProduto
        li.append(pProduto, vProduto, btn)
        document.querySelector('.carrinho').appendChild(li)
        
    })
   btn.addEventListener('click', () => {
        document.querySelector('.carrinho').removeChild(li)
   })
    
    
}