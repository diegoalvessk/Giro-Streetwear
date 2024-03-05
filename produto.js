const images = document.querySelectorAll('.clickable-image');

    // Adiciona um ouvinte de eventos a cada imagem clicável
    images.forEach(image => {
        image.addEventListener('click', function() {
            // Muda o src da imagem principal para o da imagem clicada
            document.getElementById('main-image').src = this.src;
        });
    });