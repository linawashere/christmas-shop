const sliderWrapper = document.querySelector('.slider__row-slider');
const rightBtn = document.getElementById('btn-right');
const leftBtn = document.getElementById('btn-left');
const items = document.querySelectorAll('.slider__row-item'); 

let currentIndex = 0;

function updateItem() {
    const offset = -currentIndex * 250;
    sliderWrapper.style.transform = `translateX(${offset}px)`;
}

leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : 0;
    updateItem();
});

rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : currentIndex;
    updateItem();
});

updateItem();