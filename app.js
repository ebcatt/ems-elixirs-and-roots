// app.js

//add a box hover animation
document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.backgroundColor = '#f0f0ff';
  });
  box.addEventListener('mouseleave', () => {
    box.style.backgroundColor = 'white';
  });
});

// Carousel for About Me page
let current = 0;
const images = document.querySelectorAll('.carousel img');

if (images.length > 0) {
  setInterval(() => {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }, 3000);
}

// Carousel for Fun Page
let current1 = 0;
const images1 = document.querySelectorAll('.carousel-fun img');

if (images1.length > 0) {
  setInterval(() => {
    images1[current1].classList.remove('active');
    current1 = (current1 + 1) % images1.length;
    images1[current1].classList.add('active');
  }, 3000);
}

