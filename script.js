const textContainer = document.getElementById("terminal-text");
const text = textContainer.textContent;
textContainer.textContent = "";
let charIndex = 0;

function type() {
    if (charIndex < text.length) {
        textContainer.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(type, 20); // Contrôle la vitesse de dactylographie (50 millisecondes)
    }
}

type(); // Commence l'effet dactylographique


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

showSlide(currentSlide); // Afficher la première diapositive au chargement de la page
