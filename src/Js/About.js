const toggleButton = document.getElementById('toggleButton');
const navList = document.getElementById('navList');

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active'); 
    console.log("Toggle clicked!"); 
});

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slides .slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        dots.forEach((dot) => {
            dot.classList.remove('active'); 
        });

        slides[index].classList.add('active'); 
        dots[index].classList.add('active'); 
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length; 
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Move to previous slide
        showSlide(currentSlide);
    }

    dots.forEach((dot) => {
        dot.addEventListener('click', () => {
            currentSlide = parseInt(dot.getAttribute('data-index'));
            showSlide(currentSlide);
        });
    });

    document.getElementById('nextButton').addEventListener('click', nextSlide);
    document.getElementById('prevButton').addEventListener('click', prevSlide);

    showSlide(currentSlide); 
});