// script.js
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 2; // Start with the 3rd item (centered)

// Function to update carousel states
function updateCarousel() {
  items.forEach((item, index) => {
    const offset = index - currentIndex;

    // Reset styles
    item.classList.remove('active');
    item.style.transform = 'scale(0.7)';
    item.style.opacity = '0.5';

    // Dynamically adjust size and position
    if (offset === 0) {
      item.classList.add('active');
      item.style.transform = 'scale(1)';
      item.style.opacity = '1';
    } else if (offset === -1 || offset === 1) {
      item.style.transform = 'scale(0.85)';
      item.style.opacity = '0.7';
    }
  });

  // Center the carousel visually
  const centerItem = items[currentIndex];
  const carousel = document.querySelector('.carousel');
  const containerWidth = carousel.offsetWidth;
  const centerOffset = centerItem.offsetLeft + centerItem.offsetWidth / 2 - containerWidth / 2;

  carousel.style.transform = `translateX(${-centerOffset}px)`;
}

// Event listeners for navigation
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

// Initial state
updateCarousel();
