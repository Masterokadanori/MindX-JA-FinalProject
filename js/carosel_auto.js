const slider = document.querySelector('.slider');
const image = document.querySelectorAll('.slider img');
let currentIndex = 0;

function autoScroll() {
    currentIndex = (currentIndex + 1)%image.length;
    let scrollX = currentIndex * slider.clientWidth;
    slider.scrollTo({left: scrollX, behavior: 'smooth'});
}

setInterval(autoScroll, 3000);