document.addEventListener('DOMContentLoaded', function () {
    // Carousel
    const carouselNext = document.querySelector('[data-carousel-next]');
    const carouselPrev = document.querySelector('[data-carousel-prev]');
    const carouselItems = document.querySelectorAll('[data-carousel-item]');
    let activeIndex = 0;

    function showItem(index) {
        carouselItems.forEach((item, i) => {
            item.classList.toggle('hidden', i !== index);
        });
    }

    carouselNext.addEventListener('click', function () {
        activeIndex = (activeIndex + 1) % carouselItems.length;
        showItem(activeIndex);
    });

    carouselPrev.addEventListener('click', function () {
        activeIndex = (activeIndex - 1 + carouselItems.length) % carouselItems.length;
        showItem(activeIndex);
    });

    showItem(activeIndex);
});