const carouselImages = document.querySelector('.images');
const images = document.querySelectorAll('.images img');
const carouselButtons = document.querySelectorAll('.carousel button');
const numberOfImages = document.querySelectorAll('.images img').length;
let imageIndex = 1;
let translateX = 0;


carouselButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX +=33.2;
       
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 33.2;
      }
    }

    carouselImages.style.transform = `translateX(${translateX}%)`;
    images.forEach((image, index) => {
      if (index === imageIndex - 1) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  });
});
