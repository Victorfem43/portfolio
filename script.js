const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let current = 0;
let slideInterval;
const delay = 5000; // 5 seconds

function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    current = index;
}

function nextSlide() { showSlide((current + 1) % slides.length); }
function prevSlide() { showSlide((current - 1 + slides.length) % slides.length); }

// Auto-slide
function startSlideShow() { slideInterval = setInterval(nextSlide, delay); }
function pauseSlideShow() { clearInterval(slideInterval); }

dots.forEach(dot => dot.addEventListener('click', e => {
    showSlide(parseInt(dot.dataset.index));
    pauseSlideShow();
    startSlideShow();
}));

document.querySelector('.next').addEventListener('click', () => { nextSlide(); pauseSlideShow(); startSlideShow(); });
document.querySelector('.prev').addEventListener('click', () => { prevSlide(); pauseSlideShow(); startSlideShow(); });

// Pause on hover
document.querySelector('.slideshow-container').addEventListener('mouseenter', pauseSlideShow);
document.querySelector('.slideshow-container').addEventListener('mouseleave', startSlideShow);

// Initialize
showSlide(current);
startSlideShow();
