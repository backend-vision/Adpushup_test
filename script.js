
const slider = document.querySelector('.slider-slides');
document.getElementById('backToTopBtn')?.addEventListener('click', scrollToTop);
let index = 0;
const images = slider.querySelectorAll('img');
const totalImages = images.length;

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' 
  });
}

function showNextSlide() {
  index = (index + 1) % totalImages; 
  slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showNextSlide, 3000);

// Basic form validation
document.getElementById('demo-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const firstName = document.getElementById('first-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const website = document.getElementById('website').value;
  const revenue = document.getElementById('revenue').value;

  if (firstName && email && phone && website && revenue) {
    alert('Thank you for signing up!');
  } else {
    alert('Please fill all the required fields.');
  }
});

