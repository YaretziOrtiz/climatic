document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carousel-item');
    let currentItem = 0;
    const interval = setInterval(() => {
        items[currentItem].classList.remove('active');
        currentItem = (currentItem + 1) % items.length;
        items[currentItem].classList.add('active');
    }, 5000); // Cambia la imagen cada 5 segundos
});