var carouselWrapper = document.querySelector('.carousel-wrapper');
var slides = document.querySelectorAll('.carousel-item');
var slideWidth = slides[0].offsetWidth;
var slideMargin = parseInt(window.getComputedStyle(slides[0]).marginRight);

var currentSlideIndex = 0;

function plusSlides(n) {
  showSlide(currentSlideIndex + n);
}

function showSlide(n) {
  var maxIndex = slides.length - 1;
  currentSlideIndex = Math.max(0, Math.min(n, maxIndex));

  var translateX = -currentSlideIndex * (slideWidth + slideMargin);
  carouselWrapper.style.transform = 'translateX(' + translateX + 'px)';
}

showSlide(currentSlideIndex);
