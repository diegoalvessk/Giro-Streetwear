const images = document.querySelectorAll('.clickable-image');

    // Adiciona um ouvinte de eventos a cada imagem clicável
    images.forEach(image => {
        image.addEventListener('click', function() {
            // Muda o src da imagem principal para o da imagem clicada
            document.getElementById('main-image').src = this.src;
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const addButton = document.getElementById('adicionar-carrinho'); // O botão de adicionar ao carrinho
        const quantityInput = document.getElementById('quantity'); // O input que mostra a quantidade
    
        addButton.addEventListener('click', function() {
            const quantity = parseInt(quantityInput.value); // Pega o valor atual do input de quantidade
            if (!isNaN(quantity)) {
                localStorage.setItem('quantidadeCamisas', quantity); // Salva a quantidade no localStorage
                alert('Adicionado ao carrinho: ' + quantity + ' camisas.');
            }
        });
    
        // Se você quiser permitir que os usuários alterem a quantidade com os botões de aumentar e diminuir:
        const decreaseButton = document.querySelector('.decrease-button');
        const increaseButton = document.querySelector('.increase-button');
    
        decreaseButton.addEventListener('click', function() {
            let quantity = parseInt(quantityInput.value);
            if (!isNaN(quantity) && quantity > 1) {
                quantityInput.value = quantity - 1;
            }
        });
    
        increaseButton.addEventListener('click', function() {
            let quantity = parseInt(quantityInput.value);
            if (!isNaN(quantity)) {
                quantityInput.value = quantity + 1;
            }
        });
    });
    
    // Pega o modal
var modal = document.getElementById("carrinhoModal");

// Pega o botão que abre o modal
var btn = document.querySelector(".fa-cart-shopping").parentNode; // O ícone está dentro de uma âncora

// Pega o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close-button")[0];

// Quando o usuário clicar no botão, abre o modal 
btn.onclick = function(event) {
  event.preventDefault(); // Impede a âncora de seguir o link
  modal.style.display = "block";
}

// Quando o usuário clicar em <span> (x), fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, fecha-o
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function atualizarTextoCarrinho() {
  // Verifica se existe alguma quantidade armazenada no localStorage
  var quantidadeCamisas = localStorage.getItem('quantidadeCamisas');

  // Pega o elemento que vai conter o texto do carrinho
  var textoCarrinho = document.getElementById('textoCarrinho');

  // Verifica se o elemento existe e se a quantidadeCamisas tem um valor
  if (textoCarrinho && quantidadeCamisas) {
    // Atualiza o texto do carrinho com a quantidade
    textoCarrinho.textContent = 'O seu carrinho tem ' + quantidadeCamisas + ' produtos.';
  } else {
    // Caso não haja quantidadeCamisas, mostra que o carrinho está vazio
    textoCarrinho.textContent = 'Seu carrinho está vazio.';
  }
}

// Código existente para abrir o modal...
var btnCarrinho = document.querySelector(".fa-cart-shopping");

btnCarrinho.addEventListener('click', function() {
  modal.style.display = "block";
  atualizarTextoCarrinho(); // Atualiza o texto do carrinho quando o modal é aberto.
});

function atualizarTextoCarrinho() {
  var quantidadeCamisas = localStorage.getItem('quantidadeCamisas');
  var textoCarrinho = document.getElementById('textoCarrinho'); // Certifique-se de ter este ID em seu modal

  if (textoCarrinho) {
    if (quantidadeCamisas) {
      textoCarrinho.textContent = 'O seu carrinho tem ' + quantidadeCamisas + ' produtos.';
    } else {
      textoCarrinho.textContent = 'Seu carrinho está vazio.';
    }
  }

  var valorCarrinho = document.getElementById('valorCarrinho');

  if(valorCarrinho){
    if(quantidadeCamisas){
        valorCarrinho.textContent = "O valor do seu carrinho é de: " + (40 * quantidadeCamisas) + " reais."
    }else{
        valorCarrinho.textContent = '';
    }
  }
}
