// 漢堡選單功能
document.getElementById('menuToggle').addEventListener('click', function () {
  document.getElementById('navLinks').classList.toggle('show');
});

// 輪播功能
const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let counter = 0;

function updateSlide() {
  slide.style.transform = `translateX(-${counter * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  counter = (counter - 1 + images.length) % images.length;
  updateSlide();
});

nextBtn.addEventListener('click', () => {
  counter = (counter + 1) % images.length;
  updateSlide();
});