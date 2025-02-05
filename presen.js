let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
function showNextSlide() {
  slides[currentIndex].classList.remove('active'); 
  currentIndex = (currentIndex + 1) % slides.length; 
  slides[currentIndex].classList.add('active') 
}
slides[currentIndex].classList.add('active');
setInterval(showNextSlide, 5000);
function toggleContent() {
  const hiddenContent = document.getElementById('hidden-content');
  if (hiddenContent) {
    hiddenContent.style.display = hiddenContent.style.display === 'block' ? 'none' : 'block';
  }
}
