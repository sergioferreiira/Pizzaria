const botao = document.querySelectorAll('.add-to-cart');
const carrinho = document.getElementById('cart-items');



botao.forEach((elemento) => {
    elemento.addEventListener('click', (event) => {

        const botaoClicado = event.target.parentNode;

        const nome = botaoClicado.childNodes[1].textContent;
        const valor = botaoClicado.childNodes[3].textContent;

    
        function criaItem() {
        
            const novoItemLista = document.createElement('li');
            novoItemLista.classList.add('items-do-carrinho');
            novoItemLista.textContent = nome;
        
            const valorItemLista = document.createElement('strong');
            novoItemLista.appendChild(valorItemLista);
            valorItemLista.textContent = valor;
        
            console.log(novoItemLista)
        
            carrinho.appendChild(novoItemLista)
        }

        criaItem();
    });
});


