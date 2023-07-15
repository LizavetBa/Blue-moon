const coffeeBarContainer = document.querySelector('.coffee_bar');
const coffeeBarItems = coffeeBarContainer.querySelectorAll('div');

const containerWidth = coffeeBarItems.length * 580; // 560px + 20px отступ
coffeeBarContainer.style.width = containerWidth + 'px';

const scrollContainer = () => {
  coffeeBarContainer.scrollTo({
    left: coffeeBarContainer.scrollLeft + 2,
    behavior: 'smooth'
  });
  
  if (coffeeBarContainer.scrollLeft >= coffeeBarContainer.scrollWidth - coffeeBarContainer.offsetWidth) {
    coffeeBarContainer.scrollTo({ left: 0, behavior: 'smooth' });
  }
};
const scrollButton = document.getElementById('scrollButton');

scrollButton.addEventListener('click', () => {
    coffeeBarContainer.scrollLeft += 200; // Изменяйте значение, чтобы регулировать величину прокрутки
});

const scrollInterval = setInterval(scrollContainer, 10);

coffeeBarContainer.addEventListener('mouseenter', () => {
  clearInterval(scrollInterval);
});

coffeeBarContainer.addEventListener('mouseleave', () => {
  let scrollInterval = setInterval(scrollContainer, 10);
});
 
